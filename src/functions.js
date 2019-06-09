import $ from 'jquery';

export function sanitize(string) {
  return string.trim();
}

export function displaySearchByName(response){
  // let firstName = response.data[0]['profile']['first_name'];
  response.forEach(element => {
    buildResultsByName(element);
  });
}

export function buildResultsByName(docObject){
  let isAccepting = "";
  if(docObject.practices[0].accepts_new_patients != null){
    if(docObject.practices[0].accepts_new_patients){
      isAccepting = "Is accepting new patients";
    } else {
      isAccepting = "Is accepting new patients";
    }
  }

  let website = "";
  if(docObject.practices[0].website != undefined){
    website = docObject.practices[0].website;
  }

  $('output').append('<div class="doc-info-box"><p class="doc-info-name">Name: '+ docObject.profile.first_name + ' ' +docObject.profile.last_name +'</p><p class="doc-info-practice">Practice: ' + docObject.practices[0].name + '</p><p>Address: ' + docObject.practices[0].visit_address.street + ', ' + docObject.practices[0].visit_address.city + ', '+ docObject.practices[0].visit_address.state + ' ' + docObject.practices[0].visit_address.zip +'</p><p>' + docObject.practices[0].phones[0].number + '</p><a href="'+ docObject.practices[0].website +'">' + website  + '</a><p>'+ isAccepting +'</p></div>');
  // $('output').append('<div class="doc-info-box">',
  //   '<p class="doc-info-name">Name: '+ docObject.profile.first_name + ' ' +docObject.profile.last_name +'</p>',
  //   '<p class="doc-info-practice">Practice: ' + docObject.practices[0].name + '</p>',
  //   '<p>Address: ' + docObject.practices[0].visit_address.street + ', ' + docObject.practices[0].visit_address.city + ', '+ docObject.practices[0].visit_address.state + ' ' + docObject.practices[0].visit_address.zip +'</p>',
  //   '<p>' + docObject.practices[0].phones[0].number + '</p>',
  //   '<a href="'+ docObject.practices[0].website +'">' + website  + '</a>',
  //   '<p>'+ isAccepting +'</p>',
  //   '</div>');
}

export function initData(search) {
  console.log("inside initData");
  return search.callDoctor().then(response => {
    search.data = response.data;
    search.meta = response.meta;
  });
}