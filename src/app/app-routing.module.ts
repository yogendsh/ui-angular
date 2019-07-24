import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SecondComponent } from './second/second.component';
import { ThridComponent } from './thrid/thrid.component';


const routes: Routes = [{path:'',redirectTo:'test',pathMatch:'full'},
{
  path: 'test',
  component: TestComponent,
  
},{
  path:'second',
  component:SecondComponent
},{
  path:'thrid',
  component:ThridComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
