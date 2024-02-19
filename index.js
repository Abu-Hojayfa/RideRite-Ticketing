let allButtons = document.getElementsByClassName("click-btn");

let clickedButton = [];

// recognizing btn
function targetButton(element) {
  element.classList.add("bg-lime-600", "hover:bg-lime-600");
  element.classList.remove("bg-stone-50");

  let childElementClass = element.firstChild.nextElementSibling;

  childElementClass.classList.add("text-white", "hover:text-white");
  childElementClass.classList.remove("text-gray-950", "text-opacity-50");

  let e = childElementClass.innerText;

  if (!clickedButton.includes(e)) {
    clickedButton.push(e);
    reduceSit();
    sitCount();
    showSit(e);
  }

  if (clickedButton.length == 4) {
    for (const el of allButtons) {
      let text = el.firstChild.nextElementSibling.innerText;
      if (!clickedButton.includes(text)) {
        el.classList.add("btn-disabled");
      }
    }
    couponWork();
  }
}

// reduce sit
function reduceSit() {
  let id = document.getElementById("seatsRemaing");
  id.innerText = parseInt(id.innerText) - 1;
}

// sit count
function sitCount() {
  let id = document.getElementById("sitCount");
  id.innerText = parseInt(id.innerText) + 1;
}

// coupon input
function couponWork() {
  let idInput = document.getElementById("couponInput");
  let idBtn = document.getElementById("couponBtn");
  idBtn.classList.remove("btn-disabled");
  idInput.removeAttribute("disabled");
}

// showing sit
function showSit(param) {
  let id = document.getElementById("sitList");
  let gTotal = document.getElementById("grandTotal");
  let idOfTotal = document.getElementById("totalPrice");
  idOfTotal.innerText = clickedButton.length * 550;
  gTotal.innerText = clickedButton.length * 550;
  id.innerHTML += `<div class="flex justify-between items-center py-2">
                    <div class="text-gray-950 text-opacity-60 text-base font-normal font-['Inter']">${param}</div>
                    <div class="text-gray-950 text-opacity-60 text-base text-center font-normal font-['Inter']">Economy</div>
                    <div class="text-gray-950 text-opacity-60 text-base font-normal font-['Inter']">550</div>
                  </div>`;
}

// coupon
function couponOnDuty() {
  let value = document.getElementById("couponInput").value;
  let gTotal = document.getElementById("grandTotal");

  if (value.toUpperCase() === "Couple20".toUpperCase())
    gTotal.innerText = clickedButton.length * 550 * 0.8;

  if (value.toUpperCase() === "new15".toUpperCase())
    gTotal.innerText = clickedButton.length * 550 * 0.85;
}
