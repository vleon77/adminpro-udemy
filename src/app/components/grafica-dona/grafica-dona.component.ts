import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

    // Doughnut
   @Input() chartLabels: Label[] = [];
   @Input() chartData:   MultiDataSet = [];
   @Input() chartType:   ChartType = "doughnut";

  constructor() { }

  ngOnInit(): void {
  }

}
