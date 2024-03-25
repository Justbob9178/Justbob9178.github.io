async function getAnimal(){
    updateURL(currentAnimal)
    data = await fetch(url);
    response = await data.json()
    document.getElementById('image').setAttribute('src', response[0].url)
    document.getElementById('image').style.width = '50%'
    document.getElementById('image').style.height = '50%'
}

async function refreshPicture(){
    document.getElementById('image').setAttribute('src', "assets/loading.gif")
    data = await fetch(url);
    response = await data.json()
    document.getElementById('image').setAttribute('src', response[0].url)
    document.getElementById('image').style.width = '50%'
    document.getElementById('image').style.height = '50%'
}

async function catPress(){
    currentAnimal = 'cat'
    catElement = document.getElementById('catBut')
    dogElement = document.getElementById('dogBut')
    animalElement = document.getElementById('animal')

    catElement.style.backgroundColor = 'green'
    dogElement.style.backgroundColor = 'red'

    await updateURL(currentAnimal)

    animalElement.innerHTML = String(currentAnimal)
}

async function dogPress(){
    currentAnimal = 'dog'
    catElement = document.getElementById('catBut')
    dogElement = document.getElementById('dogBut')
    animalElement = document.getElementById('animal')

    catElement.style.backgroundColor = 'red'
    dogElement.style.backgroundColor = 'green'

    await updateURL(currentAnimal)

    animalElement.innerHTML = String(currentAnimal)
}

async function updateURL(currentAnimal){
    url = 'https://api.the' + currentAnimal + 'api.com/v1/images/search?api_key=YOUR_API_KEY'
    return url;
}

let data = ''
let currentAnimal = 'cat'




getAnimal()