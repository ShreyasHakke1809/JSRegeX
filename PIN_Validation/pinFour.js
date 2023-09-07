let regex = new RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
var prompt = require("prompt-sync")();
var pattern = prompt("Enter pin code ");

//var arry = ["416306","416 306","4163066"];

if(regex.test(pattern))
{
    console.log("Valid PIN Code")
}
else
{
    console.log("InValid PIN Code")
}
