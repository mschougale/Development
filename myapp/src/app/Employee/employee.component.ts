import { Component } from '@angular/core';

@Component({
  selector: 'emp-app',
  templateUrl: 'employee.component.html',
  styleUrls: ['employee.component.css']
})

export class EmployeeComponent {
  address:string = 'Kolhapur';
  phone:string = '9970282710';

}
