import $ from 'jquery';
//api call callDoctor() is a Search{} method

export function getCategories() {
  return $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${process.env.export.apiKey}`,
    type: "GET",
    dataType: "json",
    success: function(response){
      return response.data;
    },
    error: function(){
      return "call error";
    }
  });
}