
   //--------------------------------------------------------------------------
   //модель подсчета
   function Calculate(){
       this.checkLength = function (userMarks, rightMarks){
           
           if (userMarks.length == rightMarks.length)
               return true;
           
           else return false;
       }
       this.calculateCount = function ( userMarks, rightMarks, type ){
           var count = 0;
           
           for(var key in userMarks)
           {
              
                    if (userMarks[key].trim() != rightMarks[key].trim()){
                        this.lightMark(userMarks[key].trim(), key, type);
                        count++;
                    }
                
            }
           return count;
       }
       this.calculateCommonCount = function ( userOneMarks, userTwoMarks ){
           //alert('commonCalc');
           return userOneMarks + userTwoMarks;
       }
       this.lightMark = function ( name, count, type){
           
           //if (name != 'none')
           //{
              // $('.'+type).eq(count).find('option:selected:contains('+ name +')').parent().css('background-color', '#E32636');
               //$('.choice').eq(countt).css('background-color', '#E32636');
           //}
           //else {
              // $('.'+type).eq(count).css('background-color', '#E32636');
               //$('.choice').eq(count).css('background-color', '#E32636');
           //} 
           
           var c = $('select').index($('.'+type).eq(count));
           $('.choice').eq(c).css('background-color', '#A94442');
           //console.log(c);
           
       }
       
       this.push = function(jsn, serv_url){
           var user = $.cookie('usr');
           if (user !== null)
           {
               var data = JSON.parse(jsn);
               data.usr = user;
               jsn = JSON.stringify(data);
           }
               
           $.ajax({
             async: true,
             cache: false,
             data: {data: jsn},
             dataType: 'JSON',
             type: 'POST',
             url: serv_url,
             success: function(id){
                 if (user == null)
                 {
                     $.cookie('usr',id, {
                         expires: 1
                     });
                 }
             }
           });
       }
   }