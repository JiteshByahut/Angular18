import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router, RouterModule } from '@angular/router';
import  {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { EmployeeModel } from './models/Employee';
import { format } from 'path';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 18';
/**
 *
 */
constructor(private router: Router) {
}
  goToEmpAdd(){
    this.router.navigate(['/emp-add']);
  }
}
