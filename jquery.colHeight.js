(function($){

  jQuery.fn.colHeight = function(options){

    // Зададим список свойств и укажем для них значения по умолчанию.
    // Если при вызове метода будут указаны пользовательские
    // варианты некоторых из них, то они автоматически перепишут
    // соответствующие значения по умолчанию

    options = $.extend({   
      class:          "col",
      minWidth:       "0",
      event:       "ready"
    }, options);
 
    var make = function(){    
      // реализация работы метода с отдельным элементом страницы
       switch (options.event) { 

        case 'ready': 
          
          if (window.innerWidth >= options.minWidth) {

            $(this).each(function(){         
             
              var colHeight = 0;
            
              $("." + options.class, this).each(function(){

                if($(this).height() > colHeight){
                  colHeight = $(this).height();
                }  

              });

              colHeight += 15;

              $("." + options.class, this).css({height: colHeight + "px"});            

            });               
          }
          break;

        case 'resize': 

          if (window.innerWidth >= options.minWidth) {             
              
            $(this).each(function(){     
              
              $("." + options.class, this).css({height: ""});
              var colHeight = 0;
            
              $("." + options.class, this).each(function(){
                if($(this).height() > colHeight){
                  colHeight = $(this).height();
                }   
              });
              colHeight += 15;
              $("." + options.class, this).css({height: colHeight + "px"});
            });
          }

          else{
              
            $(this).each(function(){     
              
              $("." + options.class, this).css({height: ""});
              
            });
          }

          break;  

        default:
          $.error('Bad event');
      }
      
    };
 
    return this.each(make); 
   
  };
})(jQuery);