import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxLookupModule } from 'devextreme-angular/ui/lookup';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
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
export class SharedModule { }
