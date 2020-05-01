import { PagesComponent } from './pages.component';
import { NgModule } from "@angular/core";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './progress/pages.routes';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';




@NgModule ({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    PagesComponent,
    GraficaDonaComponent
  ],
  imports:[
    SharedModule,
    FormsModule,
    ChartsModule,

    PAGES_ROUTES
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ]
})

export class PagesModule {}
