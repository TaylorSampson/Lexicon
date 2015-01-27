    (function() {
        var wotdAPI = "http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0";
        $.getJSON( wotdAPI, function(returneddata) {
          var wotdActual = returneddata.word;
          $('#WOTD').html(wotdActual);
          $('#note').append(returneddata.note);
          $('#origin').append("Origin:");
          $("#note").css({"border-bottom": "1px solid #ffcaca"});
          $('#defpos').append(returneddata.definitions[0].partOfSpeech);
          $('#def').append(returneddata.definitions[0].text);
          $("#def").css({"border-bottom": "1px dotted #e7e7e7;"});
          $("#tag1").append("Definition:");
          var proWOTD = document.getElementById("WOTD").innerHTML;
          var pronounceAPI = "http://api.wordnik.com:80/v4/word.json/"+ proWOTD +"/pronunciations?useCanonical=false&limit=50&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0";
          $.getJSON( pronounceAPI, function(pronouncedata){
            $("#wotdPronounce").html(pronouncedata[0].raw);
          });
          var wotdAudioAPI = "http://api.wordnik.com:80/v4/word.json/"+proWOTD+"/audio?useCanonical=false&limit=50&api_key=18dac42cc58520dbc60050b320b09a6b37c83226914b21ce0";
          $.getJSON(wotdAudioAPI, function(wotdsoundData){
            var wotdaudioplayer = document.getElementById('wotdplayer');
            wotdaudioplayer.src = wotdsoundData[0].fileUrl;
            wotdaudioplayer.load();

          });
          $("#def2").css({"border-bottom": "1px solid #ffcaca"});

          $('#ex').append(returneddata.examples[0].text);
          $("#example").append("example:");
          $('#defpos2').append(returneddata.definitions[1].partOfSpeech);
          $('#def2').append(returneddata.definitions[1].text);
          $("#tag2").append("definition:");




        });
      })();
