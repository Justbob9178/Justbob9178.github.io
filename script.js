async function getCat(data){
    data = await fetch('https://api.thecatapi.com/v1/images/search');
    cat = await data.json()
    document.getElementById('cat').setAttribute('src', cat[0].url)
    document.getElementById('cat').style.width = '50%'
    document.getElementById('cat').style.height = '50%'
}

async function refreshPicture(){
    document.getElementById('cat').setAttribute('src', "loading.gif")
    data = await fetch('https://api.thecatapi.com/v1/images/search');
    cat = await data.json()
    document.getElementById('cat').setAttribute('src', cat[0].url)
    document.getElementById('cat').style.width = '50%'
    document.getElementById('cat').style.height = '50%'
}

let data = ''

getCat(data)