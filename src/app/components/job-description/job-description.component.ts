import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {
  showFull = false;
  @Input() cardInfo:any;
  constructor() { }

  ngOnInit(): void {

    
  }

  showDetails() {
    this.showFull = true;
  }
}