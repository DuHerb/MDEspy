import {sanitize, displaySearchByName, initData} from './functions';
import $ from 'jquery';
import './styles.css';
import { callDoctor } from './apiCalls';
import { Search } from './search';
// import { format } from 'path';

$(document).ready(function(){
  $('button').on('click', (e)=>{
    e.preventDefault();
    let newSearch = new Search();
    newSearch.wholeName = $('#docName').val().trim();
    console.log(newSearch.wholeName);

    initData(newSearch).then(()=> displaySearchByName(newSearch.data));
    // let promise = newSearch.callDoctor();

    // promise.then(response => {
    //   newSearch.data = response.data;
    //   newSearch.meta = response.meta;
    //   console.log(newSearch.data[0]['profile']);
    // });
  

    
  });

});