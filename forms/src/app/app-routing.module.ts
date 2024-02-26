import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { File1Component } from './file1/file1.component'; 
import { File2Component } from './file2/file2.component';
import { File3Component } from './file3/file3.component';
const routes: Routes = [
  { path: '', redirectTo: '/file1', pathMatch: 'full' },
  { path: 'file1', component: File1Component },
  { path: 'file2', component: File2Component },
  { path: 'file3', component: File3Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
