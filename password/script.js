function makeid(length) {
  //console.clear()
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"£$%^&*()-=_+';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
      //console.log(counter + ' --- ' + result)
    }
    //console.log('output is: ' + result)
    document.getElementById('output').innerHTML = result
    return result;
}






function generatepass() {
    var element = document.getElementById("number").value;
    console.log(element)
    if(element != 0 && element < 51){
        makeid(parseInt(document.getElementById("number").value))
    }
}