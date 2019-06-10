import $ from 'jquery';
import { hasPractice } from "./functions";

//display object and functions control output
export class Display {
  constructor(data){
    this.data = data;
  }

  showResultsByName() {
    this.data.forEach(doctor => {if(hasPractice(doctor))buildResultsByName(doctor);});
  }
}

function buildResultsByName(doctor) {
  $('output').append('<div class="doc-info-box">'+ getDocName(doctor)+ getDocPractices(doctor.practices));
}

function getDocName(doctor) {
  return `<h2 class="doc-info-name">${doctor.profile.first_name} ${doctor.profile.last_name}</h2>`;
}

function ifAccepting(practice){
  let acceptingStr = "";
  if(practice.accepts_new_patients != null){
    if(practice.accepts_new_patients){
      acceptingStr = '<p class="isAccepting">Is accepting new patients.</p>';
    } else {
      acceptingStr = '<p class="notAccepting">Is NOT accepting new patients.</p>';
    }
  }
  return acceptingStr;
}

function getDocPractices(practices) {
  let stringStart = '<div class="doc-info-practices"><p class="doc-info-practice-head">Associated Practices:</p>';
  let stringBody = '';

  practices.forEach(practice => {
    let accepting = ifAccepting(practice);
    let website = "";
    if(practice.website != undefined){website = practice.website;}

    stringBody += `<div class="doc-info-practice"><p class="doc-info-practice-name">${practice.name}</p><p>Address:<br>${practice.visit_address.street}<br> ${practice.visit_address.city}, ${practice.visit_address.state} ${practice.visit_address.zip}</p><p>Phone Number: ${practice.phones[0].number}</p><a href="${website}">${website}</a>${accepting}</div>`;
  });

  return stringStart + stringBody + '</div>';
}