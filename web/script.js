async function getCat(data){
    data = await fetch('https://api.thecatapi.com/v1/images/search');
    //console.log(data)
    cat = await data.json()
    //console.log(cat[0])
    document.getElementById('cat').setAttribute('src', cat[0].url)
    document.getElementById('cat').style.width = '50%'
    document.getElementById('cat').style.height = '50%'
}

let data = ''

getCat(data)