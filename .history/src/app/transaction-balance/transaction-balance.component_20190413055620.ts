import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  Entry_Date: string;
  Unique_ID: number;
  _Date: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Unique_ID: 1, Entry_Date: 'Hydrogen', _Date: 1.0079, symbol: 'H'},
  {Unique_ID: 2, Entry_Date: 'Helium', _Date: 4.0026, symbol: 'He'},
  {Unique_ID: 3, Entry_Date: 'Lithium', _Date: 6.941, symbol: 'Li'},
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
  
  displayedColumns: string[] = ['Unique_ID', 'Entry_Date', '_Date', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
