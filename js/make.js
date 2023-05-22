addStudent = () => {
    let first = document.getElementById("first").value;
     let last = document.getElementById("last").value;
     let age = +document.getElementById("age").value;
     let select = document.getElementById("select").value;
    
    console.log(first,last,age,select);
    
    
    if(age >= 18){
    alert("Student: " + first +  " " + last + " has been added to " + select);
    }
     else{
        alert("Student is not old enough to enroll")
    
     }
    
    }
    
    makePizza = () =>{
        let pizzaName = document.getElementById("pizzaName").value;
        let size = document.getElementById("size").value;
    
        let baseOption = document.getElementsByName("baseRadio");
      let baseValue;
    for(let i = 0; i < baseOption.length; i++){
        if(baseOption[i].checked){
    baseValue = baseOption[i].value
        }
    }
    
    let salami = document.getElementById("salami").checked
     
    if(salami){
    alert("Pizza Order: The " + pizzaName + " - Size: " + size + " - Base: " + baseValue + " with Salami")
    
    } else {
    alert("Pizza Order: The " + pizzaName + " - Size: " + size + " - Base: " + baseValue + " with no Salami")
    } 
    }
    