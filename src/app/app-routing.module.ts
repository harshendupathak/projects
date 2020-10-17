import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { IndexComponent } from './post/index/index.component';
import { ViewComponent } from './post/view/view.component';

const routes: Routes = [  {
  path:'user',redirectTo:'user/index',pathMatch:'full'},
{path:'user/index',component:IndexComponent},
{path:'user/:userId/view',component:ViewComponent},
{path:'user/create',component:CreateComponent},
{path:'user/:userId/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
