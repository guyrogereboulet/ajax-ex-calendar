$(document).ready(function(){

  var url = "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0"

  // $.ajax(
  //  {
  //  url: "http://www.boolean.careers/api/random/boolean",
  //  method: "GET",
  //  success: function (data, stato) {
  //  $("#risultati").html(data);
  //  },
  //  error: function (richiesta, stato, errori) {
  //  alert("E' avvenuto un errore. " + errore);
  //  }
  //  }
  // );

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var context = {
    title: "My New Post",
    body: "This is my first post!"
  };
  var html = template(context);
  $("#app").append(html);

});
