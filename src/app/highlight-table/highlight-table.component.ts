import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-table',
  templateUrl: './highlight-table.component.html',
  styleUrls: ['./highlight-table.component.css']
})
export class HighlightTableComponent implements OnInit {
  num1: number;
  num2: number;
  table: {}[] = [];
  cols: {}[]= [];
  cell: {}= null;
  c:number;
  r:number;
  p:number;
  key: string = null;
  rowslength:number = 2;
  columnslength:number = 2;

  constructor() {
    this.makeTable();
  }

  ngOnInit(){
    console.log("ngOnInit() is running");
  }

        makeTable(){
          console.log("checking makeTable() runs");
          for(this.r = 0; this.r < this.rowslength; this.r++){
            for(this.c = 0; this.c < this.columnslength; this.c++){
              console.log("-----start-----");
              console.log("this.r = " + this.r + ", this.c = " + this.c);
              this.key = "r" + this.r + "c" + this.c;
              console.log("this.key = " + this.key);
              console.log("typeof(this.key) = " + typeof(this.key));
              // console.log("typeof(this.cell) = " + typeof(this.cell));
              this.cell = { [this.key]: this.key };
              console.log("this.cell: " + this.cell);
              this.cols.push(this.cell);
              console.log("this.cols: " + this.cols);
            }
            this.table.push(this.cols);
            this.cols = [];
        }
        console.log("this.table: " + this.table);
      }
}
