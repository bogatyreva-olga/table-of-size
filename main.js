import {tableTernua} from "./data.js";

let getSizeTable = (data) => {
    let sizeTable = document.querySelector(".size-table");

    for (let i = 0; i < data.data.length; i++) {
        let tableRow = document.createElement("div");
        tableRow.classList.add("size-table__tr");

        for (let k = 0; k < data.data[i].length; k++) {
            let tableCol = document.createElement("div");
            tableCol.classList.add("size-table__td");
            tableCol.innerHTML = data.data[i][k];
            tableCol.dataset.row = i;
            tableCol.dataset.col = k;

            tableRow.appendChild(tableCol);
        }
        sizeTable.appendChild(tableRow);
    }
}

let current = undefined;

function showColorElement() {
    if (window.innerWidth > 768) {
        let colElements1 = document.querySelectorAll(".size-table__td");

        for (let i = 0; i < colElements1.length; i++) {
            colElements1[i].classList.remove("size-table__td-grey");
            colElements1[i].classList.remove("size-table__td-blue");
        }
        if (current) {
            current.classList.remove('size-table__td-blue');
        }
        this.classList.add('size-table__td-blue')
        current = this;

        let numberCol = parseInt(current.dataset.col);
        let numberRow = parseInt(current.dataset.row);

        let colElements = document.querySelectorAll('.size-table__td[data-row="' + numberRow + '"]');
        let rowElements = document.querySelectorAll('.size-table__td[data-col="' + numberCol + '"]');

        for (let i = 0; i < colElements.length; i++) {
            let currentCol = parseInt(colElements[i].dataset.col);
            let currentRow = parseInt(rowElements[i].dataset.row);

            if (currentCol > 0 && currentCol < numberCol && currentCol !== 0) {
                colElements[i].classList.add("size-table__td-grey");
                colElements[0].classList.add("size-table__td-blue");
            }
            if (currentRow > 0 && currentRow < numberRow) {
                rowElements[i].classList.add("size-table__td-grey");
                rowElements[0].classList.add("size-table__td-blue");
            }
        }
    }
}

let removeColorElements = () => {
    let colElements1 = document.querySelectorAll(".size-table__td");
    for (let i = 0; i < colElements1.length; i++) {
        colElements1[i].classList.remove("size-table__td-grey");
        colElements1[i].classList.remove("size-table__td-blue");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getSizeTable(tableTernua);

    const items = document.querySelectorAll('.size-table__td')
    for (let i = 0; i < items.length; ++i) {
        const item = items[i]
        item.addEventListener('mouseover', showColorElement);
        item.addEventListener("mouseout", removeColorElements)
    }
});
