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
  getListStockService(){
    return this.http.get<Stock[]>(this.url)
    
    }
    addStockService(stock: Stock){
      return this.http.post(this.url, stock)
    }
    deleteStockService(id:string){
      return this.http.delete(this.url+id)
    }
    updateStockService(stock:Stock){
      return this.http.put(this.url+stock.idStock,stock)
    }
}
