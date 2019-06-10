import { initData } from './functions';
import $ from 'jquery';
import './styles.css';
import { Search, URLbuilder } from './search';
import { Mdespy } from './mdespy';
import { Display } from './display';

//init sessionStorage for search data storage
if(!sessionStorage.getItem('mdespy')){
  let newMdespy = JSON.stringify(new Mdespy());
  sessionStorage.setItem('mdespy', newMdespy);
}

$(document).ready(function(){
  //build mdespy object from local storage
  let mdespy = new Mdespy();
  mdespy.searches = JSON.parse(sessionStorage.getItem('mdespy')).searches;

  //for testing purposes.  button clears session storage values
  $('#clearSession').on('click', ()=> sessionStorage.clear() );

  $('#searchSubmit').on('click', (e)=>{
    e.preventDefault();
    $('output').empty();

    //url builder will parse form data into unique URL strings
    let url = new URLbuilder($('#docName').val().trim()).buildUrl();

    //searches local storage for identical search results
    //via URL.  If match not found, a new call is made and data stored to sessionStorage.  Local storage is utilized to minimize API calls.
    if(!mdespy.getSearch(url)) {
      let newSearch = new Search(url);
      initData(newSearch).then(()=> {
        newSearch.display.showResultsByName();
        mdespy.searches.push(newSearch);
        sessionStorage.setItem('mdespy', JSON.stringify(mdespy));
      });
    } else {
      console.log('from local');
      let localSearchData = new Display(mdespy.getSearch(url).display.data);
      localSearchData.showResultsByName();
    }
  });
});