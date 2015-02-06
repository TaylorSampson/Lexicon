

$(document).ready(function(){
  $("#title").animate({opacity:'1'}, 'slow');
  $("#titledef").animate({opacity:'1'}, 'slow');
  $("#maintitledef").animate({opacity:'1'}, 1000);
  $("#divdefinput").animate({opacity:'1'}, 1000);
  $("#container").animate({opacity:'1'}, 2000);
  $("#maintitle").animate({opacity:'1'},1000);
  $("#wotdBody").animate({opacity:'1'},1000);
  $("#dictBody").animate({opacity:'1'},1000);


  function txtFocusFunction(){
    document.getElementById("definput").value = "";
  }
  var defSearch = document.getElementById("definput");
  var btnSearch = document.getElementById("buttonreq");
  var DLI = document.getElementById("defLabelInput");

  DLI.addEventListener('touchstart', txtFocusFunction, false);
  defSearch.addEventListener('touchstart', searchDef, false);
  defSearch.addEventListener('focus', txtFocusFunction, false);
  });







  $("#buttonreq").click(function searchDef() {
    $('#WOTD').html("");
    $('#partspeech').html("");
    $('#defreturn').html( "");
    $("#tagdef1").html("");
    $('#partspeech2').html("");
    $('#defreturn2').html( "");
    $("#tagdef2").html("");
    $("#defreturn").css({"border-bottom": "none"});
    $('#partspeech3').html("");
    $('#defreturn3').html( "");
    $("#tagdef3").html("");
    $("#defreturn2").css({"border-bottom": "none"});
    $("#containerdef").css({"visibility":"visible"});
    $("#dictPronounce").html("");
    $("#prons").html("");
    $("#prons2").html("");
    $("#prons3").html("");

    var audioplayer = document.getElementById('player')
    audioplayer.src = "";





    var defreq = document.getElementById("definput").value;
    var defreq = defreq.toLowerCase();
    var apiKey= "http://api.wordnik.com:80/v4/word.json/"+ defreq +"/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0";
    var defAPI = apiKey
    $.getJSON( defAPI, function(defdata) {
      $('#WOTD').html(defdata[0].word);
      $('#partspeech').append(defdata[0].partOfSpeech);
      $('#defreturn').append(defdata[0].text);
      var defAudio = defdata[0].word;
      var audioAPI = "http://api.wordnik.com:80/v4/word.json/"+defAudio+"/audio?useCanonical=false&limit=50&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0"
      $.getJSON(audioAPI, function(soundData){
        var audio = document.getElementById('player');
        audio.src = soundData[0].fileUrl;
        audio.load();
        // if(audio.src === ""){
        //   audio.css({"display":"none"});
        // }
        // else{
        //   audio.css({"visibility:":"hidden"});
        // }
      });
      var defActual = defdata[0].word;
      var pronounceDefAPI = "http://api.wordnik.com:80/v4/word.json/"+defActual+"/pronunciations?useCanonical=false&typeFormat=ahd&limit=50&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0";
      $.getJSON( pronounceDefAPI, function(pronounceDefdata){
        $("#dictPronounce").html(pronounceDefdata[0].raw);
      $("#tagdef1").html("definition:");
      $('#partspeech2').append(defdata[1].partOfSpeech);
      $('#defreturn2').append(defdata[1].text);
      $("#tagdef2").html("definition:");
      $("#defreturn").css({"border-bottom": "1px dotted #e7e7e7"});
      $('#partspeech3').append(defdata[2].partOfSpeech);
      $('#defreturn3').append(defdata[2].text);
      $("#tagdef3").html("definition:");
      $("#defreturn2").css({"border-bottom": "1px dotted #e7e7e7"});
      $("#containerdef").css({"visibility":"visible"});


      });

    });
  });
