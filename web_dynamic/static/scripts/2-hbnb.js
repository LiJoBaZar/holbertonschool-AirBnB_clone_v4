$(document).ready(() => {
  let xCheck = [];
  let amenitiesName = [];
  $("input[type='checkbox']").change(function () {
    if (this.checked) {
      xCheck.push($(this).attr("data-id"));
      amenitiesName.push($(this).attr("data-name"));
      $(".amenities h4").text(amenitiesName);
    }
    else {
      let index = xCheck.indexOf($(this).attr("data-id"));
      xCheck.splice(index, 1);
      amenitiesName.splice(index, 1);
      if (amenitiesName.length > 0) {
        $(".amenities h4").text(amenitiesName);
      } else {
        $(".amenities h4").html('&nbsp;');
      }
    }
  });

$.get("http://127.0.0.1:5001/api/v1/status/", function(data, response)
    {
      if (response === 200 || data.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
});
