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

//getDocPracticies() builds all practices linked to a doctor object
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

//search form displays

//buildCatSelect() creates a select menu of specialty categories defined by the betterdoctor api.  the list is built either from a new api query, or from a copy saved in session startup on load.
export function buildCatSelect() {
  let categories = JSON.parse(sessionStorage.getItem('categories'));
  let uniqueCats = [...new Set(categories.data.map(item => item.category))];
  uniqueCats.forEach(cat=>{
    $('#catSelect').append(`<option value="${cat}">${cat}</option>`);
  });
}

//buildSpecSelect() builds dynamic list of specialties in the category selected by a user.  Value of each option is set to the category of uid, which can be used as a query field in a doctor search
export function buildSpecSelect(string) {
  let categories = JSON.parse(sessionStorage.getItem('categories'));

  $('#specSelect').empty();
  categories.data.forEach(item => {
    if(item.category == string){
      $('#specSelect').append(`<option value="${item.uid}">${item.name}</option>`);
    }
  });
}