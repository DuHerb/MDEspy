import {sanitize, displaySearchByName, initData} from './functions';
import $ from 'jquery';
import './styles.css';
import { callDoctor } from './apiCalls';
import { Search, URLbuilder } from './search';
import { Mdespy } from './mdespy';
import { Display } from './display';
// import { format } from 'path';

if(!sessionStorage.getItem('mdespy')){
  let newMdespy = JSON.stringify(new Mdespy());
  sessionStorage.setItem('mdespy', newMdespy);
}


$(document).ready(function(){
  //build medspy object from local storage
  let mdespy = new Mdespy();
  mdespy.searches = JSON.parse(sessionStorage.getItem('mdespy')).searches;
  $('#clearSession').on('click', ()=> sessionStorage.clear() );

  $('#searchSubmit').on('click', (e)=>{
    e.preventDefault();

    let url = new URLbuilder($('#docName').val().trim()).buildUrl();

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

    // let newSearch = new Search();
    // newSearch.wholeName = $('#docName').val().trim();
    // newSearch.buildUrl();


    // initData(newSearch).then(()=> newSearch.display.showResultsByName());

    // let promise = newSearch.callDoctor();

    // promise.then(response => {
    //   newSearch.data = response.data;
    //   newSearch.meta = response.meta;
    //   console.log(newSearch.data[0]['profile']);
    // });
  

    
  });

});