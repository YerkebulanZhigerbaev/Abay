function Marks(){

    //получение массива правильных ответов
    this.getRightsMarks = function( baseMarks, type ){

        var rightsMarks = [];
        var regexp = new RegExp(type);
        
        for(var key in baseMarks)
        {
            var val = baseMarks[key];
            if ( regexp.test(val) )
            {
                //очищаем значение
                val = val.replace(/\{.+\:/, '');
                val = val.replace(/}/, '', '');
                val = val.split('|')[0];

                rightsMarks.push(val);
            }
        }
        
        return rightsMarks;
    }
    
    //получение массива пользовательских ответов
    this.getUserMarks = function( baseUserMarks ){
        
        var userMarks = [];
        
        baseUserMarks.each(function(){
            userMarks.push($(this).val());
        });
        
        return userMarks;
    }
};