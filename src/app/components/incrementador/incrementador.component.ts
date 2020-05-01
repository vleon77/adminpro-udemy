import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild(" txtProgress") txtProgress:ElementRef;

   @Input ('nombre') leyenda:string = 'Leyenda';
   @Input () progreso:number = 50;

   @Output ('actualizaValor') cambiarvalor:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onChanges(nuevoValor:number){



    if(nuevoValor >=100){
      this.progreso=100;
    }else if(nuevoValor <= 0){
      this.progreso= 0;
    }else {
      this.progreso=nuevoValor;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.cambiarvalor.emit(this.progreso);
  }

  cambiarValor(valor:number){

    if(this.progreso >= 100 && valor > 0){
      this.progreso=100;
    }

    if(this.progreso <= 0 && valor < 0 ){
      this.progreso=0;
    }
        this.progreso += valor;
        this.cambiarvalor.emit(this.progreso);
        this.txtProgress.nativeElement.focus();
      }

}
