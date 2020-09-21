class Brewery {
    constructor(id, name, location) {
        this.id = id;
        this.name = name;
        this.location = location;
    }

    renderBrewery() {
        let breweriesDiv = document.getElementById("breweries-container")

        breweriesDiv.innerHTML += 
         `
         <ul>
          <li> Brewery:  ${this.name}</li>
          <li> Brewery Location: ${this.location}</li>
         </ul>
         
         <button class="delete-bttn" data-id=${this.id} onclick="deleteBrewery()">Delete Brewery</button>
         `
    }
}