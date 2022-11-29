import { RateCurrency } from "./RateCurrency";

export interface RatesResponse{
  amount:number,
    base:String,
    date:String,
    rates:RateCurrency
}