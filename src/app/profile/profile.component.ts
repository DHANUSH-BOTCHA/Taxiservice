import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import userData from 'db1.json';

interface User{
  fullname : string;
  mobile : number;
  email: string;
  password : string;
  address : string;
  id: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: Router) { }

  user: User[] = userData;

  ngOnInit(): void {
  
  }

}
