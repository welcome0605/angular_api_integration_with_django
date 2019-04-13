import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
// import {MatDialog} from '@angular/material';

export interface PeriodicElement {
  Unique_ID: number;
  Entry_Date: string;
  _Date: string;
  Description: string;
  Dr_Account: number;
  Dr_Name: string;
  Cr_Account: number;
  Cr_Name: string;
  Amount: number;
  Curreny: string;
  Curreny_Rate: number;
  _Document: string;
  Comment: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Unique_ID: 1, Entry_Date: '2001-01-16', _Date: '2007-04-30', Description: 'Here',
   Dr_Account: 654721, Dr_Name: 'qwe', Cr_Account: 574463, Cr_Name: 'tyu', Amount: 123,
    Curreny: 'usd', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'},
  {Unique_ID: 2, Entry_Date: '2011-12-05', _Date: '2005-08-01', Description: 'I am',
   Dr_Account: 477944, Dr_Name: 'asd', Cr_Account: 865335, Cr_Name: 'ghj', Amount: 345,
    Curreny: 'gbp', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'},
  {Unique_ID: 3, Entry_Date: '2008-02-21', _Date: '2004-06-05', Description: 'There',
   Dr_Account: 158374, Dr_Name: 'zxc', Cr_Account: 355366, Cr_Name: 'cvb', Amount: 654,
    Curreny: 'euro', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'},
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
  
  displayedColumns: string[] = ['Unique_ID', 'Entry_Date', '_Date', 'Description', 'Dr_Account', 'Dr_Name', 'Cr_Account', 'Cr_Name', 'Amount', 'Curreny', 'Curreny_Rate', '_Document', 'Comment'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  editField: string;
  balanceList: Array<any> = [
    { Account_Number: 1, _Tyoe: 'Aurelia Vega', Account_Name: 30, Starging_Balacne: 'Deepends', Dr_Sum: 1, Cr_Sum: 3, Ending_Balance: 80, Curreny: 'test', Comment: 'test' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];



  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.balanceList[id][property] = editField;
  }

  remove(id: any) {
    this.balanceList.splice(id, 1);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(AddTransactionDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
// @Component({
//   selector: 'add-transaction-dialog',
//   templateUrl: 'add-transaction-dialog.html',
// })
// export class AddTransactionDialog {}
