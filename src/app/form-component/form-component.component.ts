import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
      
    }

    submit(login: any){
      console.log("Submitted----------------",login) // When click submit this method is called.
    }

}
