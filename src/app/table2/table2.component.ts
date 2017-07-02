import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {
  rowj: number;
  columni: number;
  table: {}[] = [];
  cols: {}[]= [];
  cell: {}= null;
  c:number;
  r:number;
  key: string = null;
  rowslength:number = 6;
  columnslength:number = 6;

  constructor() {
    this.makeTable();
  }

  ngOnInit(){
  }

        makeTable(){
          for(this.r = 0; this.r < this.rowslength; this.r++){
            for(this.c = 0; this.c < this.columnslength; this.c++){
              this.key = "r" + this.r + "c" + this.c;
              this.cell = { [this.key]: this.key };
              this.cols.push(this.cell);
            }
            this.table.push(this.cols);
            this.cols = [];
        }
      }
  }
