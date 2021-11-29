import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/core/services/provider.service';
import { Provider } from 'src/app/core/model/provider';
@Component({
  selector: 'app-main-provider',
  templateUrl: './main-provider.component.html',
  styleUrls: ['./main-provider.component.css']
})
export class MainProviderComponent implements OnInit {
  inputProvider: Provider;
  ListProvider: Provider[];
  showFormTemplate: boolean;
  msg: string;
  constructor(private serviceProvider: ProviderService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.serviceProvider.getListProviderService().subscribe(
      (data: Provider[]) => this.ListProvider= data
    )
  }
  deleteProvider(provider: Provider): void{
    let i = this.ListProvider.indexOf(provider);
    this.serviceProvider.deleteProviderService(provider.idProvider).subscribe(
      ( )=>this.ListProvider.splice(i,1)
    )
  }
  editProvider(provider: Provider): void{
    this.inputProvider = provider;
    this.showFormTemplate =true;
  }
  save(provider: Provider){
    let i = this.ListProvider.indexOf(provider);
    if(i!=-1){
      //update Provider
      this.serviceProvider.updateProviderService(provider).subscribe(
      () => {this.ListProvider[i]=provider
        this.showFormTemplate =false}
      )
    }
    else {
      //add Provider
  
      this.showFormTemplate =false
  
    this.serviceProvider.addProviderService(provider).subscribe(
      () => this.ListProvider.push(provider),
      () => this.msg='Test'
    )
    }
  }
  showForm(){
    if(this.showFormTemplate === false){
      this.showFormTemplate = true
      this.inputProvider = new Provider();
    }
    else {
  
      this.showFormTemplate = false
    }
  }
}
