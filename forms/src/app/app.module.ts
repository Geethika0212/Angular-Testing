import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { File1Component } from './file1/file1.component';
import { File2Component } from './file2/file2.component';
import { File3Component } from './file3/file3.component';
import { File4Component } from './file4/file4.component';


@NgModule({
  declarations: [
    AppComponent,
    File1Component,
    File2Component,
    File3Component,
    File4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
