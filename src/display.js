import { buildResultsByName, hasPractice } from "./functions";

export class Display {
  constructor(data){
    this.data = data;
  }

  showResultsByName() {
    this.data.forEach(doctor => {if(hasPractice(doctor))buildResultsByName(doctor);});
  }
  
}