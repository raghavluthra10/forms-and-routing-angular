import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {

  listArr: any = [
    {
      name: 'raghav',
      age: 23,
      id: 0
    },
    {
      name: 'koko',
      age: 43,
      id: 1
    },
    {
      name: 'arjun',
      age: 34,
      id: 2
    },
    {
      name: 'nana',
      age: 11,
      id: 3
    },
  ]

  dropDown: any  = [
    { title: 'ALL', id: 1 },
    { title: 'A', id: 2 },
    { title: 'B', id: 3 }
  ]



  constructor() { }

  getListArr() {
    return this.listArr;
  }

  getDropDownData() {
    return this.dropDown;
  }

  updateListArr(obj: any) {
    this.listArr.push(obj);
  }
}
