import $ from 'jquery';

export class Search {
  constructor(url){
    this.url = url;
    this.data;
    this.meta;
  }

  callDoctor() {
    return $.ajax({
      url: this.url,
      type: "GET",
      dataType: "json",
      success: function(response){
        return response;
      },
      error: function(){
        return "call error";
      }
    });
  }

}

