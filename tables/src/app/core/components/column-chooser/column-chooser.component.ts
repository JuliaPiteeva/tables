import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { EventTableColumn } from '../../../pages/events/event-table-info';
import { CommonModule } from '@angular/common';
import { DxListModule } from 'devextreme-angular/ui/list';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

@Component({
  selector: 'app-column-chooser',
  templateUrl: './column-chooser.component.html',
  styleUrls: ['./column-chooser.component.sass'],
  standalone: true,
  imports: [CommonModule,
    DxListModule,
    DxPopupModule,
    DxToolbarModule
  ]
})
export class ColumnChooserComponent implements AfterViewInit {
  listData: any = [];
  applyOptions: any;
  selectedItems: any = [];
  isSelectionChanged = false;

  @Input() visible = false;
  @Input() columns: EventTableColumn[] = [];
  @Output() visibleChange = new EventEmitter();

  constructor() {
    this.applyOptions = {
      text: 'Применить',
      onClick: () => {
        this.applyChoosen();
      },
      elementAttr: { class: 'apply-btn' },
    };
  }

  ngAfterViewInit(): void {
    this.columns.forEach((col: any) => {
      if (col.visible) this.selectedItems.push(col.dataField);
      if (col.caption)
        this.listData.push({
          index: col.index,
          caption: col.caption,
          dataField: col.dataField,
          selected: col.visible,
        });
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectionChanged(e: any) {
    // eslint-disable-next-line no-console
    //console.debug('selectionChanged', e);
    this.isSelectionChanged = true;
  }

  applyChoosen() {
    this.listData.forEach((item: any) => {
      this.columns[item.index].visible = this.selectedItems.includes(item.dataField);
      item.selected = this.selectedItems.includes(item.dataField);
    });
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  updateSelectedItems() {
    this.listData.forEach((col: any) => {
      if (col.selected) this.selectedItems.push(col.dataField);
    });
    this.isSelectionChanged = false;
  }

  closeColumnChooser() {
    if (this.isSelectionChanged) {
      this.updateSelectedItems();
    }
    this.visible = false;
    this.visibleChange.emit(this.visible);
    // eslint-disable-next-line no-console
    //console.debug('close Column Chooser', this.selectedItems, this.listData);
  }
}
