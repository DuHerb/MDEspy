import $ from 'jquery';
import { Display } from './display';

export function sanitize(string) {
  return string.trim();
}

export function buildResultsByName(doctor){
  let isAccepting = "";
  if(doctor.practices[0].accepts_new_patients != null){
    if(doctor.practices[0].accepts_new_patients){
      isAccepting = "Is accepting new patients";
    } else {
      isAccepting = "Is accepting new patients";
    }
  }

  let website = "";
  if(doctor.practices[0].website != undefined){
    website = doctor.practices[0].website;
  }

  $('output').append('<div class="doc-info-box">'+ getDocName(doctor)+ getDocPractices(doctor.practices) + '<p>'+ isAccepting +'</p></div>');
  // $('output').append('<div class="doc-info-box">',
  //   '<p class="doc-info-name">Name: '+ docObject.profile.first_name + ' ' +docObject.profile.last_name +'</p>',
  //   '<p class="doc-info-practice">Practice: ' + docObject.practices[0].name + '</p>',
  //   '<p>Address: ' + docObject.practices[0].visit_address.street + ', ' + docObject.practices[0].visit_address.city + ', '+ docObject.practices[0].visit_address.state + ' ' + docObject.practices[0].visit_address.zip +'</p>',
  //   '<p>' + docObject.practices[0].phones[0].number + '</p>',
  //   '<a href="'+ docObject.practices[0].website +'">' + website  + '</a>',
  //   '<p>'+ isAccepting +'</p>',
  //   '</div>');
}

export function hasPractice(doctor){
  if(doctor.practices.length > 0){
    return true;
  } else {
    return false;
  }
}

function getDocName(doctor) {
  return '<p class="doc-info-name">Name: '+ doctor.profile.first_name + ' ' +doctor.profile.last_name +'</p>';
}

function getDocPractices(practices) {
  let addressString = "";
  practices.forEach(practice => {
    let website = "";
    if(practice.website != undefined){website = practice.website;}

    addressString += '<p class="doc-info-practice">Practice: ' + practice.name + '</p><p>Address: ' + practice.visit_address.street + ', ' + practice.visit_address.city + ', '+ practice.visit_address.state + ' ' + practice.visit_address.zip +'</p><p>' + practice.phones[0].number + '</p><a href="'+ practice.website +'">' + website  + '</a>'
  });

  return addressString;
}

export function initData(search) {
  return search.callDoctor().then(response => {
    // search.data = response.data;
    search.meta = response.meta;
    search.display = new Display(response.data);
  });
}