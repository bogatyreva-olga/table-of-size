import {tableTernua} from "./data.js";

let getSizeTable = (data) => {
    let sizeTable = document.querySelector(".size-table");

    for (let i = 0; i < data.data.length; i++) {
        let tableRow = document.createElement("div");
        if (i === 0) {
            tableRow.classList.add("size-table__thead");
        }
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

let getModalElement = () => {
    return document.querySelector(".modal");
}

let showModalTableSize = () => {
    let modalSizeTable = getModalElement();
    let showBtnModalTableSize = document.querySelector(".show-size-table");
    showBtnModalTableSize.addEventListener("click", () => {
        modalSizeTable.style.display = "block";
    })
};

let closeModalTableSize = () => {
    let span = document.querySelector(".modal-close");
    let modal = getModalElement();
    span.addEventListener("click", () => {
        modal.style.display = "none";
    });
    window.addEventListener("keydown", function (e) {
        if (e.code === "Escape") {
            modal.style.display = "none";
        }
    }, true);
}

let current = undefined;

function showColorElement() {
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
        let currentRow = parseInt(rowElements[i].dataset.row)
        if (currentCol > 0 && currentCol < numberCol) {
            colElements[i].classList.add("size-table__td-grey");
            colElements[0].classList.add("size-table__td-blue");
        }
        if(currentRow > 1 && currentRow < numberRow) {
            rowElements[i].classList.add("size-table__td-grey");
            rowElements[1].classList.add("size-table__td-blue");
        }

    }
}

document.addEventListener('DOMContentLoaded', () => {
    getSizeTable(tableTernua);
    showModalTableSize();
    closeModalTableSize();

    const items = document.querySelectorAll('.size-table__td')
    for (let i = 0; i < items.length; ++i) {
        const item = items[i]
        item.addEventListener('mouseover', showColorElement)
    }
});
