fetch('https://api.punkapi.com/v2/beers')
.then(data => data.json())
.then(data2 => {
    // for each beer
    data2.forEach(beer =>{
        // render the title of each beer to the dom
        const beerDiv = document.createElement('div')
        beerDiv.textContent = beer.name

        // wrap inside #container container
        const container = document.querySelector('#container')
        container.append(beerDiv)

        // add a delete button to each line of beer
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'x'
        beerDiv.append(deleteButton)

        // add a display button to each line of beer
        const displayButton = document.createElement('button')
        displayButton.textContent = 'Display'
        beerDiv.append(displayButton)

        // when beer display button is clicked, displays picture
        displayButton.addEventListener('click', () => {
            const beerImg = document.querySelector('#iconicBeer')
            beerImg.src = beer.image_url
        })

        // add an event listener to delete the beer when the delete button is clicked
        deleteButton.addEventListener('click', () => {
            beerDiv.remove()

            // when deleted, the image resets to the default
            const beerImg = document.querySelector('#iconicBeer')
            beerImg.src = './assets/image-placeholder.jpg'
        })
    })

})

// when user submits the form, adds a new beer
const form = document.querySelector('#new-beer')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    // will only create new beer if text value is not nothing
    if (!(e.target.beer.value === '')){
        // create div tag for new beer and assign text value
        const newBeer = document.createElement('div')
        newBeer.textContent = e.target.beer.value

        // add delete button to new beer
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'x'
        newBeer.append(deleteButton)

        // wrap new beer inside #container container
        const container = document.querySelector('#container')
        container.append(newBeer)

        // add an event listener to delete the beer when the delete button is clicked
        deleteButton.addEventListener('click', () => {
            newBeer.remove()
        })
    } else {
        alert('Type a beer name in!')
    }
})
