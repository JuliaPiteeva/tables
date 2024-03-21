import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import dxDataGrid from 'devextreme/ui/data_grid';
import { EventColumnsInfo, EventTableColumn, EventTableInfo } from './event-table-info';
import { CommonModule } from '@angular/common';
import { custom } from 'devextreme/ui/dialog';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { ColumnChooserComponent } from '../../core/components/column-chooser/column-chooser.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule, 
    DxDataGridModule,
    DxToolbarModule,
    ColumnChooserComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.sass'
})

export class EventsComponent {
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;
  tableInstance: dxDataGrid | undefined;
  gridInfo: any;
  columns: any = [];
  toolbarItemsOption: any;
  isColumnChooserOpen = false;

  constructor(private cd: ChangeDetectorRef){
    EventColumnsInfo.forEach((el: EventTableColumn, index: number) => {
      el.index = index;
      el.visible = true;
      this.columns.push(el);
    });
    this.initGridInfo();
    this.prepareToolbar();
  }
  
  initGridInfo(): void {
    this.gridInfo = {
      ...EventTableInfo,
      dataSource: new CustomStore({
        load: (options: any) => {
          TableMockData.map((el: any) => {
            return el["status_toggle"] = el.status;
          })
          return TableMockData;
        },

      }),
      onInitialized: (e: any) => {
        this.tableInstance = e.component;
        this.cd.detectChanges();
      },
    }
  }

  prepareToolbar(){
    this.toolbarItemsOption = {
      printButton: {
        hint: 'Печать',
        type: 'default',
        elementAttr: {class: 'extended-icon-button print-btn'},
        onClick: () => {
          this.printPage();
        }
      },
      hideMsgButton: {
        template: 'Скрыть обработанные сообщения',
        text: 'Скрыть обработанные сообщения', 
        hint: 'Скрыть обработанные сообщения',
        type: 'default',
        elementAttr: {class: 'text-button'},
        onClick: () => {
          this.hideMessages();
        }
      },
      columnChooser: {
        hint: 'Настроить столбцы',
        value: true,
        elementAttr: { class: 'extended-icon-button column-chooser-btn' },
        onClick: () => {
          this.isColumnChooserOpen = true;
        },
      },
    }
  }

  printPage(){}

  hideMessages(){
    this.dataGrid.instance.filter([
      [ "status", "=", "unprocessed" ]
    ]);
  }

  handleRecord(e: any){
    let myDialog = this.confirmAction("Пометить сообщение как обработанное?");
    myDialog.show().then((dialogResult: any) => {
        console.debug("confirm", dialogResult);
    });

  }
  
  confirmAction(message?: string, btnText?: string){
    return custom({
      showTitle: false,
      messageHtml: message,
      buttons: [{
          text: btnText || "Подтвердить",
          onClick: (e:any) => { return true }
        },{
          text: "Отмена", 
          onClick: (e:any) => { return false }
        }]
    });
  }

  onOptionChanged(e: any) {}
}

const TableMockData =  
 [{
  date_of: '15.03.15',
  status: 'processed',
  type: 'request'
},
{
  date_of: '15.04.15',
  status: 'unprocessed',
  type: 'response'
}
]