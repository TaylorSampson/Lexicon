
$(function() {
  $(".wotdBody").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, left, distance, duration, fingerCount, fingerData) {
      window.location.replace("test.html");
    },
    threshold:30
  });
});

$(function() {
  $("#wotdBodyID").swipe( {
    //Generic swipe handler for all directions
    swipeRight:function(event, left, distance, duration, fingerCount, fingerData) {
      window.location.replace("thesaurus.html");
    },
    threshold:30

  });
});


$(function() {
  $(".dictBody").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, left, distance, duration, fingerCount, fingerData) {
      window.location.replace("thesaurus.html");
    },
    threshold:30

  });
});

$(function() {
  $("#dictBodyID").swipe( {
    //Generic swipe handler for all directions
    swipeRight:function(event, right, distance, duration, fingerCount, fingerData) {
      window.location.replace("index.html");
    },
    threshold:30

  });
});

$(function() {
  $(".thesBody").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, left, distance, duration, fingerCount, fingerData) {
      window.location.replace("index.html");
    },
    threshold:30

  });
});

$(function() {
  $("#thesBodyID").swipe( {
    //Generic swipe handler for all directions
    swipeRight:function(event, right, distance, duration, fingerCount, fingerData) {
      window.location.replace("test.html");
    },
    threshold:30
    
  });
});
