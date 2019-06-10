import { sanitize } from "./functions";
import $ from 'jquery';
// import { Display } from "./display";

export class URLbuilder {
  constructor(wholeName) {
    this.wholeName = wholeName;
    this.firstName ='';
    this.lastName = '';
    this.location = '';
    this.condition = '';
  }

  washWholeName() {
    let nameAry = this.wholeName.split(" ");
    this.wholeName.split(" ").forEach( word => sanitize(word));
    nameAry.join('&20');
  }

  buildUrl() {
    this.washWholeName();
    return `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.wholeName}&skip=0&limit=10&user_key=${process.env.export.apiKey}`;
  }
}

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
        // console.log(response.data);
        return response;
      },
      error: function(){
        return "call error";
      }
    });
  }

}

