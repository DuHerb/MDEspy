import { sanitize } from "./functions";
import $ from 'jquery';

export class Mdespsy {
  constructor(){
    this.searches = [];
  }
}

export class Search {
  constructor(){
    this.wholeName = "";
    this.firstName ="";
    this.lastName = "";
    this.location = [];
    this.condition = [];
    this.url = "";
    this.data;
    this.meta;
  }

  washWholeName() {
    let nameAry = this.wholeName.split(" ");
    nameAry.forEach( word => sanitize(word));
    nameAry.join('&20');
  }

  buildUrl() {
    this.washWholeName();
    return `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.wholeName}&skip=0&limit=10&user_key=${process.env.export.apiKey}`;
  }

 

  callDoctor() {
    return $.ajax({
      url: this.buildUrl(),
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

