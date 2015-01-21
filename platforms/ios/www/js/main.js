// var client = require("swagger-client")
// client.authorizations.add("apiKey", new client.ApiKeyAuthorization("api_key","special-key","query"));
// var swagger = new client.SwaggerApi({
//   url: 'http://petstore.swagger.wordnik.com/api/api-docs',
//   success: function() {
//     if(swagger.ready === true) {
//       swagger.apis.pet.getPetById({petId:1});
//     }
//   }
// });



$(document).ready(function(){
  $("#contents").html("poop");
  $("#title").animate({opacity:'1'}, 'slow');
});

$('button').click(function(){
  $("#contents").html("pee")
});
