import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Stock } from 'src/app/core/model/stock';

@Component({
  selector: 'app-form-add-stock',
  templateUrl: './form-add-stock.component.html',
  styleUrls: ['./form-add-stock.component.css']
})
export class FormAddStockComponent implements OnInit {
  @Input() stock:Stock;
  @Output() AddEvent = new EventEmitter<Stock>();
  constructor() { }

  ngOnInit(): void {
    this.stock= new Stock;
  }
  save(){
    this.AddEvent.emit(this.stock);
    this.stock= new Stock;
  }

}
