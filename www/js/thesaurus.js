// $("#thesinput").focus(function(){
//   $("#thesinput").placeholder="";
// });

$("#thesbuttonreq").click(function() {
  $('#WOTD').html("");
  $('#thespartspeech').html("");
  $('#thesreturn').html( "");
  $("#tagthes1").html("");
  $('#thespartspeech2').html("");
  $('#thesreturn2').html( "");
  $("#tagthes2").html("");
  $("#thesreturn").css({"border-bottom": "none"});
  $('#thespartspeech3').html("");
  $('#thesreturn3').html( "");
  $("#tagthes3").html("");
  $("#thesreturn2").css({"border-bottom": "none"});
  $("#containerthes").css({"visibility":"visible"});
  $("#thesPronounce").html("");



  var thesreq = document.getElementById("thesinput").value;
  var thesreq = thesreq.toLowerCase();
  var thesapiKey= "http://api.wordnik.com:80/v4/word.json/"+thesreq+"/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0";
  $.getJSON( thesapiKey, function(thesdata) {
    $('#WOTD').html(document.getElementById("thesinput").value);
    $('#thes1').append(thesdata[0].words[0]);
    $('#thes2').append(thesdata[0].words[1]);
    $('#thes3').append(thesdata[0].words[2]);
    $('#thes4').append(thesdata[0].words[3]);
    $('#thes5').append(thesdata[0].words[4]);
    $('#thes6').append(thesdata[0].words[5]);
    $('#thes7').append(thesdata[0].words[6]);
    $('#thes8').append(thesdata[0].words[7]);
    $('#thes9').append(thesdata[0].words[8]);
    $('#thes10').append(thesdata[0].words[9]);
    $("#tagthes1").html("synonyms:");
    $("#synSec").css({"border-bottom":"1px solid #ffcaca"});


  var thesAntAPIKey = "http://api.wordnik.com:80/v4/word.json/"+thesreq+"/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0";
$.getJSON(thesAntAPIKey, function(thesAntData){
    $('#thesAnt1').append(thesAntData[0].words[0]);
    $('#thesAnt2').append(thesAntData[0].words[1]);
    $('#thesAnt3').append(thesAntData[0].words[2]);
    $('#thesAnt4').append(thesAntData[0].words[3]);
    $('#thesAnt5').append(thesAntData[0].words[4])
    $("#tagthes2").html("Antonyms:");


  });
    $('#thespartspeech2').append(thesdata[1].partOfSpeech);
    $('#thesreturn2').append(thesdata[1].text);
    $("#tagthes2").html("definition:");
    $("#thesreturn").css({"border-bottom": "1px dotted #e7e7e7"});
    $('#thespartspeech3').append(thesdata[2].partOfSpeech);
    $('#thesreturn3').append(thesdata[2].text);
    $("#tagthes3").html("definition:");
    $("#thesreturn2").css({"border-bottom": "1px dotted #e7e7e7"});
    $("#containerthes").css({"visibility":"visible"});


  });
});
