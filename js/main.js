$(document).ready(function() {
      // grab the initial top offset of the navigation 
        var stickyNavTop = $('.nav').offset().top;
        console.log("hello");
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function(){
          var scrollTop = $(window).scrollTop(); // our current vertical position from the top
               
          // if we've scrolled more than the navigation, change its position to fixed to stick to top,
          // otherwise change it back to relative
          if (scrollTop > stickyNavTop) { 
              $('.nav').addClass('sticky');
          } else {
              $('.nav').removeClass('sticky'); 
          }
      };

      stickyNav();
      // and run it again every time you scroll
      $(window).scroll(function() {
        stickyNav();
      });
    });


// function initMap() {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var location = {lat: 40.8054491, lng: -73.9654415};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: location,
//     zoom: 11,
//     scrollwheel: false
//   });
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map,
//     title: "Monk’s Cafe"
//   });
// });
// }


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

initMap();