import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { cab } from 'types/cab';
interface Cab {
  cabname: string;
  cabloc: string;
  cabdes: string;
  src: string;
  price: number;
}

@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.css']
})
export class CabsComponent implements OnInit {
  cabs: Cab[] = [
    {
      cabname:'XUV 500',
      cabloc: 'NIT RAIPUR',
      cabdes: 'Railway Station',
      src:'https://images.hindustantimes.com/auto/img/2021/11/13/1600x900/Mahindra-XUV500-Exterior-HT_Auto_1588073744826_1588073745025_1636778427928.jpg',
      price: 500,
    },
    {
      cabname:'XLYO',
      cabloc: 'NIT RAIPUR',
      cabdes: 'Airport',
      src:'https://cdn.autoportal.com/img/new-cars-gallery/mahindra/xylo/exterior/mahindra-xylo-d56fee5.jpg',
      price: 700,

     
    },
    {
      cabname:'Swift Dezire',
      cabloc:'Railway Station',
      cabdes: 'Motibagh',
      src:'https://financialexpresswpcontent.s3.amazonaws.com/uploads/2016/10/PS-39.jpg',
      price: 450,
      
    },
  ];
  
    
  constructor(private route: Router) { }

  ngOnInit(): void {}


}
