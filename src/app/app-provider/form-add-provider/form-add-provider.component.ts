import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Provider } from 'src/app/core/model/provider';
@Component({
  selector: 'app-form-add-provider',
  templateUrl: './form-add-provider.component.html',
  styleUrls: ['./form-add-provider.component.css']
})
export class FormAddProviderComponent implements OnInit {
  @Input() provider:Provider;
  @Output() AddEvent = new EventEmitter<Provider>();
  constructor() { }

  ngOnInit(): void {
    this.provider= new Provider;
  }
  save(){
    this.AddEvent.emit(this.provider);
    this.provider = new Provider();
  }
}
