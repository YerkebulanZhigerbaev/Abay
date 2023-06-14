function SelectSwitcher(){
    this.execute = function(select, selectObj, choice){
        
        var count = selectObj.index(select);
            
        var value = select.val().trim();
        value = this.switchValue(value);
        choice.eq(count).html('<strong>' + value + '</strong>');
        select.hide();
    }
    
    this.switchValue = function(value) {
        var newVal = value;
        switch (value) {
            case 'запятая':
               newVal = ',';
               break;
            case 'пробел':
               newVal = '_';
               break;
            case 'тире':
               newVal = '-';
               break;
            case 'дефис':
               newVal = '-';
               break;
            case 'точка с запятой':
               newVal = ';';
               break;
            case 'двоеточие':
               newVal = ':';
               break;
            case 'слитно':
               newVal = '/';
               break;
            case 'открывающиеся кавычки':
                newVal = '&laquo;';
                break;
            case 'закрывающиеся кавычки':
                newVal = '&raquo;';
                break;    
        }
        
        return newVal;
    }
}
