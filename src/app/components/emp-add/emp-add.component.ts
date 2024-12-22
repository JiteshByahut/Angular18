import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { EmployeeModel } from '../../models/Employee';
import { Route, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-emp-add',
  imports: [ReactiveFormsModule],
  templateUrl: './emp-add.component.html',
  styleUrl: './emp-add.component.css'
})
export class EmpAddComponent {
  employeeForm: FormGroup = new FormGroup({});
  empObj: EmployeeModel = new EmployeeModel();
  empList: EmployeeModel[] = [];

  constructor(private router: Router, private http: HttpService) {
    this.createForm();
  }
  ngInit(){
    
  }
  createForm(){
    this.employeeForm = new FormGroup({
        empId: new FormControl(this.empObj.empId, [Validators.required, Validators.maxLength(2)]),
        name: new FormControl(this.empObj.name, [Validators.required, Validators.maxLength(25)]),
        city: new FormControl(this.empObj.city, [Validators.required, Validators.maxLength(10)]),
        emailId: new FormControl(this.empObj.emailId, [Validators.required, Validators.email]),
        mobile: new FormControl(this.empObj.mobile, [Validators.required, Validators.maxLength(10)])
    })
  }

  save(){
    this.http.post(this.employeeForm.value);
    // const data = localStorage.getItem('EmpData');
    // if(data != null)
    // {
    //   const parseData = JSON.parse(data);
    //   this.employeeForm.controls['empId'].setValue(parseData.length + 1);
    //   this.empList = JSON.parse(data);
    // }
    // this.empList.unshift(this.employeeForm.value);
    // localStorage.setItem('EmpData', JSON.stringify(this.empList))
  }
  back(){
    this.router.navigate(['emp=list']);
  }
}
