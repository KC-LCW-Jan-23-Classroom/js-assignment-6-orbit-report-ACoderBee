import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})

export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];
  name:string = "GPS 938";
  type:string = "Positioning";
  launchDate:string = "2001-11-01";
  orbitType:string = "HIGH";
  operational:boolean = true;

  constructor() { }

  ngOnInit() {
  }

	sort(column: string): void {
		// array.sort modifies the array, sorting the items based on the given compare function
		this.satellites.sort(function (a: Satellite, b: Satellite): number {
			if (a[column] < b[column]) {
				return -1;
			} else if (a[column] > b[column]) {
				return 1;
			}
			return 0;
		});
	}
 //array select odd array change color
 odd(satellites: []):boolean{
  for(let i=0; i=satellites.length; i++){
    if(i%2===1){
      return true;//change color or should I use 1/0 
    }
  }
 }
 

}
