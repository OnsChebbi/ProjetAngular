import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { environment } from 'src/environments/environment';
import {
  HttpClient
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class StockService {
  url=environment.url+"stocks/"
  constructor(private http: HttpClient) { }
  CurrentStock:Stock;
  status:boolean=false;
  MODProvider(stock : Stock){
    this.CurrentStock=stock;
  }
  UpdateProvider(stock :Stock){
    this.CurrentStock=stock;
    this.status=true;
  }
  getListStockService(){
    return this.http.get<Stock[]>(this.url)
    
    }
    addStockService(stock: Stock){
      return this.http.post(this.url, stock)
    }
    deleteStockService(id:string){
      return this.http.delete(this.url+id)
    }
    updateStockService(stock: Stock, id:string){
      return this.http.put(this.url+id,stock)
    }
    getStockServiceById(id:any){
      return this.http.get<Stock>(this.url+id);
    }

}
