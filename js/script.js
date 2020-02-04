$(document).ready(function(){
  //Handlebars
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);


  var thisMonth = moment("2018-01-01");
  $(".month-name").text(thisMonth.format("MMMMM YYYY"));
  printMonth(thisMonth);
  giorniFestivi(thisMonth);




  //Funzione giorni festivi
  function giorniFestivi(mese) {
    $.ajax(
        {
          'url' : 'https://flynn.boolean.careers/exercises/api/holidays',
          'method' : 'GET',
          'data' : {
            year : mese.year(),
            month : mese.month()
          },
          'success': function(data, stato) {
            // console.log(data);
            // giorniFestivi(data.response);
            var holidays = data.response;

            if (holidays.length >= 1) {
              for (var i = 0; i < holidays.length; i++) {
                 var holiday = holidays[i];
                 var items = $('.month-day[data-extended-date="' + holiday.date + '"]' );
                 items.addClass('holiday');
                 items.text(items.text() + ' - ' +  holiday.name);
              }
            }
          },
          'error' : function(request, state, errors) {
            alert('Errore' + errors);
          }
        }
      );
     }

     // quando clicchiamo su next
  $('.after').click(function () {
    //dobbiamo andare avanti di un mese e chiamare la funzione che genera i guiorni e poi chiamare quella che crea le festivita
    // $('h1').attr('data-this-month', 'devo mettere un valore')
    // console.log($('h1').attr('data-this-month'));
    var questoMese = $('h3').attr('data-this-month');
    var meseProssimo = moment(questoMese).add(1, 'months');
    printMonth(meseProssimo);
    giorniFestivi(meseProssimo);
    });


  $('.before').click(function () {
   var questoMese = $('h3').attr('data-this-month');
   var mesePrecedente = moment(questoMese).subtract(1, 'months');
   printMonth(mesePrecedente);
   giorniFestivi(mesePrecedente);
 });






     function printMonth(thisMonth) {
       $("h3").text(thisMonth.format("MMMM-YYYY"));
       $("h3").attr('data-this-month',thisMonth.format("YYYY-MM"));
       $(".days-list").html("");
       var daysInMonth = thisMonth.daysInMonth();
       for (var i = 0; i < daysInMonth; i++) {
         var dayObject = {
           "year" : thisMonth.year(),
           "day" : i+1,
           "month" : thisMonth.month(),
         }
         var thisDate = moment(dayObject);
         // console.log(thisDate);
         var context = {
           "giorno" : thisDate.format("DD MMMM"),
           "extended-date" : thisDate.format("YYYY-MM-DD")
         }
         var html = template(context);
         $(".days-list").append(html);
       }
     }

});
