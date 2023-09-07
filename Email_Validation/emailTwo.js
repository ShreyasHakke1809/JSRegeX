let regex = new RegExp("^[a-zA-Z0-9]{3,10}([._+-][a-zA-Z0-9]{1,10})?@[a-zA-Z0-9]{1,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$")
var prompt = require("prompt-sync")();
var pattern = prompt("Enter email ");

if(regex.test(pattern))
{
    console.log("Valid Email")
}
else
{
    console.log("InValid Email")
}