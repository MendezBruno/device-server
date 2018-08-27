export class FieldData {

    fieldName;
    fieldValue;
    
    constructor(fieldName,fieldValue) {
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }
    
    getValueAsNumber(){
    //TODO. queda pendiente definir la transformacion de valor de string a numero
    return 0;
    }
    
}