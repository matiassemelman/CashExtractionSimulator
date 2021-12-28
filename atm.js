let form = document.getElementById("form");
let reset = document.getElementsById("reset");

form.addEventListener("click", function returnMoney(event) {
  event.preventDefault();
  process(form.valueInput.value);
});

const availableMoney = {
  100: 3,
  50: 6,
  20: 10,
  10: 50,
  1: 50,
};

const tickets = Object.keys(availableMoney).reverse();

const calculateTotalAvailable = () => {
  let total = 0;
  for (let i = 0; i < tickets.length; i++) {
    total += tickets[i] * availableMoney[tickets[i]];
  }
  return total;
};

const process = (askedValue) => {
  if (askedValue > calculateTotalAvailable()) {
    alert("The maximum available is $1350");
    return;
  }
  let moneyToExtract = askedValue;
  for (let i = 0; moneyToExtract > 0; i++) {
    let ticketsCounter = calculateTickets(moneyToExtract, tickets[i]);
    moneyToExtract -= ticketsCounter * tickets[i];
    let node = document.createElement("p");
    let textNode = document.createTextNode(
      `${ticketsCounter} tickets of ${tickets[i]}`
    );
    node.appendChild(textNode);
    document.getElementById("mainContent").appendChild(node);
    // console.log(`${ticketsCounter} tickets of ${tickets[i]}`);
    // console.log(moneyToExtract);
  }
};

function calculateTickets(moneyToExtract, denomination) {
  let counter = moneyToExtract / denomination;
  if (counter > availableMoney[denomination]) {
    counter = availableMoney[denomination];
  }
  availableMoney[denomination] -= counter;
  return counter;
}
