		$(function() {
		  $("a[rel]").overlay(function() {
		  var wrap = this.getContent().find("div.wrap");
		  if (wrap.is(":empty")) {
		  wrap.load(this.getTrigger().attr("href"));
		  }
		  });
		  });


$(document).ready(function() { 
      $("A#reviews__btn-js").toggle(function() { 
        // Отображаем скрытый блок 
        $("DIV#reviews__row-js").fadeIn(); // fadeIn - плавное появление
        return false; // не производить переход по ссылке
      },  
      function() { 
        // Скрываем блок 
        $("DIV#reviews__row-js").fadeOut(); // fadeOut - плавное исчезновение 
        return false; // не производить переход по ссылке
      }); // end of toggle() 
    }); // end of ready() 