import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RatesResponse } from '../models/ratesResponse';
import { Currency } from '../models/currency';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

    public currencies:Currency[]=[];


  constructor(private http:HttpClient) {}
  
   public loadExchange(from:string,to:string) {
    return this.http.get<RatesResponse>("https://api.frankfurter.app/latest",
    {
      params:{
        from:from,
        to:to
      }
    });
  }
  
  public loadCurrencies(){
    this.currencies=[];
     return this.http.get<{[key:string]:string}>("https://api.frankfurter.app/currencies").subscribe((response)=>{
       return Object.entries(response).forEach(([code,name])=>{
         this.currencies.push({
           code:code,
           name:name
         })
       });
    })
  }};
