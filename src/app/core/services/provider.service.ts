import { Injectable } from '@angular/core';
import { Provider } from '../model/provider';
import { environment } from 'src/environments/environment';
import {
  HttpClient
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  url=environment.url+"provider/"
  constructor(private http: HttpClient) { }
  CurrentProvider:Provider;
  status:boolean=false;
  MODProvider(provider:Provider){
    this.CurrentProvider=provider;
  }
  UpdateProvider(provider:Provider){
    this.CurrentProvider=provider;
    this.status=true;
  }
  getListProviderService(){
    return this.http.get<Provider[]>(this.url)
    
    }
    addProviderService(provider: Provider){
      return this.http.post(this.url, provider)
    }
    deleteProviderService(id:string){
      return this.http.delete(this.url+id)
    }
    updateProviderService(provider:Provider, id:string){
      return this.http.put(this.url+id,provider)
    }
    getProviderServiceById(id:any){
      return this.http.get<Provider>(this.url+id);
    }
}
