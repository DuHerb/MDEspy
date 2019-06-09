import {sanitize, displaySearchByName} from './functions';
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

    callDoctor(newSearch.buildUrl()).then((response)=> displaySearchByName(response));
  });

});