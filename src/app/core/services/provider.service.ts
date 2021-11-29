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
  url=environment.url+"providers/"
  constructor(private http: HttpClient) { }

  getListProviderService(){
    return this.http.get<Provider[]>(this.url)
    
    }
    addProviderService(provider: Provider){
      return this.http.post(this.url, provider)
    }
    deleteProviderService(id:string){
      return this.http.delete(this.url+id)
    }
    updateProviderService(provider:Provider){
      return this.http.put(this.url+provider.idProvider,provider)
    }
}
