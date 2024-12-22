import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './components/emp-add/emp-add.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpEditComponent } from './components/emp-edit/emp-edit.component';

export const routes: Routes = [

    {path:'', component:EmpListComponent},
    {path: 'emp-add', component: EmpAddComponent},
    {path:'emp-list', component:EmpListComponent},
    {path:'emp-edit/:id', component:EmpEditComponent}
];
