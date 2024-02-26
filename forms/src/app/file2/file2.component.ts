import { Component, OnInit } from '@angular/core';

 
interface Items {
  name: string;
  email: string;
  contact: string;
 }
 
@Component({
  selector: 'app-file2',
  templateUrl: './file2.component.html',
  styleUrls: ['./file2.component.css']
})
export class File2Component {
  Given: Items[] = [];
  private _result = { name: '', email: '', contact: '' };
  public get result() {
    return this. _result;
  }
  public set result(value) {
    this._result = value;
  }
 
  final() {
    if (this.result.name && this.result.email && this.result.contact) {
      this.Given.push( this.result );
 
      this.result = { name: '', email: '', contact: ''  };
    }
  }
}