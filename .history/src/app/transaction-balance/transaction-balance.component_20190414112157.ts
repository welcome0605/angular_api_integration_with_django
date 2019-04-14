import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
// import {MatDialog} from '@angular/material';
// import {ExcelService} from '../shared/excel';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { MdbTableService } from '../shared/mdb-table.service';
// import { $ } from 'protractor';
import * as $ from 'jquery';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

// export interface PeriodicElement {
//   Unique_ID: number;
//   Entry_Date: string;
//   _Date: string;
//   Description: string;
//   Dr_Account: number;
//   Dr_Name: string;
//   Cr_Account: number;
//   Cr_Name: string;
//   Amount: number;
//   Curreny: string;
//   Curreny_Rate: number;
//   _Document: string;
//   Comment: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {Unique_ID: 1, Entry_Date: '2001-01-16', _Date: '2007-04-30', Description: 'Here',
//    Dr_Account: 654721, Dr_Name: 'qwe', Cr_Account: 574463, Cr_Name: 'tyu', Amount: 123,
//     Curreny: 'usd', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'},
//   {Unique_ID: 2, Entry_Date: '2011-12-05', _Date: '2005-08-01', Description: 'I am',
//    Dr_Account: 477944, Dr_Name: 'asd', Cr_Account: 865335, Cr_Name: 'ghj', Amount: 345,
//     Curreny: 'gbp', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'},
//   {Unique_ID: 3, Entry_Date: '2008-02-21', _Date: '2004-06-05', Description: 'There',
//    Dr_Account: 158374, Dr_Name: 'zxc', Cr_Account: 355366, Cr_Name: 'cvb', Amount: 654,
//     Curreny: 'euro', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'},
// ];
@Component({
  selector: 'app-transaction-balance',
  templateUrl: './transaction-balance.component.html',
  styleUrls: ['./transaction-balance.component.css']
})

export class TransactionBalanceComponent implements OnInit {
  elements: any = [{Unique_ID: 1, Entry_Date: '2001-01-16', _Date: '2007-04-30', Description: 'Here',
  Dr_Account: 654721, Dr_Name: 'qwe', Cr_Account: 574463, Cr_Name: 'tyu', Amount: 123,
   Curreny: 'usd', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'},
 {Unique_ID: 2, Entry_Date: '2011-12-05', _Date: '2005-08-01', Description: 'I am',
  Dr_Account: 477944, Dr_Name: 'asd', Cr_Account: 865335, Cr_Name: 'ghj', Amount: 345,
   Curreny: 'gbp', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'},
 {Unique_ID: 3, Entry_Date: '2008-02-21', _Date: '2004-06-05', Description: 'There',
  Dr_Account: 158374, Dr_Name: 'zxc', Cr_Account: 355366, Cr_Name: 'cvb', Amount: 654,
   Curreny: 'euro', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'}];
  headElements = ['Unique_ID', 'Entry_Date', 'Date', 'Description', 'Dr_Account', 'Dr_Name', 'Cr_Account', 
      'Cr_Name', 'Amount', 'Curreny', 'Curreny_Rate', 'Document', 'Comment'];

  searchText: string = '';
  previous: string;

  constructor(private tableService: MdbTableService) { }
  // @HostListener('input') oninput() {
  //   this.searchItems();
  // }
  

  ngOnInit() {
    
    // for (let i = 1; i <= 10; i++) {
    //   this.elements.push({ id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i });
    // }

    // this.elements.push(ELEMENT_DATA);

    // this.elements.push({Unique_ID: 1, Entry_Date: '2001-01-16', _Date: '2007-04-30', Description: 'Here',
    // Dr_Account: 654721, Dr_Name: 'qwe', Cr_Account: 574463, Cr_Name: 'tyu', Amount: 123,
    //  Curreny: 'usd', Curreny_Rate: 1.3, _Document: 'test', Comment: 'test'});

    this.tableService.setDataSource(this.elements);
    this.elements = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }
  
  // displayedColumns: string[] = ['>>', 'Unique_ID', 'Entry_Date', '_Date', 'Description', 'Dr_Account', 'Dr_Name', 'Cr_Account', 'Cr_Name', 'Amount', 'Curreny', 'Curreny_Rate', '_Document', 'Comment'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.searchItems(filterValue);
    // console.log('here');
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  editField: string;
  balanceList: Array<any> = [
    { Account_Number: 1, _Tyoe: 'Active', Account_Name: 30, Starting_Balance: 'Depends', Dr_Sum: 1, Cr_Sum: 3, Ending_Balance: 80, Curreny: 'test', Comment: 'test' },
    { Account_Number: 2, _Tyoe: 'Test', Account_Name: 30, Starting_Balance: 'Depends', Dr_Sum: 1, Cr_Sum: 3, Ending_Balance: 80, Curreny: 'test', Comment: 'test' },
    { Account_Number: 3, _Tyoe: 'Test', Account_Name: 30, Starting_Balance: 'Depends', Dr_Sum: 1, Cr_Sum: 3, Ending_Balance: 80, Curreny: 'test', Comment: 'test' },
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

  exportAsXLSX() {
    console.log('excel');
    this.exportAsExcelFile(this.balanceList, 'sample');
  }

  openTransaction() {
    // console.log($('div.modal-backdrop.fade.show'));
    // alert("Should implement here");
    // document.getElementsByClassName('modal-backdrop').style.display = 'block';
    // $('.modal-backdrop fade show').css('z-index', '-100 !important');
  }

  closeTransaction() {
  }

  openAccount() {
    alert("Should implement here");
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void { 
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  searchItems(filterValue) {
    const prev = this.tableService.getDataSource();
    // console.log('filter');

    if (!filterValue) {
      this.tableService.setDataSource(this.previous);
      this.elements = this.tableService.getDataSource();
    }

    if (filterValue) {
      console.log('filter');
      this.elements = this.tableService.searchLocalDataBy(filterValue);
      this.tableService.setDataSource(prev);
    }
  }

  show_hide() {
    $('.hide1').attr('dsiplay', 'none');
    $('.hide2').remove();
    $('#hide_column').html('>>');
  }

  // filterChange() {
  //   console.log('filter');
  // }
}