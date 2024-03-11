import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import dxDataGrid from 'devextreme/ui/data_grid';
import { BookService } from './book.servise';
import { BookColumnsInfo, BookTableInfo } from './book-table-info';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import { OptionMode, OptionType } from './book';
import { CommonModule } from '@angular/common';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxLookupModule } from 'devextreme-angular/ui/lookup';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass'],
  standalone: true,
  imports: [
    CommonModule, 
    DxDataGridModule,
    DxToolbarModule,
    DxLookupModule,
    DxButtonModule,
    DxPopupModule,
    FormsModule
  ]
})

export class BookComponent implements OnInit, AfterViewInit {
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;
  tableInstance: dxDataGrid | undefined;
  gridInfo: any;
  columns: any = BookColumnsInfo;
  optionTypes: OptionType[] = [];
  optionModes: OptionMode[] = [];
  toolbarItemsOption: any;
  selectedRecords: any;
  isSaveBtnActive: boolean = true;
  saveAndCloseButtonOptions: any;
  actionComment: string = '';
  dialogVisible: boolean = false;
  actionName: string = "";

  constructor(
    private cd: ChangeDetectorRef,
    private bookService: BookService
  ) { 
    this.initGridInfo();
    this.prepareToolbar();
    this.optionTypes = this.bookService.getTypes()
    this.optionModes = this.bookService.getModes();
    this.saveAndCloseButtonOptions = {
      text: 'Сохранить',
      elementAttr: {class: 'text-button'},
      type: 'default',
      onClick: () => {
        this.saveAndCloseDialog()
      },
    };
  }

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {}


  refreshDataGrid() {
    this.dataGrid?.instance.refresh();
  }

  initGridInfo(): void {
    this.gridInfo = {
      ...BookTableInfo,
      dataSource: new CustomStore({
        key: 'ID',
        load: (options: any) => {
          return TableMockData;
        },

      }),
      onInitialized: (e: any) => {
        this.tableInstance = e.component;
        this.cd.detectChanges();
      },
    }
  }

  selectRecord(e: any){}

  addRecord(){
    this.dataGrid?.instance.addRow();
  }

  createClone(){
    this.refreshDataGrid();
  }

  editGroup(){}

  printPage(){}

  saveChanges(){
    this.dataGrid?.instance.saveEditData();
  }

  onEditingStart(e: any){}
  
  onRowUpdating(e: any) {
    this.leaveActionComment();
  }

  onRowRemoving(e: any){
    this.leaveActionComment();
  }

  leaveActionComment(){
    this.dialogVisible = true;
  }

  saveAndCloseDialog(){
    this.dialogVisible = false;
    this.saveChanges();
  }

  prepareToolbar(){
    this.toolbarItemsOption = {
      addButton:  {
        template: 'Добавить новую запись',
        text: 'Добавить новую запись', 
        hint: 'Добавить новую запись',
        type: 'default',
        elementAttr: {class: 'text-button'},
        onClick: () => {
          this.addRecord();
        }
      },
      cloneButton: {
        template: 'Дублировать',
        text: 'Дублировать', 
        hint: 'Дублировать',
        type: 'default',
        elementAttr: {class: 'text-button'},
        onClick: () => {
          this.createClone();
        }
      },
      editGroupButton: {
        template: 'Групповое изменение',
        text: 'Групповое изменение', 
        hint: 'Групповое изменение',
        type: 'default',
        elementAttr: {class: 'text-button'},
        onClick: () => {
          this.editGroup();
        }
      },
      printButton: {
        hint: 'Печать',
        type: 'default',
        elementAttr: {class: 'extended-icon-button print-btn'},
        onClick: () => {
          this.printPage();
        }
      },
      saveButton: {
        template: 'Сохранить изменения',
        text: 'Сохранить изменения', 
        hint: 'Сохранить изменения',
        type: 'default',
        elementAttr: {class: 'text-button'},
        onClick: () => {
          this.saveChanges();
        }
      },
    }

  }

}

const TableMockData = [ 
  {
    ID: 1,
    Type: 1,
    CompanyName: 'CompanyName',
    Mode: 2,
    State: 'активен',
    Date: '12.12.12',
    Reason: 'Reason',
    Zipcode: '582',
    Phone: '15875'
},
{
  ID: 2,
  Type: 2,
  CompanyName: 'CompanyName',
  Mode: 5,
  State: 'неактивен',
  Date: '12.12.12',
  Reason: 'Reason',
  Zipcode: '582',
  Phone: '15875'
}
]
