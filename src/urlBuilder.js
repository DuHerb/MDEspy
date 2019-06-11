import { sanitize } from './functions';

export class URLbuilder {
  constructor(searchArgs) {
    this.wholeName = searchArgs.wholeName;
    this.firstName ='';
    this.lastName = '';
    this.location = '45.515,-122.679';
    this.condition = '';
    this.specialty = searchArgs.docSpecUid;
    this.urlroot = 'https://api.betterdoctor.com/2016-03-01/doctors?';
  }

  washWholeName() {
    let nameAry = this.wholeName.split(" ");
    nameAry.forEach( word => sanitize(word));
    nameAry.join('%20');
  }

  //buildUrl will deal with all query fields, and build URL based on all user search params
  buildUrl() {
    let buildArray = [];
    if(this.wholeName != ''){
      this.washWholeName();
      buildArray.push(`name=${this.wholeName}`);
    }
    if(this.specialty != 'Select Category First' && this.specialty != 'None'){
      buildArray.push(`specialty_uid=${this.specialty}`);
    }
    let locationArray = this.location.split(',');
    locationArray.forEach(word => sanitize(word));
    locationArray.join('%2C');
    buildArray.push(`location=${locationArray},100`);

    let urlqueries = buildArray.join('&');
    return `${this.urlroot}${urlqueries}&skip=0&limit=10&user_key=${process.env.export.apiKey}`;
  }
}