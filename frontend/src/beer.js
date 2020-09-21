class Beer {
    constructor(name, style, abv, img_src) {
      this.name = name;
      this.style = style;
      this.abv = abv;
      this.img_src = img_src;
    }
    
    renderBeer() {
        let beerDiv = document.getElementById("beers-container")

        beerDiv.innerHTML += 
         `
         <ul>
          <li> Beer:  ${this.name}</li>
          <li> Beer Style: ${this.style}</li>
          <li> Beer abv: ${this.abv}</li>
          <li> Beer Logo ${this.img_src}</li>
         </ul>
         
         <button class="delete-bttn" data-id=${this.id} onclick="deleteBrewery()">Delete Brewery</button>
         `
    }

}