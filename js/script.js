$(document).ready(function(){

  //Al click cambio la mia
  //Chiamata AJAX
  $.ajax(
      {
        'url' : 'https://flynn.boolean.careers/exercises/api/holidays',
        'method' : 'GET',
        'data' : {
          year : 2018,
          month : 0
        },
        'success': function(data, stato) {
          // console.log(data);
          giorniFestivi(data.response);
        },
        'error' : function(request, state, errors) {
          alert('Errore' + errors);
        }
      }
    );
  //Ciclo for per appedere la lista in Handlebars
  var thisMonth = moment("2018-01-01");
  $(".month-name").text(thisMonth.format("MMMMM YYYY"));
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var daysInMonth = thisMonth.daysInMonth();
  for (var i = 0; i < daysInMonth; i++) {
    var dayObject = {
      "year" : thisMonth.year(),
      "day" : i+1,
      "month" : thisMonth.month(),
    }
    var thisDate = moment(dayObject);
    console.log(thisDate);
    var context = {
      "giorno" : thisDate.format("DD MMMM"),
      "extended-date" : thisDate.format("YYYY-MM-DD")
    }
    var html = template(context);
    $(".days-list").append(html);
  }

  //Funzione giorni festivi
  function giorniFestivi(holidays) {
      if (holidays.length >= 1) {
        for (var i = 0; i < holidays.length; i++) {
           var holiday = holidays[i];
           var items = $('.month-day[data-extended-date="' + holiday.date + '"]' );
           items.addClass('holiday');
           items.text(items.text() + ' - ' +  holiday.name);
        }
      }
     }

});
