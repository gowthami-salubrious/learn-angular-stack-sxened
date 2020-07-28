import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LearningAngular';
  myInputstring = 'Parent to Child Component';
  show = true;

  ngOnInit() {
    setTimeout(() => {
      console.log('------------------');
      this.myInputstring = 'test';
    }, 5000);

    setTimeout(() => {
      console.log('===========================');
      this.show = false;
    }, 15000);
  }
}
