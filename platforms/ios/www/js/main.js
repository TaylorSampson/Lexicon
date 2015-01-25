$(document).ready(function(){
  // var color = Math.floor((Math.random() * 3) + 1);
  $("#title").animate({opacity:'1'}, 'slow');
  // if(color == 1){
  //   $("#headcontainer").css({"background-color":"#2F8FCC"});
  // }
  // else if(color ==2){
  //   $("#headcontainer").css({"background-color":"#54FF84"});
  // }
  // else{
  //   $("#headcontainer").css({"background-color":"#ff5454"});
  // }
  // $.get("http://api.wordnik.com/v4/words.json/wordOfTheDay", function(data){
  //   $(".result").html(data);
  //   alert("Load Was Performed");

  });



  $("#buttonreq").click(function() {
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
      var defAudio = defdata[0].word;
      var audioAPI = "http://api.wordnik.com:80/v4/word.json/"+defAudio+"/audio?useCanonical=false&limit=50&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0"
      $.getJSON(audioAPI, function(soundData){
        var audio = document.getElementById('player');
        audio.src = soundData[0].fileUrl;
        audio.load();

      });
      var defActual = defdata[0].word;
      var pronounceDefAPI = "http://api.wordnik.com:80/v4/word.json/"+defActual+"/pronunciations?useCanonical=false&typeFormat=ahd&limit=50&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0";
      $.getJSON( pronounceDefAPI, function(pronounceDefdata){
        $("#dictPronounce").html(pronounceDefdata[0].raw);
      });

    });
  });
