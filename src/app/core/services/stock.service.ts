import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { environment } from 'src/environments/environment';
import {
  HttpClient
} from '@angular/common/http';
import { NumberSymbol } from '@angular/common';
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
    deleteStockService(idStock:number){
      return this.http.delete(this.url+idStock)
    }
    updateStockService(stock: Stock, idStock:number){
      return this.http.put(this.url+idStock,stock)
    }
    getStockServiceById(idStock:any){
      return this.http.get<Stock>(this.url+idStock);
    }

}
