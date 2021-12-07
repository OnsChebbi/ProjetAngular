import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/core/services/stock.service';
import {ActivatedRoute, Router} from "@angular/router";
import { Stock } from 'src/app/core/model/stock';
@Component({
  selector: 'app-show-one-stock',
  templateUrl: './show-one-stock.component.html',
  styleUrls: ['./show-one-stock.component.css']
})
export class ShowOneStockComponent implements OnInit {
stock :Stock;
  constructor(private ServiceStock: StockService,private router: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.stock=this.ServiceStock.CurrentStock;
    this.activated.paramMap.subscribe(
      (params)=> {
        let idStock = params.get('idStock');
        this.ServiceStock.getStockServiceById(idStock).subscribe(
          (data) => this.stock = data
        )
      }
    )

  }

  fixStock(){
    this.router.navigate(['/show-all-stock']);
  }
}
