import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModel } from '../../models/Employee';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-emp-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './emp-edit.component.html',
  styleUrl: './emp-edit.component.css'
})
export class EmpEditComponent {
  employeeForm: FormGroup = new FormGroup({});
  empObj: EmployeeModel = new EmployeeModel();
  empList: EmployeeModel[] = [];
  empId: number = 0;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private http: HttpService) {
    //this.createForm();
  }
  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.empId = Number(id);
    this.createForm();
  }
  createForm() {
    // debugger
    // const data = localStorage.getItem('EmpData');
    // if (data != null) {
    //   this.empList = JSON.parse(data);
    //   const emp = this.empList.find(i => i.empId == Number(this.empId));
    //   if (emp != null) {
    //     this.employeeForm = new FormGroup({
    //       empId: new FormControl(this.empId),
    //       name: new FormControl(emp.name),
    //       city: new FormControl(emp.city),
    //       emailId: new FormControl(emp.emailId),
    //       mobile: new FormControl(emp.mobile)
    //     })
    //   }
    // }
    this.http.getById(this.empId.toString()).subscribe(data=>{
      console.log(data);
      this.employeeForm = new FormGroup({
        empId: new FormControl(data.empId),
        name: new FormControl(data.name),
        city: new FormControl(data.city),
        emailId: new FormControl(data.emailId),
        mobile: new FormControl(data.mobile)
      })
    });
    
  }

  save() {
    this.http.put(this.employeeForm.value);
    // debugger
    // const data = localStorage.getItem('EmpData');
    // if (data != null) {
    //   this.empList = JSON.parse(data);
    //   const emp = this.empList.find(i => i.empId == Number(this.empId));
    //   if (emp != null) {
    //     emp.name = this.employeeForm.value.name;
    //     emp.city = this.employeeForm.value.city;
    //     emp.emailId = this.employeeForm.value.emailId;
    //     emp.mobile = this.employeeForm.value.mobile;
    //     //this.empList.unshift(this.employeeForm.value);
    //     localStorage.setItem('EmpData', JSON.stringify(this.empList));
    //   }
    // }
  }
  back(){
    this.router.navigate(['/emp-list']);
  }
}
