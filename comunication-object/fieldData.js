export class FieldData {

    t;
    fn;
    fv;
    
    constructor(fieldName,fieldValue) {
        this.fn = fieldName;
        this.fv = fieldValue;
        this.t = "FD";
    }
    
    getValueAsNumber(){
    //TODO. queda pendiente definir la transformacion de valor de string a numero
    return 0;
    }
    
}