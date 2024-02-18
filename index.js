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
  }

  if (clickedButton.length == 4) {
    for (const el of allButtons) {
      let text = el.firstChild.nextElementSibling.innerText;
      if (!clickedButton.includes(text)) {
        el.classList.add("btn-disabled");
      }
    }
  }
}

// reduce sit
function reduceSit() {
  let id = document.getElementById("seatsRemaing");
  id.innerText = parseInt(id.innerText) - 1;
}

function sitCount() {
  let id = document.getElementById("sitCount");
  id.innerText = parseInt(id.innerText) + 1;
}
