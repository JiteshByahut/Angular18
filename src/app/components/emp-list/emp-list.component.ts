import { Component } from '@angular/core';
import { EmployeeModel } from '../../models/Employee';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { error } from 'node:console';

@Component({
  selector: 'app-emp-list',
  imports: [RouterLink],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {
  empList: EmployeeModel[] = [];
  constructor(private http: HttpService) {

  }
  ngOnInit() {
    // const data = localStorage.getItem('EmpData');
    // if (data != null) {
    //   this.empList = JSON.parse(data);
    // }
    this.http.getAll().subscribe(data=> this.empList = data,
      (error)=>{
        console.log('Error employee list api');
      },
    );
    console.log(this.empList);
  }
  delete(id: number) {
    this.http.delete(id.toString());
    // const data = localStorage.getItem('EmpData');
    // if (data != null) {
    //   this.empList = JSON.parse(data);
    //   this.empList = this.empList.filter(i => i.empId != id);
    //   localStorage.setItem('EmpData', JSON.stringify(this.empList));
    // }
  }
}
