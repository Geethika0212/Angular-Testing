import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-file1',
  templateUrl: './file1.component.html',
  styleUrls: ['./file1.component.css']
 
})
export class File1Component
 {
  firstName: string="";
  lastName: string=" ";
      constructor(private router:Router){

      }
      result(){
        if(this.firstName!==' '&& this.lastName ===' '){
        this.router.navigate (['file2']);
      }
      
    }
     
       

 }




