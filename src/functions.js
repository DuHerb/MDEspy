
import { Display } from './display';

//initData() makes AJAX call and stores response into passed Search Object
export function initData(search) {
  return search.callDoctor().then(response => {
    search.meta = response.meta;
    search.display = new Display(response.data);
  });
}

//sanitize has it's own function incase future updates need to further validate user string input
export function sanitize(string) {
  return string.trim();
}

export function hasPractice(doctor){
  if(doctor.practices.length > 0){
    return true;
  } else {
    return false;
  }
}
