import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule, Timeline} from '@swimlane/ngx-charts';
import {NgxComponent} from './ngx/ngx';
import {GridsterModule} from 'angular-gridster2';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {D3Component} from './d3/d3.component';
import {ChartComponent} from './chart./chart.component';
import {TimelineComponent} from './Timeline/timeline.component';
import {GridsterComponent} from './gridster/gridster.component';

import {WeatherService} from './weather.service';




@NgModule({
  declarations: [
    AppComponent,
    NgxComponent,
    D3Component,
    GridsterComponent,
    ChartComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    GridsterModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
