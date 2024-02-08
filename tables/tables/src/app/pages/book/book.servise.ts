import { Injectable } from "@angular/core";
import { OptionMode, OptionType } from "./book";

const ProcessingModes: OptionMode[] = [{
    ID: 1, Name: "Option" 
},{
    ID: 2, Name: "Option" 
},{
    ID: 3, Name: "Option" 
},{
    ID: 4, Name: "Option" 
},{
    ID: 5, Name: "Option" 
},{
    ID: 6, Name: "Option"
}];

const IdentifierTypes: OptionType[] = [{
    ID: 1, Name: "Option 1"
}, 
{
    ID: 2, Name: "Option 2"
}, 
{
    ID: 3, Name: "Option 3"
},
{
    ID: 4, Name: "Option 4"
},  
{
    ID: 5, Name: "Option 5"
},
{
    ID: 6, Name: "Option 6"
}
];



@Injectable({ providedIn: 'root'})

export class BookService {
    getTableInfo() {
        return ;
      }
    
    getModes() {
        return ProcessingModes;
    }

    getTypes() {
        return IdentifierTypes;
    }
}