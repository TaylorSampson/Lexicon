// $("#thesinput").focus(function(){
//   $("#thesinput").placeholder="";
// });

$("#thesbuttonreq").click(function() {
  $('#WOTD').html("");
  $('#thes1').html("");
  $('#thes2').html("");
  $('#thes3').html("");
  $('#thes4').html("");
  $('#thes5').html("");
  $('#thes6').html("");
  $('#thes7').html("");
  $('#thes8').html("");
  $('#thes9').html("");
  $('#thes10').html("");
  $('#thesAnt1').html("");
  $('#thesAnt2').html("");
  $('#thesAnt3').html("");
  $('#thesAnt4').html("");
  $('#thesAnt5').html("");
  $("#tagthes1").html("");
  $("#tagthes2").html("");
  $('#thesRhm1').html("");
  $('#thesRhm2').html("");
  $('#thesRhm3').html("");
  $('#thesRhm4').html("");
  $('#thesRhm5').html("");
  $('#thesRhm6').html("");
  $('#thesRhm7').html("");
  $('#thesRhm8').html("");
  $('#thesRhm9').html("");
  $('#thesRhm10').html("");

  $("#synSec").css({"border-bottom": "none"});
  $("#antSec").css({"border-bottom": "none"});
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
    $('#thesAnt5').append(thesAntData[0].words[4]);
    $("#tagthes2").html("Antonyms:");
    $("#antSec").css({"border-bottom":"1px solid #ffcaca"});

  });

  var thesRhmAPIKey= "http://api.wordnik.com:80/v4/word.json/"+thesreq+"/relatedWords?useCanonical=false&relationshipTypes=rhyme&limitPerRelationshipType=10&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0"
$.getJSON(thesRhmAPIKey, function(thesRhmData){

  $('#thesRhm1').append(thesRhmData[0].words[0]);
  $('#thesRhm2').append(thesRhmData[0].words[1]);
  $('#thesRhm3').append(thesRhmData[0].words[2]);
  $('#thesRhm4').append(thesRhmData[0].words[3]);
  $('#thesRhm5').append(thesRhmData[0].words[4]);
  $('#thesRhm6').append(thesRhmData[0].words[5]);
  $('#thesRhm7').append(thesRhmData[0].words[6]);
  $('#thesRhm8').append(thesRhmData[0].words[7]);
  $('#thesRhm9').append(thesRhmData[0].words[8]);
  $('#thesRhm10').append(thesRhmData[0].words[9]);
  $("#tagthes3").html("Rhyming Words:");

    });





  });
});
