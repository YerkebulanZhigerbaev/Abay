function Text (){
    //исходный текст
    this.baseText = '';
    
    //массив элементов
    this.elements = [];
    
    //регулярное выражение
    this.regexp = new RegExp(/\{.[^\}]{1,}\}/g);
    
    this.spitText = ';;br;;';
    
    //присвоение переменной
    this.getBaseText = function (text ){
        this.baseText = text;
    }
    
    //получение массива проверяемых элементов
    this.getElements = function(){
        var elements = [];
            
        if (typeof this.baseText !== 'undefined')
        {
            while ((myArray = this.regexp.exec(this.baseText)) != null) {
                elements.push(myArray[0]);
            }
        }
        this.elements = elements;
        
        return elements;
    }
    
    //получение типа элемента
    this.checkElement = function ( str ){
        if (/orf/.test( str ))
            return 'orf';
        if (/punct/.test( str ))
            return 'punct';
        
        return '';
    }
    
    //формирование текста
    this.getTextData = function() {
        var data = this.baseText;

        var clear_data = '';
        var i = 0;     

        while ((myArray = this.regexp.exec(data)) != null) {
            
            var type = this.checkElement( myArray[0]);
            
            //очистим элемент
            var cleared_list = myArray[0].replace(/\{.+\:/, '');
            cleared_list = cleared_list.replace(/}/, '');
            var list = cleared_list.split('|');
            
            //var list_str = this.renderElement(list, type);
            var list_str = this.renderElement(list, type);
            
            //заменяем текст
            data = data.replace(myArray[0], list_str);
            i++;
        }

        return data;       
    }
    
    //отрисовка элементов
    this.renderElement = function(list, type){
        //формируем input
            var list_str = '<span class="choice">_</span>';
            list_str += '<select id="mark" name="mark" class='+ type +'>';
            list_str += '<option value="none"></option>';
            list = this.shuffle(list);
            for(var key in list)
            {
                var val = list[key];
                list_str += '<option value=" ' + val + '">' + val + '</option>';
            }
            list_str +='</select>';
            
            return list_str;
    }
    
    
    //отрисовка текста в указанный элемент DOM
    this.render = function ( element ){
        var data = this.getTextData();
        element.html(this.implodeByBr(data));
    }
    
    //разбивает текст на абзацы с тегом p
    this.implodeByBr = function (data) {
        if (data.indexOf(this.spitText) != -1) {
            var data_mas = data.split(this.spitText);
            var newData = '';
            for(i=0; i<data_mas.length; i++) {
                newData += '<p>' + data_mas[i] + '</p>';
            }
            return newData;
        } else {
            return '<p>' + data + '</p>';
        }
    }
    
    this.shuffle = function( list )
    {
        for (var i = list.length - 1; i > 0; i--) {
            var num = Math.floor(Math.random() * (i + 1));
            var d = list[num];
            list[num] = list[i];
            list[i] = d;
        }
    return list;
    }
};


