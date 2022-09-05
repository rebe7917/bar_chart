"use strict";
document.addEventListener("DOMContentLoaded", modifyModel);

const model = [
  8, 1, 3, 14, 10, 18, 24, 22, 2, 17, 28, 5, 31, 19, 13, 4, 0, 32, 19, 31, 9, 12,
  11, 24, 23, 15, 2, 30, 7, 3, 6, 19, 24, 27, 15, 29, 16, 7, 5, 8,
];
function modifyModel() {
  const queueSize = getNumberOfCustomers();

  //PUSH et random tal TIL SIDST i arrayet
  model.push(queueSize);

  //SHIFT fjerner det FØRSTE element i arrayet
  model.shift();
  console.log(model);
  //console.log("Function: Modify model");

  //Kalder loop og displayData
  loop();
  displayData();
}

function displayData() {
  for (let i = 0; i < 40; i++) {
    console.log(i);

    //constant for alle bar elementer i DOM'en
    const bar = document.querySelector(".bar");

    //Højden styles ud fra en beregning af (?)
    bar.style.height = model[i] * 10 + "%";
    console.log(bar.style.height);
    document.querySelector("#bars").append(bar);
  }
}

//Her skal den gentage displayData og modifyModel
function loop() {
  setTimeout(modifyModel, 1000);
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}



