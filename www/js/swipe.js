
$(function() {
  $(".wotdBody").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, left, distance, duration, fingerCount, fingerData) {
      window.location.replace("test.html");
    },
  });
});

$(function() {
  $("#wotdBodyID").swipe( {
    //Generic swipe handler for all directions
    swipeRight:function(event, left, distance, duration, fingerCount, fingerData) {
      window.location.replace("thesaurus.html");
    },

  });
});


$(function() {
  $(".dictBody").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, left, distance, duration, fingerCount, fingerData) {
      window.location.replace("thesaurus.html");
    },

  });
});

$(function() {
  $("#dictBodyID").swipe( {
    //Generic swipe handler for all directions
    swipeRight:function(event, right, distance, duration, fingerCount, fingerData) {
      window.location.replace("index.html");
    },

  });
});

$(function() {
  $(".thesBody").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, left, distance, duration, fingerCount, fingerData) {
      window.location.replace("index.html");
    },

  });
});

$(function() {
  $("#thesBodyID").swipe( {
    //Generic swipe handler for all directions
    swipeRight:function(event, right, distance, duration, fingerCount, fingerData) {
      window.location.replace("test.html");
    },

  });
});
