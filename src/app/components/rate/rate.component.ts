import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { RatesResponse } from 'src/app/models/ratesResponse';
import { ExchangeService } from 'src/app/services/exchange.service';

 

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})

export class RateComponent implements OnInit {
  public selectedCurrencyFrom:string="";
  public selectedCurrencyTo:string="";
  public loadedCurrencyFrom:String='';
  public loadedCurrencyTo:string='';
  public num1:string='';
  


  public currencies?:Currency[];

  public rate:RatesResponse={
    amount:0,
    base:'',
    date:'',
    rates:{
      '':0,
    },

  }

  constructor(private exchangeService:ExchangeService) {}

  ngOnInit(): void {
    this.exchangeService.loadCurrencies();
    this.currencies = this.exchangeService.currencies;
    
  }

  public getCurrencyRate(){
    this.exchangeService.loadExchange(this.selectedCurrencyFrom, this.selectedCurrencyTo).subscribe(
      (response)=>{
        this.rate=response;
        console.log(this.rate.base);
        
        this.loadedCurrencyTo=Object.keys(this.rate.rates)[0];
        this.loadedCurrencyFrom=this.rate.base;
      }
    )
  }

}
