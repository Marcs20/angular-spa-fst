import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  n = 2;

  getRandom(n) {
    return Math.floor(Math.random() * n);
  }

  constructor() { }

  ngOnInit() {
  }

}