import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-file4',
  templateUrl: './file4.component.html',
  styleUrls: ['./file4.component.css']
})
export class File4Component {
  itemForm: FormGroup;
  items: string[] = [];

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      Name: ['', Validators.required]
    });
  }

  addItem(): void {
    if (this.itemForm.valid) {
      const newOne = this.itemForm.get('Name');
      this.items.push();
      this.itemForm.reset();
    }
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
