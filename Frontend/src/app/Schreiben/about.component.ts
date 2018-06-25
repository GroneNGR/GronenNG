import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { DataService } from '../data.service';
/** @title Basic datepicker */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class DatepickerOverviewExample {}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;
  drp = [];
  drptext: string = '[]'
  
  constructor( private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  
  }
sendMeHome() {
  this.router.navigate(['/']);
}
adddrp(){
  this.drp.push(this.drptext)
  this.drptext = ''
}
}
