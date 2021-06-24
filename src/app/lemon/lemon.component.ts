import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LemoninfoComponent } from '../lemoninfo/lemoninfo.component';

@Component({
  selector: 'app-lemon',
  templateUrl: './lemon.component.html',
  styleUrls: ['./lemon.component.css']
})
export class LemonComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){

    this.dialog.open(LemoninfoComponent);

  }

}
