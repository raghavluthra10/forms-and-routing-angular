import { Component, OnInit } from '@angular/core';
import { OneService } from 'src/app/services/one.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  inputList: string = '';


  constructor(private oneService: OneService) {
    this.getDropDown();
   }

  fetchedListArr: any = [];
  fakeObj: any = {
    name: '',
    age: 53,
    id: 5
  };

  dropDown: Array<any> = [];

  ngOnInit(): void {
    this.fetchedListArr = this.oneService.getListArr();
    
  }

  getDropDown() {
    this.dropDown = this.oneService.getDropDownData();
  }

  addToList() {
    this.fakeObj.name = this.inputList;
    this.oneService.updateListArr(this.fakeObj);

  }

  onDelete(e: any) {
    console.log(e.target.name, 'delete')
  }

}
