import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  Unique_ID: number;
  Entry_Date: string;
  _Date: string;
  Description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Unique_ID: 1, Entry_Date: '2001-12-31', _Date: '2001-12-31', Description: 'Here'},
  {Unique_ID: 2, Entry_Date: '2001-12-31', _Date: '2001-12-31', Description: 'I am'},
  {Unique_ID: 3, Entry_Date: '2001-12-31', _Date: '2001-12-31', Description: 'There'},
];
@Component({
  selector: 'app-transaction-balance',
  templateUrl: './transaction-balance.component.html',
  styleUrls: ['./transaction-balance.component.css']
})
export class TransactionBalanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  displayedColumns: string[] = ['Unique_ID', 'Entry_Date', '_Date', 'Description'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
