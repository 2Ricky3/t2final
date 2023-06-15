let finaltotal = sessionStorage.getItem("Final Total");
console.log(finaltotal);
var total = document.getElementById("finaltotal");
total.textContent = finaltotal;

let confirmedCodes = [
  { discount: 10, code: "FFHH33" },
  { discount: 25, code: "GGH22" },
  { discount: 50, code: "DALOL" },
];
const discount = () => {
  let inputValue = document.getElementById("val").value;

  for (let i = 0; i < confirmedCodes.length; i++) {
    if (confirmedCodes[i].code === inputValue) {
      total.textContent = finaltotal - confirmedCodes[i].discount;
    } else {
      alert("Discount code not found");
      break;
    }
  }
};
