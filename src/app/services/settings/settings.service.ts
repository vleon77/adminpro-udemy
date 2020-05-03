import { Injectable } from '@angular/core';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

interface Ajustes{
  temaUrl:string;
  tema:string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes:Ajustes = {
    temaUrl:"assets/css/colors/default.css",
    tema:'default'
  };

  constructor() {
    this.cargarAjustes();
   }

  guardarAjustes(){

    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
  if(localStorage.getItem('ajustes')){
    this.ajustes = JSON.parse(localStorage.getItem('ajustes'));


    this.aplicarTema(this.ajustes.tema);
  }else {

    this.aplicarTema(this.ajustes.tema);
  }

}
    aplicarTema(tema:string){
      let url=`assets/css/colors/${tema}.css` ;
      document.getElementById('tema').setAttribute('href',url);

      this.ajustes.temaUrl= url;
      this.ajustes.tema = tema;

      this.guardarAjustes();


    }
}
