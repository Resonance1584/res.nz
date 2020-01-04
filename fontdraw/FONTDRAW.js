// FONTDRAW.js

// Allows editing of a pixel font. Press a keyboard key to change current character.
// Press "Enter" to write font data to console.

// Font bitmaps are encoded as a run of off-on commands for looping over a 5x7 grid
// left to right top to bottom. E.g. 2,3,2 specifies the first two cells are off, the
// next 3 are on, then the next 2 are off again.

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d", { alpha: false });

const cellSize0 = 16
const cellSize1 = 8
const cellSize2 = 4
const cellSize3 = 2

const letterWidth = 5;
const letterHeight = 7;

let letter = "A";

const data = {
    "1":[2,1,3,2,2,1,1,1,4,1,4,1,4,1,2,5],
    "2":[1,3,1,1,3,1,4,1,2,2,2,1,3,1,4,5],
    "3":[1,3,1,1,3,1,4,1,2,2,5,2,3,1,1,3],
    "4":[3,1,3,2,2,1,1,1,1,1,2,1,1,5,3,1,4,1],
    "5":[0,6,4,1,4,4,5,2,3,1,1,3],
    "6":[1,3,1,1,3,2,4,4,1,1,3,2,3,1,1,3],
    "7":[0,5,4,1,3,1,3,1,3,1,3,1,4,1],
    "8":[1,3,1,1,3,2,3,1,1,3,1,1,3,2,3,1,1,3],
    "9":[1,3,1,1,3,2,3,1,1,4,4,2,3,1,1,3],
    "0":[1,3,1,1,3,2,2,3,1,1,1,3,2,2,3,1,1,3],
    "A":[1,3,1,1,3,2,3,2,3,7,3,2,3,1],
    "B":[0,4,1,1,3,2,3,5,1,1,3,2,3,5],
    "C":[1,5,4,1,4,1,4,1,4,1,5,4],
    "D":[0,3,2,1,2,1,1,1,3,2,3,2,3,2,2,1,1,3],
    "E":[0,6,4,1,4,6,4,1,4,5],
    "F":[0,6,4,1,4,6,4,1,4,1],
    "G":[0,6,4,1,4,1,2,3,3,2,3,6],
    "H":[0,1,3,2,3,2,3,7,3,2,3,2,3,1],
    "I":[1,3,3,1,4,1,4,1,4,1,4,1,3,3],
    "J":[0,5,2,1,4,1,4,1,4,1,4,1,2,3],
    "K":[0,1,3,2,2,1,1,1,1,1,2,2,3,1,1,1,2,1,2,1,1,1,3,1],
    "L":[0,1,4,1,4,1,4,1,4,1,4,1,4,5],
    "M":[0,1,3,3,1,4,1,4,1,3,1,1,1,2,1,1,1,2,1,1,1,1],
    "N":[0,2,2,3,2,2,1,1,1,2,1,1,1,2,1,1,1,2,1,4,2,2],
    "O":[1,3,1,1,3,2,3,2,3,2,3,2,3,1,1,3],
    "P":[0,4,1,1,3,2,3,5,1,1,4,1,4,1],
    "Q":[0,6,3,2,3,2,3,2,1,1,2,1,2,1,1,2,2,1],
    "R":[0,4,1,1,3,2,3,2,2,1,1,3,2,1,2,1,1,1,3,1],
    "S":[1,3,1,1,3,2,5,3,5,2,3,1,1,3,1],
    "T":[0,5,2,1,4,1,4,1,4,1,4,1,4,1],
    "U":[0,1,3,2,3,2,3,2,3,2,3,2,3,6],
    "V":[0,1,3,2,3,2,3,2,3,1,1,1,1,1,2,1,1,1,3,1],
    "W":[0,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1],
    "X":[0,1,3,2,3,1,1,1,1,1,3,1,3,1,1,1,1,1,3,2,3,1],
    "Y":[0,1,3,2,3,2,3,1,1,1,1,1,3,1,4,1,4,1],
    "Z":[0,5,4,1,3,1,3,1,3,1,3,1,4,5],
    "a":[11,3,5,1,1,5,3,1,1,4],
    "b":[0,1,4,1,4,4,1,1,3,2,3,2,3,6],
    "c":[11,5,4,1,4,1,5,4],
    "d":[4,1,4,1,1,5,3,2,3,2,3,1,1,4],
    "e":[11,3,1,1,3,5,1,1,5,4],
    "f":[3,2,2,1,4,1,3,4,2,1,4,1,4,1],
    "g":[10,4,1,1,3,1,1,4,4,6],
    "h":[0,1,4,1,4,1,4,1,1,2,1,2,2,2,3,2,3,1],
    "i":[2,1,8,2,4,1,4,1,4,1,3,3],
    "j":[2,1,9,1,4,1,4,1,4,1,2,3],
    "k":[0,1,4,1,4,1,3,2,2,1,1,3,2,1,2,1,1,1,3,1],
    "l":[1,2,4,1,4,1,4,1,4,1,4,1,3,3],
    "m":[11,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1],
    "n":[10,4,1,1,3,2,3,2,3,2,3,1],
    "o":[11,3,1,1,3,2,3,2,3,1,1,3],
    "p":[10,4,1,1,3,2,3,5,1,1],
    "q":[11,5,3,2,3,1,1,4,4,1],
    "r":[10,1,1,2,1,2,2,2,4,1,4,1],
    "s":[11,5,5,3,5,5],
    "t":[2,1,4,1,2,5,2,1,4,1,4,1,4,1],
    "u":[10,1,3,2,3,2,3,2,3,1,1,3],
    "v":[10,1,3,2,3,1,1,1,1,1,2,1,1,1,3,1],
    "w":[10,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1],
    "x":[10,1,3,1,1,1,1,1,3,1,3,1,1,1,1,1,3,1],
    "y":[10,1,3,2,3,1,1,3,4,1,1,3],
    "z":[10,5,4,1,1,3,1,1,4,5],
    ",":[26,1,3,2],
    ".":[26,2,3,2],
    "'":[2,1,4,1,4,1],
    "(":[2,2,2,1,4,1,4,1,4,1,4,1,5,2],
    ")":[1,2,5,1,4,1,4,1,4,1,4,1,2,2],
    "`":[1,1,5,1],
    "-":[16,3],
    "_":[30,5],
    "=":[10,5,5,5],
    "[":[2,2,3,1,4,1,4,1,4,1,4,1,4,2],
    "]":[1,2,4,1,4,1,4,1,4,1,4,1,3,2],
    ";":[6,2,3,2,14,1,3,2],
    "/":[4,1,3,1,4,1,3,1,3,1,4,1,3,1],
    "\\":[0,1,5,1,4,1,5,1,5,1,4,1,5,1],
    "~":[11,1,3,1,1,1,1,1,3,1],
    "!":[2,1,4,1,4,1,4,1,9,1,4,1],
    "@":[1,3,1,1,3,8,2,7,5,3],
    "#":[1,1,1,1,2,1,1,1,1,5,1,1,1,1,1,5,1,1,1,1,2,1,1,1],
    "$":[1,3,1,1,1,1,1,2,1,1,3,3,3,1,1,2,1,1,1,1,1,3],
    "%":[0,2,2,3,1,1,4,1,3,1,3,1,4,1,1,3,2,2],
    "^":[2,1,3,1,1,1,1,1,3,1],
    "&":[1,2,2,1,2,1,1,1,2,1,1,3,3,1,2,2,2,1,2,2,1,1],
    "*":[7,1,2,1,1,1,1,1,1,3,1,1,1,1,1,1,2,1],
    "+":[7,1,4,1,2,5,2,1,4,1],
    "{":[2,2,3,1,4,1,3,1,5,1,4,1,4,2],
    "}":[1,2,4,1,4,1,5,1,3,1,4,1,3,2],
    "|":[2,1,4,1,4,1,4,1,4,1,4,1,4,1],
    ":":[6,2,3,2,13,2,3,2],
    "\"":[1,1,1,1,2,1,1,1,2,1,1,1],
    "<":[4,1,3,1,3,1,3,1,5,1,5,1,5,1],
    ">":[0,1,5,1,5,1,5,1,3,1,3,1,3,1],
    "?":[1,3,1,1,3,1,4,1,2,2,3,1,9,1]
};

document.addEventListener('keydown', e => {
    if (e.key.length == 1) {
        letter=e.key;
    } else if (e.key == "Enter") {
        console.log(JSON.stringify(data));
    }
})

document.addEventListener('click', (e) => {
    // Get clicked cell (if any)
    let x = Math.floor((e.x - 4) / cellSize0);
    let y = Math.floor((e.y - 4) / cellSize0);
    
    // Within bounds?
    if (x >=0 && x < letterWidth && y >=0 && y < letterHeight) {
        let index = x + (letterWidth * y);

        let d = data[letter] || [];

        // Construct empty bitmap
        let bitmap = [];
        for (let i = 0; i < letterWidth * letterHeight; i++) {
            bitmap[i] = false;
        }

        // Decode into bitmap
        let on = false;
        let run = 0;
        for (let i = 0; i < d.length; i++) {
            for (let j = 0; j < d[i]; j++) {
                if (on) {
                    bitmap[run] = true;
                }
                run++;
            }
            on = !on;
        }

        // Flip clicked bit
        bitmap[index] = !bitmap[index];

        // Encode into runlength
        let newEncoding = []
        let count = 0;
        let last = false;
        for (let i = 0; i < bitmap.length; i++) {
            if (bitmap[i] != last) {
                newEncoding.push(count)
                count = 0;
            }
            count++;
            if (i == bitmap.length - 1 && bitmap[i] == true) {
                newEncoding.push(count)
            }
            last = bitmap[i];
        } 

        data[letter] = newEncoding;
    }
})

const drawLetter = (l, x, y, scale) => {
    if (data[l]) {
        ctx.fillStyle = "#00ff00";
        let on = false;
        let run = 0;
        for (let i = 0; i < data[l].length; i++){
            for (let j = 0; j < data[l][i]; j++) {
                if (on) {
                    ctx.fillRect(x + (run % letterWidth) * scale, y + (Math.floor(run / letterWidth)) * scale, scale, scale);
                }
                run++;
            }
            on = !on;
        };
    }
}

const draw = () => {
    let h = canvas.height
    let w = canvas.width

    ctx.clearRect(0, 0, w, h);

    let x = 4;
    let y = 4;

    // Draw a box around clickable area
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "red"
    ctx.rect(x - 1, y - 1, letterWidth*cellSize0 + 1, letterHeight*cellSize0 + 1);
    ctx.stroke();

    // Draw current letter in different sizes
    drawLetter(letter, x, y, cellSize0)

    x += (letterWidth + 1) * cellSize0;
    y += (letterHeight / 2) * cellSize0;

    drawLetter(letter, x, y, cellSize1)

    x += (letterWidth * cellSize1) + cellSize0;
    y += (letterHeight / 2) * cellSize1;

    drawLetter(letter, x, y, cellSize2)

    x += (letterWidth * cellSize2) + cellSize0;
    y += (letterHeight / 2) * cellSize2;

    drawLetter(letter, x, y, cellSize3)

    x = 4; y = 4 + (letterHeight + 1) * cellSize0;
    for (let l of "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")) {
        drawLetter(l, x, y, cellSize3);
        x += (letterWidth + 1) * cellSize3;
    }

    x = 4; y = 4 + (letterHeight + 2) * cellSize0;
    for (let l of "abcdefghijklmnopqrstuvwxyz".split("")) {
        drawLetter(l, x, y, cellSize3);
        x += (letterWidth + 1) * cellSize3;
    }

    x = 4; y = 4 + (letterHeight + 3) * cellSize0;
    for (let l of "`1234567890-=[]\\;',./".split("")) {
        drawLetter(l, x, y, cellSize3);
        x += (letterWidth + 1) * cellSize3;
    }

    x = 4; y = 4 + (letterHeight + 4) * cellSize0;
    for (let l of "~!@#$%^&*()_+{}|:\"<>?".split("")) {
        drawLetter(l, x, y, cellSize3);
        x += (letterWidth + 1) * cellSize3;
    }

    x = 4; y = 4 + (letterHeight + 6) * cellSize0;
    for (let l of "\"Sphinx of black quartz, judge my vow.\"".split("")) {
        drawLetter(l, x, y, cellSize3);
        x += (letterWidth + 1) * cellSize3;
    }

    x = 4; y = 4 + (letterHeight + 8) * cellSize0;
    for (let l of "\"The five boxing wizards jump quickly!\"".split("")) {
        drawLetter(l, x, y, cellSize3);
        x += (letterWidth + 1) * cellSize3;
    }

    x = 4; y = 4 + (letterHeight + 10) * cellSize0;
    for (let l of "if (i != 0 && i < len(s) || i == -1) {".split("")) {
        drawLetter(l, x, y, cellSize3);
        x += (letterWidth + 1) * cellSize3;
    }
    x = 4; y = 4 + (letterHeight + 11.5) * cellSize0;
    for (let l of "    fmt.Fprintln(\"char: %s\", s[i])".split("")) {
        drawLetter(l, x, y, cellSize3);
        x += (letterWidth + 1) * cellSize3;
    }

    x = 4; y = 4 + (letterHeight + 14) * cellSize0;
    for (let l of "Resonance1584".split("")) {
        drawLetter(l, x, y, cellSize1);
        x += (letterWidth + 1) * cellSize1;
    }

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

console.log("Press a key to change current character.")
console.log("Click in the Red square to edit the current character.")
console.log("Press Enter to export font data as JSON to console.")