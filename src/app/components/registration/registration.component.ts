import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  value1: string;
  value2: any;

  constructor() {}

  ngOnInit(): void {
  }

  register() {
    localStorage.setItem('email', this.value1)
    localStorage.setItem('password', this.value2)
  }

}

