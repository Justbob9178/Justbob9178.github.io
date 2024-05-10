function makeid(length) {
  //console.log('correct input')
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"£$%^&*()-=_+';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    document.getElementById('output').innerHTML = result
    return result;
}






function generatepass() {
    var element = document.getElementById("number").value;
    //console.log(element)
    if(element > 0 && element < 51){
        makeid(parseInt(document.getElementById("number").value))
    } else {
      document.getElementById('output').innerHTML = 'Invalid input'
    }

}

function copy() {
  // Get the text field
  var copyText = document.getElementById("output");
  //console.log(copyText)

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerHTML);

  // Alert the copied text
  alert("Copied the text: " + copyText.innerHTML);
} 