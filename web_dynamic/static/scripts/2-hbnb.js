$(document).ready(function () => {
  let xCheck = [];
  let amenitiesName = [];
  $("input[type='checkbox']").change(function () {
    if ($(this).is("checked") {
      xCheck.push($(this).attr('data-id'));
      amenitiesName.push($(this).attr('data-name'));
    }
    else {
      let index = xCheck.indexOf($(this).attr('data-id'))
      let indexId = amenitiesName.indexOf($(this).attr('data-name'));
      xCheck.splice(indexId, 1);
      amenitiesName.splice(index, 1);
    }
    $('.amenities h4').text(amenitiesName.join(', '));
  });
  $(function () {
    $.get('http://localhost:5001/api/v1/status/', function (data, response) {
      if (response === 200 || data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
  })
});
