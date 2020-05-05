import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

 this.contarTres().then ( mensaje => {
  console.log ( "se cumplio la promesa" , mensaje)
})
.catch (err => console.error ("Ha ocurrido un error" ,err));


  }

  ngOnInit(): void {
  }

  contarTres():Promise<boolean>{
    return new Promise((resolve,reject) => {

      let contador=0;

       let intervalo = setInterval(() => {
        contador +=1;
        console.log(contador)
        if(contador=== 3){
          console.log("termino");
          resolve(true);
          clearInterval(intervalo);
      }
        },1000)
      });
  }

}
