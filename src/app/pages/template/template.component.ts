import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  // private ngForm : NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(userInfo: NgForm) {

    console.log(userInfo.value)
  }

}
