const productsDB = [ 
    { 
        collection: 'Angels and Demons', 
        country: 'Poland', 
        year: '2022', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.999' 
    }, { 
        collection: 'Four Horsemen of the Apocalypse', 
        country: 'Poland', 
        year: '2019', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.999' 
    }, { 
        collection: 'Woman Warriors', 
        country: 'United Kingdom', 
        year: '2022', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.999' 
    }, { 
        collection: 'Camelot', 
        country: 'Canada', 
        year: '2019', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.999' 
    }, { 
        collection: 'Woman Warriors', 
        country: 'United Kingdom', 
        year: '2019', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.999' 
    }, { 
        collection: 'Woman Warriors', 
        country: 'Canada', 
        year: '2021', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.999' 
    }, { 
        collection: 'Famous Chinese Warriors', 
        country: 'Canada', 
        year: '2021', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.999' 
    }, { 
        collection: 'Woman Warriors', 
        country: 'Poland', 
        year: '2019', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.999' 
    }, { 
        collection: 'Angels and Demons', 
        country: 'Poland', 
        year: '2022', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.999' 
    }, { 
        collection: 'Woman Warriors', 
        country: 'USA', 
        year: '2021', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Gods of Anger', 
        country: 'United Kingdom', 
        year: '2022', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Woman Warriors', 
        country: 'United Kingdom', 
        year: '2021', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Three Kingdoms Romance', 
        country: 'USA', 
        year: '2021', 
        dimensions: '55 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Woman Warriors', 
        country: 'USA', 
        year: '2022', 
        dimensions: '50 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Gods of Anger', 
        country: 'United Kingdom', 
        year: '2020', 
        dimensions: '50 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Camelot', 
        country: 'USA', 
        year: '2021', 
        dimensions: '50 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Legends of the Great Chinese Emperors', 
        country: 'USA', 
        year: '2019', 
        dimensions: '50 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Famous Chinese Warriors', 
        country: 'USA', 
        year: '2022', 
        dimensions: '45 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Woman Warriors', 
        country: 'Poland', 
        year: '2019', 
        dimensions: '45 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Angels and Demons', 
        country: 'USA', 
        year: '2018', 
        dimensions: '45 mm', 
        purityOfSilver: 'AG.1000' 
    }, {collection: 'Woman Warriors', 
        country: 'United Kingdom', 
        year: '2018', 
        dimensions: '', 
        purityOfSilver: ''}, 
    { 
        collection: 'Legends of the Great Chinese Emperors', 
        country: 'Poland', 
        year: '2018', 
        dimensions: '40 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Woman Warriors', 
        country: 'USA', 
        year: '2020', 
        dimensions: '40 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Camelot', 
        country: 'Canada', 
        year: '2020', 
        dimensions: '40 mm', 
        purityOfSilver: 'AG.1000' 
    }, { 
        collection: 'Three Kingdoms Romance', 
        country:'Poland', 
        year: '2020', 
        dimensions: '40 mm', 
        purityOfSilver: 'AG.1000'},]

const div = document.querySelector("#div")

let collection = []
let country = []
let year = []
let dimensions = []
let purityOfSilver = []

const createFilteredArr = (data) => {

data.filter(it => {
    collection.includes(it.collection) || it.collection === "" ? null : collection.push(it.collection);
    country.includes(it.country) || it.country  === "" ? null : country.push(it.country);
    year.includes(it.year) || it.year === "" ? null : year.push(it.year);
    dimensions.includes(it.dimensions) || it.dimensions === "" ? null : dimensions.push(it.dimensions);
    purityOfSilver.includes(it.purityOfSilver) || it.purityOfSilver === "" ? null : purityOfSilver.push(it.purityOfSilver);
})

}

createFilteredArr(productsDB)

const insertList = (title, data) => {

    const res = data.map(it=>`<li class="list-item"><label class="item-label"><input type="checkbox" name="${title}" value="${it}"/>${it}</label></li>`).join(' ')
    const list = `<h2 class="title">${title}</h2><ul class="list">${res}</ul>`
    div.insertAdjacentHTML('beforeend', list)

}

insertList("collection", collection)
insertList("country", country)
insertList("year", year)
insertList("dimensions", dimensions)
insertList("purity of silver", purityOfSilver)

const dataEl = e => {
    const data = e.target.value
    if(data) {
        console.log(e.target.name,":", e.target.value)
    }
}

div.addEventListener('click', dataEl)
