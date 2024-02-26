import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file3',
  templateUrl: './file3.component.html',
  styleUrls: ['./file3.component.css']
})
export class File3Component {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

 
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  uname="abcd";
  pword="1234";
  msg!:string
  onSubmit(): void {
    
    if ( this.myForm.value.username ==this.uname && this.myForm.value.password == this.pword)
     {
        this.router.navigate(['file2']);
     } 
    else{
      this.msg="Invalid Details";
    }
  }
}
