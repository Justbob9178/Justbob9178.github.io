function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"£$%^&*()_+-=[]{};:,<.>/?#~';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    document.getElementById('output').innerHTML = result
    return result;
}



var num = document.getElementById("number");


num.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    generatepass();
  }
}); 


function generatepass() {
    var element = document.getElementById("number").value;
    console.log(element)
    if(element != 0 && element < 51){
        makeid(parseInt(document.getElementById("number").value))
    }
}