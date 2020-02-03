$(document).ready(function(){

  var url = ""

  $.ajax(
   {
   url: "http://www.boolean.careers/api/random/boolean",
   method: "GET",
   success: function (data, stato) {
   $("#risultati").html(data);
   },
   error: function (richiesta, stato, errori) {
   alert("E' avvenuto un errore. " + errore);
   }
   }
  );

});
