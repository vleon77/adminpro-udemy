import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer,Subscriber, Subscription  } from 'rxjs';
import {retry, map,filter}from 'rxjs/operators'


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcriber:Subscription;

  constructor() {

    this.subcriber = this.regresaObservable()
      .subscribe(numero => console.log ("Subs",numero)),
      (err => console.error("Ha Ocurrido un error", err)),
      (() => console.log("Termino el Observable"));



   }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.subcriber.unsubscribe();

  }

  regresaObservable (): Observable<any> {

    return new Observable ((obsever:Observer<any>) => {

      let contador = 0;

      let intervalo = setInterval(()=>{

        contador += 1;
        const salida = {
          valor:contador
        }

        obsever.next(salida);

        if(contador === 3){
          clearInterval(intervalo);
          obsever.complete();
        }


       /* if(contador === 2){
         // clearInterval(intervalo);
          obsever.error("No es 3");
        } */

      }, 1000);

    }).pipe(
      map (numero => numero.valor),
      filter ((valor, index) => {

        if (valor % 2 == 1 ){
          return true;

        }else {
          return false;
        }

      })
      )
  }

}
