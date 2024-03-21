import { Column } from "devextreme/ui/data_grid";
export class Employee {
  ID!: string;
  FirstName!: string;
  LastName!: string;
  EmployeeStatus?: string;
  Phone?: string;
  Prefix?: string;
  Position!: number; //7
  BirthDate!: string;
  Notes?: string;
  Address?: string;
  RegionID!: number; //11
}

export const BookColumnsInfo: Column[] = [
  {
    dataField: 'ID', 
    minWidth: 50
  }, 
  {
    dataField: 'FirstName', 
    minWidth: 115
  },
  {
    dataField: 'LastName', 
    minWidth: 115
  },
  {
    dataField: 'Surname', 
    minWidth: 115
  },
  {
    dataField: 'EmployeeStatus', 
    cellTemplate: 'statusTemplate',  // flag
  },
  {
    dataField: 'Phone', 
    dataType: 'string',
    minWidth: 115
  },
  {
    dataField: 'Notes', 
    minWidth: 175,
  },
  {
    dataField: 'BirthDate', 
    dataType: 'datetime',
    minWidth: 175,
  }, 
  // edit buttons
]

export const BookTableInfo = {
  columnAutoWidth: true,
  columnWidth: 'auto',
  columnMinWidth: 115,
  repaintChangesOnly: true,
  twoWayBindingEnabled: false,
  headerFilter: {
    visible: true
  },
  sorting: {
    mode: 'none',
  },
  paging: {
    enabled: true,
    pageSize: 10
  },
  pager: {
    allowedPageSizes: [10, 20],
    showNavigationButtons: true,
    showPageSizeSelector: true,
    visible: true,
    showInfo: true,
    infoText: `Страница {0} из {1}`
  },
  showRowLines: true,
  showColumnLines: false,
  wordWrapEnabled: false,
  loadPanel: {
    text: 'Загрузка'
  },     
  // columnChooser: {
  //   enabled: true,
  //   allowSearch: true
  // },
  selection: {
    allowSelectAll: true,
    mode: 'multiple',
    showCheckBoxesMode: 'always',
    selectAllMode: "page"
  },
  scrolling: {
    mode: 'Standard',
    showScrollbar: 'always',
    useNative: false,

    scrollByContent: true,
    scrollByThumb: true
  },
  editing: {
    mode: 'row',
    allowUpdating: true,
    allowDeleting: true,
    useIcons: true
  },
  remoteOperations: {
    filtering: false,
    sorting: false
  },
}