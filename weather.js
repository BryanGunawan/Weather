// jQuery Weather!

// Using your newfound knowledge of jQuery, re-create our weather
// application. It should:
// - Use a loop to create 6 days of forecast within the <div> element
//   with class name "forecast"
// - When clicking the "Get the weather!" button, the weather should
//   appear with a "fade" effect

// HINTS

// Each day of the forecast should use HTML markup similar to:
// <div class="col">
//   <h3><i class="fa fa-sun-o"></i></h3>
//   <h4>89|55</h4>
//   <h5>Clear throughout the day.</h5>
// </div>

// The provided icon() function takes a Dark Sky point object and
// converts it into an icon, e.g.
// icon(response.daily.data[1])

// Math.round(75.88) => 75

// .empty() empties the HTML contents of a jQuery DOM object

// .append() appends a string (containing HTML) to a jQuery DOM object


let handleWeatherResponse = function(response) {
  // leave these two lines alone; they allow for the inspection of
  // the response object in the browser console
  console.log(response)
  window.response = response

// **** your code starts here - don't modify anything else. you will be sad.

// DOM, current weather

$("#current-conditions-icon").empty();
$("#current-conditions-text").empty();
$(".forecast").empty();
$("#current-conditions-icon").append(Math.round(response.currently.temperature) + "°F");
$("#location").append(window.response);
$("#current-conditions-text").append(response.daily.summary);
$(".current").fadeIn(2000);

// LOOP, weather forecast

let markup = "";
for(let i=0; i<6; i++) {
   markup += "<div class='col'>";
     markup += "<h3>" + icon(response.daily.data[i]) + "</i></h3>";
     markup += "<h4>" + Math.round(response.daily.data[i].temperatureHigh) + "°F" + " | " + Math.round(response.daily.data[i].temperatureLow) + "°F" +"</h4>";
     markup += "<h5>" + response.daily.data[i].summary + "</h5>";
   markup += "</div>"
  }

$(".forecast").append(markup);
$(".forecast").fadeIn(2000);

 // *** your code ends here - no, really.
};


// leave this alone; does the event handling and ajax
$(function() {
  $("#get-the-weather").on("click", function(event) {
    event.preventDefault();
    let locationName = $("#location-name").val();
    geocodeAndGetWeather(locationName);
  });
});
