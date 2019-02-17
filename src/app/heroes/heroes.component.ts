import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {VILLAINS} from '../mock-villains';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 // hero: Hero={id:1,name:'Falalala'};
  //villain: Villain={id:1,name:'blackStick',level:100}


  villains = VILLAINS;

  constructor() { }

  ngOnInit() {
  }

}
