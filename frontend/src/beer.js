class Beer {
    constructor(id, name, style, abv, img_src, brewery_id) {
      this.id = id;
      this.name = name;
      this.style = style;
      this.abv = abv;
      this.img_src = img_src;
      this.brewery_id = brewery_id;

    }
    
    renderBeer() {
        let beerDiv = document.getElementById("beers-container")

        beerDiv.innerHTML += 
         `
         <ul>
         <li>Brewery ID: ${this.brewery_id}</li>
          <li> Beer Name:  ${this.name}</li>
          <li> Beer Style: ${this.style}</li>
          <li> Beer abv: ${this.abv}</li>
          <li> Beer Logo ${this.img_src}</li>
         </ul>
         
         <button class="delete-bttn" data-id=${this.id} onclick="deleteBrewery()">Delete Beer</button>
         `
    }

}