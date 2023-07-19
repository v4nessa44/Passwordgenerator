// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  var characters= ""
  var password= ""
  var passwordlenght= prompt("enter password lenght between 8 and 128")
  var haslowercase= confirm("would like lower case letters?")
  var hasuppercase= confirm("would you like upper case letters?")
  var hasnumbers= confirm("would you like numbers?")
  var hasspecialcharacters = confirm("would you like special characters?")
  
  if (haslowercase){
characters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (hasuppercase){
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (hasnumbers){
    characters += "1234567890"
  }
  if(hasspecialcharacters){
    characters += "~!@#$%^&*()_+"
  }
  if (haslowercase== false&&hasuppercase==false&&hasnumbers==false&&hasspecialcharacters==false){
    return generatePassword()
  }
  for (let i = 0; i < passwordlenght; i++) {
    password += characters.charAt(Math.floor(Math.random()*characters.length))
    
  }
  return password
}
