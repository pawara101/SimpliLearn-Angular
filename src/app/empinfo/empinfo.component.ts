import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css'],
  providers:[RecordsService]
})
export class EmpinfoComponent implements OnInit {

  inforecieved1 : string[]=[];
  inforecieved2 : string[]=[];
  inforecieved3 : string[]=[];

  constructor(private rservice: RecordsService) { }

  ngOnInit(): void {
  }

}
