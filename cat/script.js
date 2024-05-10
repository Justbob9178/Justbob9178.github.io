async function refreshPicture(){
    document.getElementById('image').setAttribute('src', "../assets/loading.gif")
    data = await fetch(await updateURL());
    response = await data.json()
    console.log(response)

    document.getElementById('image').setAttribute('src', response[0].url)
    document.getElementById('image').style.width = '50%'
    document.getElementById('image').style.height = '50%'

    if(response[0].breeds != undefined){
        useme = response[0].breeds[0]
        document.getElementById('breed').innerHTML = 'breed : ' + useme.name
        document.getElementById('weight').innerHTML = 'weight : ' + useme.weight.metric + ' kg'
        document.getElementById('life-span').innerHTML = 'life span : ' + useme.life_span + ' years'
        document.getElementById('origin').innerHTML = 'country of origin : ' + useme.origin
    } else {document.getElementById('breed').innerHTML = 'dog breed searching + info comming soon :)'; 
    document.getElementById('weight').innerHTML = ''; 
    document.getElementById('life-span').innerHTML = ''; 
    document.getElementById('origin').innerHTML = ''}
}

async function catPress(){
    catElement = document.getElementById('catBut')
    dogElement = document.getElementById('dogBut')
    animalElement = document.getElementById('animal')

    catElement.style.backgroundColor = 'green'
    catElement.setAttribute('selected', "true")
    dogElement.style.backgroundColor = 'red'
    dogElement.setAttribute('selected', "false")
}

async function dogPress(){
    catElement = document.getElementById('catBut')
    dogElement = document.getElementById('dogBut')
    animalElement = document.getElementById('animal')

    catElement.style.backgroundColor = 'red'
    catElement.setAttribute('selected', "false")
    dogElement.style.backgroundColor = 'green'
    dogElement.setAttribute('selected', "true")
}

async function updateURL(){
    upcat()
    updog()
    var catback =  document.getElementById('catBut').getAttribute("selected")
    console.log(catback)
    if(catback == 'true'){
        currentAnimal = 'cat'
        console.log('cat')
    } else if(catback == 'false'){
        currentAnimal = 'dog'
        console.log('notcat')
    }

    if(document.getElementById('breedid').innerHTML){
        if(document.getElementById('catbreedbutton').checked){
            var breedidnum = document.getElementById('breedid').innerHTML
            query = 'breed_ids=' + breedidnum + '&'
    }} else query = ''

    let url = 'https://api.the' + currentAnimal + 'api.com/v1/images/search?' + query + 'has_breeds=1&api_key=live_pGPtu252IVJfrslX8KvUkqhFOmid15pf8qL7r2PqXiPlnEwYzg7JWGC2MZdwTW4u'
    console.log(url)
    return url;
}

async function updog() {
    if(document.getElementById('dogbreedbutton').checked){
        var select = document.getElementById('dog');
        var option = select.options[select.selectedIndex];
        document.getElementById('breedid').innerHTML = option.value;
        document.getElementById('breedname').innerHTML = String(select)
}}

async function upcat() {
    if(document.getElementById('catbreedbutton').checked){
        var select = document.getElementById('cat');
        var option = select.options[select.selectedIndex];
        document.getElementById('breedid').innerHTML = option.value;
        document.getElementById('breedname').innerHTML = String(select)
}}

async function catcheck(){
    if(document.getElementById('catbreedbutton').checked){
        console.log('checked')
        document.getElementById('cat').style.visibility = "visible";
    }else {
        console.log('unchecked')
        document.getElementById('cat').style.visibility = "hidden";
    }
}

async function dogcheck(){
    if(document.getElementById('dogbreedbutton').checked){
        console.log('checked')
        document.getElementById('dog').style.visibility = "visible";
    }else {
        console.log('unchecked')
        document.getElementById('dog').style.visibility = "hidden";
    }
}

let data = ''

setTimeout(function(){
    refreshPicture()
}, 100)

//upcat();

//updog()