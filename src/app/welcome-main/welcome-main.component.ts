import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome-main',
  templateUrl: './welcome-main.component.html',
  styleUrls: ['./welcome-main.component.scss']
})
export class WelcomeMainComponent implements OnInit {

  constructor() { }

  @ViewChild('name') nameKey!: ElementRef

  ngOnInit(): void {
  }
  startQuize() {
    localStorage.setItem("name", this.nameKey.nativeElement.value);
  }

}
