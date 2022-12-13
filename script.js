$(document).ready(function () {
  var timeContainer = $('#time-container');
  var hours = [9, 10, 11, 12,]
  var currentHour = moment().format('H');


  $('#currentDay').text(moment().format('YYYY, MMMM Do, dddd'));
  
  for (var i = 0; i < hours.length; i++) {
  var timeRow = $('<div>').addClass('row time-block');
    var hour = $('<div>').addClass('hour col-sm-1');
    
    if (hours[i] < 12) {
      hour.text(hours[i] + 'AM');
    } else if (hours[i] === 12) {
      hour.text(hours[i] + 'PM');
    } else {
      hour.text(hours[i] - 12 + 'PM');
    }
    
    var textArea = $('<textarea>').addClass('col-sm-10');
    textArea.attr('id', hours[i]);
    textArea.text(localStorage.getItem(hours[i]));
    
    if (currentHour == hours[i]) {
      textArea.addClass('present');
    } else if (currentHour > hours[i]) {
      textArea.addClass('past');
    } else {
      textArea.addClass('future');
    }

    var saveBtn = $('<button>').addClass('savebtn col-md-2 fa fa-save');
    saveBtn.attr('id', hours[i]);
    timeRow.append(hour, textArea, saveBtn);
    timeContainer.append(timeRow);
  } 

  $(document).on('click', '.saveBtn', function () {
    var btnID = $(this).attr('id');
    var textValue = $(this).prev().val();
    localStorage.setItem(btnID, textValue);
  });
});