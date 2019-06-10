export class Mdespy {
  constructor(){
    this.searches = [];
  }

  getSearch(url) {
    for(let i = 0; i < this.searches.length; i++) {
      if(this.searches[i].url == url){
        return this.searches[i];
      }
    }
  }
}