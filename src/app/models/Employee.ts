export class EmployeeModel {
    empId:number;
    name:string;
    city:string;
    emailId:string;
    mobile:string;
    
    constructor() {
        this.empId=0;
        this.name=''
        this.city='';
        this.emailId='';
        this.mobile='';
    }
}