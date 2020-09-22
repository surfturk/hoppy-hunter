document.addEventListener("DOMContentLoaded", () => {
    createForm();
    fetchBreweries();

    fetchBeers();
    beerForm();

})
  
const BASE_URL = "http://localhost:3000"


// brewery section

    //read
     function fetchBreweries() {
         fetch(`${BASE_URL}/breweries`)
         .then(resp => resp.json())
         .then(breweries => {
 
            for (const brewery of breweries){
                
                let b = new Brewery( brewery.id, brewery.name, brewery.location)
                b.renderBrewery();
            }

         })
     }

    //create
 
    function createForm() {
        let breweriesForm = document.getElementById("breweries-form")

        breweriesForm.innerHTML +=
        `
        <form>
            Name: <input type="text" id="name"></input><br>
            Location: <input type="text" id="location"></input><br>
            <input type="submit" value="Create Brewery">
        </form>
        `
       
        breweriesForm.addEventListener("submit", breweriesFormSubmission)
    
    
    }

    function breweriesFormSubmission() {
        event.preventDefault();
       let name = document.getElementById("name").value
       let location = document.getElementById("location").value

       let brewery = {
          name: name,
          location: location
       }

       fetch(`${BASE_URL}/breweries`, {
           method: "POST",
           headers: {
               'Accept': `application/json`,
               'Content-type': 'application/json'
           },
           body: JSON.stringify(brewery)
       })
       .then(resp => resp.json())
       .then(brewery => {
           let b = new Brewery(brewery.id,brewery.name, brewery.location)
           b.renderBrewery();
       })
    }
    


    //delete
function deleteBrewery() {
    let breweryId = parseInt(event.target.dataset.id)

    fetch(`${BASE_URL}/breweries/${breweryId}`, {
        method: 'DELETE'
    }) 

    this.location.reload()
}
      
    



// beer section

    //read
    function fetchBeers() {
        fetch(`${BASE_URL}/beers`)
        .then(resp => resp.json())
        .then(beers => {

           for (const beer of beers){
               
               let b = new Beer( beer.id, beer.name, beer.style, beer.abv, beer.img_src, beer.brewery_id )
               b.renderBeer();
           }

        })
    }

   //create

   function beerForm() {
       let beersForm = document.getElementById("beers-form")

       beersForm.innerHTML +=
       `
       <form>
          Brewery ID: <input type="integer" id="brewery_id"></input><br><br>
           Name: <input type="text" id="name"></input><br>
           Style: <input type="text" id="style"></input><br>
           ABV: <input type="text" id="abv"></input><br>
           Logo URL: <input type="text" id="img_src"></input><br>
           <input type="submit" value="Create Beer">
       </form>
       `
      
       beersForm.addEventListener("submit", beersFormSubmission)
   
   
   }

   function beersFormSubmission() {
       event.preventDefault();
       let brewery_id = document.getElementById("brewery_id").value
      let name = document.getElementById("name").value
      let style = document.getElementById("style").value
      let abv = document.getElementById("abv").value
      let img_src = document.getElementById("img_src").value

      let beer = {
          brewery_id: brewery_id,
         name: name,
         style: style,
         abv: abv,
         img_src: img_src
      }

      fetch(`${BASE_URL}/beers`, {
          method: "POST",
          headers: {
              'Accept': `application/json`,
              'Content-type': 'application/json'
          },
          body: JSON.stringify(beer)
      })
      .then(resp => resp.json())
      .then(beer => {
          let b = new Beer (beer.name, beer.style, beer.abv, beer.img_src)
          b.renderBeer();
      })
   }
   


   //delete
function deleteBeer() {
   let beerId = parseInt(event.target.dataset.id)

   fetch(`${BASE_URL}/beers/${beerId}`, {
       method: 'DELETE'
   }) 

   this.location.reload()
}
     