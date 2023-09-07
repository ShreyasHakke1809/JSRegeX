let regex = new RegExp("^[1-9]{1}[0-9]{5}$");
var prompt = require("prompt-sync")();
var pattern = prompt("Enter pin code");

if(regex.test(pattern))
{
    console.log("Valid PIN Code")
}
else
{
    console.log("InValid PIN Code")
}


