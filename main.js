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
        console.log(sizeTable)
    }

}

document.addEventListener('DOMContentLoaded', () => {
    getSizeTable(tableTernua);
});
