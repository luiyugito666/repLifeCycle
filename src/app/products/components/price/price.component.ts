import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector:'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{
  
  @Input()
  public price: number = 0;
//se coloca el simmbolo de $ en la variable para poder identificar que es un observable, ademas el ? se utiliza para no inicializar en el constructor, para que sea opcional
  public interval$?: Subscription;
  
  ngOnInit(): void {
    console.log('Component hijo: ngOnInit')

    this.interval$=interval(1000).subscribe(values=>console.log(`Tick: ${values}`))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component hijo: ngOnChanges'); console.log(changes)
   
  }
  ngOnDestroy(): void {
    console.log('Component hijo: ngOnDestroy');
    //el unsubscribe va a cancelar la subscripcion de ese observable(interval$)
    this.interval$?.unsubscribe();
  }


}
