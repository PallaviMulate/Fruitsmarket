import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrangeinfoComponent } from '../orangeinfo/orangeinfo.component';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.css']
})
export class OrangeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){

    this.dialog.open(OrangeinfoComponent);
  }

}
