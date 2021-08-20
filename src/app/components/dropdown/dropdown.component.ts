import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dropDown: Array<any>[] | undefined;
  fakeDropDown: any = [];

  constructor() { }


  ngOnInit(): void {
    this.dropDownList();
  }

  dropDownList() {
    this.fakeDropDown = this.dropDown;
    console.log(this.dropDown);
    console.log(this.fakeDropDown);
    console.log(this.fakeDropDown.title)
    return this.dropDown;
  }

}
