// Storage
let sheetDB = [];

for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for (let j = 0; j < cols; j++) {
        let cellProp = {
            bold: false,
            italic: false,
            underline: false,
            alignment: "left",
            fontFamily: "monospace",
            fontSize: '12',
            fontColor: '#000000',
            BGcolor: '#000000' //just for indentification
        }
        sheetRow.push(cellProp)
    }
    sheetDB.push(sheetRow)
}

// Selectors for cell properties
let bold = document.querySelector('.bold');
let italic = document.querySelector('.italic');
let underline = document.querySelector('.underline');
let fontSize = document.querySelector('.font-size-prop');
let fontFamily = document.querySelector('.font-family-prop');
let fontColor = document.querySelector('.font-color-prop');
let Bgcolor = document.querySelector('.Bgcolor-prop');
let alignment = document.querySelectorAll('.alignment');
let leftAlign = alignment[0];
let centerAlign = alignment[1];
let rightAlign = alignment[2];

let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";
// Application of two way binding
// Attach property listeners
bold.addEventListener('click', (e) => {
    let address = addressBar.value
    let [cell, cellProp] = getActiveCell(address)
    // Modification
    cellProp.bold = !cellProp.bold; //Data change
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; //UI change (part 1)
    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp //UI change (part 2)
})

italic.addEventListener('click', (e) => {
    let address = addressBar.value
    let [cell, cellProp] = getActiveCell(address)
    // Modification
    cellProp.italic = !cellProp.italic; //Data change
    cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; //UI change (part 1)
    italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp //UI change (part 2)
});

underline.addEventListener('click', (e) => {
    let address = addressBar.value
    let [cell, cellProp] = getActiveCell(address)
    // Modification
    cellProp.underline = !cellProp.underline; //Data change
    cell.style.textDecoration = cellProp.underline ? "underline" : "none"; //UI change (part 1)
    underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp //UI change (part 2)
})

fontSize.addEventListener('change', (e) => {
    let address = addressBar.value
    let [cell, cellProp] = getActiveCell(address)
    // Modification
    cellProp.fontSize = fontSize.value; //Data change
    cell.style.fontSize = cellProp.fontSize + "px" //UI change (part 1)
    fontSize.value = cellProp.fontSize //UI change (part 2)
})

fontFamily.addEventListener('change', (e) => {
    let address = addressBar.value
    let [cell, cellProp] = getActiveCell(address)
    // Modification
    cellProp.fontFamily = fontFamily.value; //Data change
    cell.style.fontFamily = cellProp.fontFamily + "px" //UI change (part 1)
    fontFamily.value = cellProp.fontFamily //UI change (part 2)
})


function getActiveCell(address) {
    let [rid, cid] = decodeRowColIdFromAddress(address);
    // Access cell and storage object
    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = sheetDB[rid][cid];
    return [cell, cellProp];
}

function decodeRowColIdFromAddress(address) {
    // address -> "A1"
    let rid = Number(address.slice(1) - 1);  // "1" -> 0
    let cid = Number(address.charCodeAt(0)) - 65; //"A" -> 65
    return [rid, cid];
}