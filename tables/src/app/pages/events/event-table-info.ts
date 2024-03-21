import { Column } from "devextreme/ui/data_grid";

export interface EventTableColumn extends Column {
    index?: number;
}

export class LogEvent {
    Date!: string;
    Status!: string;
}
export enum EventStatus {
    processed = 'обработано',
    unprocessed = 'необработано'
}

export enum EventType {
    request = 'запрос',
    response = 'ответ'
}

export interface EventRecord {
    date_of: string,
    status: string,
    type: string
}

export const EventColumnsInfo: EventTableColumn[] = [
    {
        dataField: 'status_toggle', 
        caption: "", 
        minWidth: 50,
        cellTemplate: 'btnHandlerTemplate',
        allowHeaderFiltering: false
    }, 
    {
        dataField: 'date', 
        caption: "Дата", 
        dataType: 'date',
        minWidth: 50
    }, 
    {
        dataField: 'status', 
        caption: "status", 
        dataType: 'string',
        minWidth: 50,
        cellTemplate: 'statusTemplate'
    }, 
    {
        dataField: 'type', 
        caption: "Type", 
        dataType: 'date',
        minWidth: 50,
        cellTemplate: 'typeTemplate'
    }
];

export const EventTableInfo = {
    columnAutoWidth: true,
    columnWidth: 'auto',
    columnMinWidth: 50,
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
    loadPanel: {
        text: 'Загрузка'
    },     
    columnChooser: {
        enabled: false,
        allowSearch: true
    },
    selection: {
        allowSelectAll: false,
        mode: 'none',
        showCheckBoxesMode: "always",
        selectAllMode: "page"

    },
    scrolling: {
        mode: 'virtual',
        showScrollbar: 'always',
        useNative: false,
        rowRenderingMode: 'virtual',
        scrollByContent: true,
        scrollByThumb: true
    },
    wordWrapEnabled: false,
    remoteOperations: {
        filtering: false,
        sorting: false
  },
}