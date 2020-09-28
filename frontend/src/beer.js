class Beer {
    constructor(id, brewery_id, name, style, abv, img_src) {
      this.id = id;
      this.brewery_id = brewery_id;
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
         <li>Brewery ID: ${this.brewery_id}</li>
          <li> Beer Name:  ${this.name}</li>
          <li> Beer Style: ${this.style}</li>
          <li> Beer abv: ${this.abv}</li>
          <li> Beer Logo ${this.img_src}</li>
         </ul>
         
         <button class="delete-bttn" data-id=${this.id} onclick="deleteBeer()">Delete Beer</button>
         `
    }

}