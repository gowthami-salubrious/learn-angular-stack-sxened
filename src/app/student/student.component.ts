import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() myInputData: string;
  @Output() myOutputData: EventEmitter<any> = new EventEmitter();
  myOutputString = 'Child to Parent Component';
  // @ViewChild('messageRef', {static: true}) myViewData: ElementRef;

  constructor() {
    setTimeout(() => {
      console.log('*****************');
      this.myInputData = 'in side comp';
    }, 10000);
  }

  ngOnChanges() {
    console.log('on changes');
  }

  ngOnInit() {
    console.log('on init');
  }

  ngDoCheck() {
  console.log('do check');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterContentChecked() {
console.log('after content checked');
  }

  ngAfterViewInit() {
console.log('after view init');
  }

  ngAfterViewChecked() {
console.log('after view checked');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

























  sendValuestoParent1(value) {
  //   // this.myOutputData.emit(this.myOutputString);
    this.myOutputData.emit(value);
  }

  sendValuestoParent = (value) => this.myOutputData.emit(value);

}