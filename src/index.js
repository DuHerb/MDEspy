import { initSearchData } from './functions';
import $ from 'jquery';
import './styles.css';
import { Search } from './search';
import { URLbuilder } from './urlBuilder';
import { Mdespy } from './mdespy';
import { Display, buildCatSelect, buildSpecSelect } from './display';
import { getCategories } from './apiCalls';

//init sessionStorage for search data storage
if(!sessionStorage.getItem('mdespy')){
  let newMdespy = JSON.stringify(new Mdespy());
  sessionStorage.setItem('mdespy', newMdespy);
}

if(!sessionStorage.getItem('categories')){
  getCategories().then(response => {
    sessionStorage.setItem('categories', JSON.stringify(response));
    buildCatSelect();
  });
} else {
  buildCatSelect();
}

$(document).ready(function(){
  //build mdespy object from local storage
  let mdespy = new Mdespy();
  mdespy.searches = JSON.parse(sessionStorage.getItem('mdespy')).searches;

  //for testing purposes.  button clears session storage values
  $('#clearSession').on('click', ()=> sessionStorage.clear() );

  //once category is selected, specialty select menu is populated
  $('#catSelect').change(()=> buildSpecSelect($('#catSelect').val()));

  //submit search parameters
  $('#searchSubmit').on('click', (e)=>{
    e.preventDefault();
    $('output').empty();

    //url builder will parse form data into unique URL strings
    let wholeName = $('#wholeName').val().trim();
    let docSpec = $('#specSelect').val();
    let url = new URLbuilder({
      'wholeName': wholeName,
      'docSpecUid': docSpec,
    }).buildUrl();

    //searches local storage for identical search results
    //via URL.  If match not found, a new call is made and data stored to sessionStorage.  Local storage is utilized to minimize API calls.
    if(!mdespy.getSearch(url)) {
      let newSearch = new Search(url);
      initSearchData(newSearch).then(()=> {
        newSearch.display.showResults();
        mdespy.searches.push(newSearch);
        sessionStorage.setItem('mdespy', JSON.stringify(mdespy));
      });
    } else {
      console.log('from local');
      let localSearchData = new Display(mdespy.getSearch(url).display.data);
      localSearchData.showResults();
    }
  });
});