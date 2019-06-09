import { sanitize } from "./functions";

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
  }

  washWholeName() {
    let nameAry = this.wholeName.split(" ");
    nameAry.forEach( word => sanitize(word));
    nameAry.join('&20');
  }

  buildUrl(){
    this.washWholeName();
    return `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.wholeName}&skip=0&limit=10&user_key=6a9f294ca89a54b2651b0feac7d4820c`;
  }

}

