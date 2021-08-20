// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';



// @Component({
//   selector: 'app-reactive',
//   templateUrl: './reactive.component.html',
//   styleUrls: ['./reactive.component.css']
// })
// export class ReactiveComponent implements OnInit {
//   
//   title = 'Nested FormArray Example Add Form Fields Dynamically';
//  
//   empForm:FormGroup;
//  
//  
//   constructor(private fb:FormBuilder) {
//  
//     this.empForm=this.fb.group({
//       employees: this.fb.array([]) ,
//     })
//   }

// ngOnInit(): void {

// }
//  
//  
//   employees(): FormArray {
//     return this.empForm.get("employees") as FormArray
//   }
//  
//  
//   newEmployee(): FormGroup {
//     return this.fb.group({
//       firstName: '',
//       lastName: '',
//       skills:this.fb.array([])
//     })
//   }
//  
//  
//   addEmployee() {
//     console.log("Adding a employee");
//     this.employees().push(this.newEmployee());
//   }
//  
//  
//   removeEmployee(empIndex:number) {
//     this.employees().removeAt(empIndex);
//   }
//  
//  
//   employeeSkills(empIndex:number) : FormArray {
//     return this.employees().at(empIndex).get("skills") as FormArray
//   }
//  
//   newSkill(): FormGroup {
//     return this.fb.group({
//       skill: '',
//       exp: '',
//     })
//   }
//  
//   addEmployeeSkill(empIndex:number) {
//     this.employeeSkills(empIndex).push(this.newSkill());
//   }
//  
//   removeEmployeeSkill(empIndex:number,skillIndex:number) {
//     this.employeeSkills(empIndex).removeAt(skillIndex);
//   }
//  
//   onSubmit() {
//     console.log(this.empForm.value);
//   }
//  
//  
// }
//  
//  
// export class country {
//   id: string;
//   name: string;
//  
//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }
 
 
 

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  checkoutForm: FormGroup;
  constructor(private formBuilder: FormBuilder, ) { 
    // this.checkoutForm = formBuilder.group ({
    //   "email": new FormControl(),
    //   "name": new FormControl()
    // })
    
    // this.checkoutForm = formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],

    // })

 
  

    this.checkoutForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      items: this.formBuilder.array([
        this.formBuilder.group({
          itemId: ['1'],
          itemName: ['Raghav'],
          itemEmail: ['raghav@raghav.com']
        })
      ])
    })


  }

  checkoutForms(): FormArray{
    return this.checkoutForm.get("checkoutForm") as FormArray
  }

  ngOnInit(): void {
    // this.checkoutForm.setValue({
    //   name: 'raghav',
    //   email: 'raghav@raghav.com'
    // })

    // this.checkoutForm.patchValue({
    //   name: 'Rahul'
    // })


    ////// reading change in a particular field
    // this.checkoutForm.get('email')?.valueChanges.subscribe(data => {
    //   console.log(data);
    // })

    ////// reading change in entire form
    // this.checkoutForm.valueChanges.subscribe(data => {
    //   console.log(data)
    // })


    ////// learning status change on FormControl
    
    // this.checkoutForm.get('email')?.statusChanges.subscribe((data) => {
    //   console.log(data)
    // });
  
    // this.checkoutForm.statusChanges.subscribe(data => console.log(data))


    ////// Form Array



  }

  postData() {
    console.log(this.checkoutForm.value);
    this.resetForm();
  }

  resetForm() {
    this.checkoutForm.reset();
  }

}
