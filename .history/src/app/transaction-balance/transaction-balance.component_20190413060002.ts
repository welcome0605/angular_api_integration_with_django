import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  Unique_ID: number;
  Entry_Date: string;
  _Date: string;
  Description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Unique_ID: 1, Entry_Date: '2001-01-16', _Date: '2007-04-30', Description: 'Here'},
  {Unique_ID: 2, Entry_Date: '2011-12-05', _Date: '2005-08-01', Description: 'I am'},
  {Unique_ID: 3, Entry_Date: '2008-02-21', _Date: '2004-06-05', Description: 'There'},
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
