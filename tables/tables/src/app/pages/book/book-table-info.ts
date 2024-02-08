import { Column } from "devextreme/ui/data_grid";

export const BookColumnsInfo: Column[] = [
  // 0 - Тип идентификатора
  {
    dataField: 'CompanyName', 
    caption: "CompanyName", 
    dataType: 'string',
    minWidth: 145
  }, 
  // 2 - Режим обработки
  {
    dataField: 'State', 
    caption: "State", 
    cellTemplate: 'stateTemplate',  // flag
    minWidth: 115
  },

  {
    dataField: 'Date', 
    caption: "Дата", 
    dataType: 'datetime',
    minWidth: 175,
  }, 

  {
    dataField: 'Reason', 
    caption: "Reason",
    dataType: 'string',
    minWidth: 200
  },
  {
    dataField: 'Zipcode', 
    caption: "Zipcode", 
    dataType: 'string',
    minWidth: 200
  }, 
  {
    dataField: 'Comment', 
    caption: "Комментарий", 
    dataType: 'string',
    minWidth: 115
  },
  {
    dataField: 'Phone', 
    caption: "Phone", 
    dataType: 'string',
    minWidth: 115
  }
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