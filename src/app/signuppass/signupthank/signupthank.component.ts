import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupthank',
  templateUrl: './signupthank.component.html',
  styleUrls: ['./signupthank.component.css']
})
export class SignupthankComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  temp(){
    console.log('signUp');
    this.router.navigate(['/temp']);
  }

}