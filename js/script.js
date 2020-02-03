$(document).ready(function(){

  var url = "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0"

  // $.ajax(
  //  {
  //  url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
  //  method: "GET",
  //  success: function (data, stato) {
  //  $("#risultati").html(data);
  //  console.log(data);
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


  ///MOMEMT-JS///
  // var giorniMese= moment("01-01-2018", "DD-MM-YYYY").daysInMonth();
  // console.log(giorniMese);

  function getDaysArrayByMonth() {
  var daysInMonth = moment("01-01-2018", "DD-MM-YYYY").daysInMonth();
  var arrDays = [];

  while(daysInMonth) {
    var current = moment("01-01-2018", "DD-MM-YYYY").date(daysInMonth);
    arrDays.push(current);
    daysInMonth--;
  }

  return arrDays;
 }

  var arrayVuoto = [];

  var schedule = getDaysArrayByMonth();
  schedule.forEach(function(item) {
   arrayVuoto.push(item.format("DD-MM-YYYY"));
   arrayVuoto.reverse();
  });

  console.log(arrayVuoto);

});
