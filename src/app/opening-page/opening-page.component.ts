import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opening-page',
  templateUrl: './opening-page.component.html',
  styleUrls: ['./opening-page.component.css']
})
export class OpeningPageComponent implements OnInit {
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
