import $ from 'jquery';

export function callDoctor(urlString) {
  return $.ajax({
    url: urlString,
    type: "GET",
    dataType: "json",
    success: function(response){
      // console.log(response.data);
      return response;
    },
    error: function(){
      return "call error";
    }
  });
}