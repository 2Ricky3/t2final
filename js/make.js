const CreateSandwich = () => {
let size = document.getElementById("size").value;
let allcheckboxes = document.getElementsByClassName("toppings")
let checkboxes = document.getElementsByName("toppings")
let finaltotal = document.getElementById("finaltotal")
let total = 0
for (let i = 0; i < checkboxes.length; i++) {
  let checkboxvalues = checkboxes[i].checked;
  console.log(checkboxvalues) 
    if (checkboxvalues){
 total += parseInt(checkboxes[i].value) 
    }
} 
finaltotal.textContent = parseInt(total) + parseInt(size)
sessionStorage.setItem("Final Total",parseInt(total) + parseInt(size) )
}
 