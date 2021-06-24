import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { from } from 'rxjs';
import { BananainfoComponent } from '../bananainfo/bananainfo.component';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css']
})
export class BananaComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {

    
  }

  openDialog(){
    this.dialog.open(BananainfoComponent);
  }

}
