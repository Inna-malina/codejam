let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

var arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let i = 0; i < 10; i++) {
    arr15.sort(() => Math.random() - 0.5);
}

let drawSquare = function (x, y, val) {
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, 100, 100);

    if (val === 0) {
        ctx.fillStyle = "white";
    } else {
        ctx.fillStyle = "teal";
    }

    ctx.fillRect(x + 5, y + 5, 90, 90);

    ctx.font = "60px Arial";
    ctx.fillStyle = "white";
    if (val < 10) {
        ctx.fillText(val, x + 35, y + 70);
    } else {
        ctx.fillText(val, x + 15, y + 70);
    }
};

let drawTag = function (pos, val) {
    switch (pos) {
        case 0:
            drawSquare(0, 0, val);
            break;

        case 1:
            drawSquare(100, 0, val);
            break;

        case 2:
            drawSquare(200, 0, val);
            break;

        case 3:
            drawSquare(300, 0, val);
            break;

        case 4:
            drawSquare(0, 100, val);;

        case 5:
            drawSquare(100, 100, val);
            break;

        case 6:
            drawSquare(200, 100, val);
            break;

        case 7:
            drawSquare(300, 100, val);
            break;

        case 8:
            drawSquare(0, 200, val);
            break;

        case 9:
            drawSquare(100, 200, val);
            break;

        case 10:
            drawSquare(200, 200, val);
            break;

        case 11:
            drawSquare(300, 200, val);
            break;

        case 12:
            drawSquare(0, 300, val);
            break;

        case 13:
            drawSquare(100, 300, val);
            break;

        case 14:
            drawSquare(200, 300, val);
            break;

        case 15:
            drawSquare(300, 300, val);
            break;
    }
};


for (let i = 0; i <= 15; i++) {
    drawTag(i, arr15[i]);
}

function checkPlace(eventX) {
    if (eventX < 110) {
        return 1;
    }
    if (eventX < 210) {
        return 2;
    }
    if (eventX < 310) {
        return 3;
    }
    if (eventX < 410) {
        return 4;
    }
}


canvas.addEventListener("click", function (event) {
    //console.log(event)
    let clickPos;
    if (event.offsetY < 110) {
        //console.log("row 1")

        let place = checkPlace(event.offsetX);

        switch (place) {
            case 1:
                clickPos = 0;
                break;

            case 2:
                clickPos = 1;
                break;

            case 3:
                clickPos = 2;
                break;

            case 4:
                clickPos = 3;
                break;
        }
    }

    if (event.offsetY > 110 && event.offsetY < 210) {
        let place = checkPlace(event.offsetX);

        switch (place) {
            case 1:
                clickPos = 4;
                break;

            case 2:
                clickPos = 5;
                break;

            case 3:
                clickPos = 6;
                break;

            case 4:
                clickPos = 7;
                break;
        }
    }

    if (event.offsetY > 210 && event.offsetY < 310) {
        let place = checkPlace(event.offsetX);

        switch (place) {
            case 1:
                clickPos = 8;
                break;

            case 2:
                clickPos = 9;
                break;

            case 3:
                clickPos = 10;
                break;

            case 4:
                clickPos = 11;
                break;
        }
    }

    if (event.offsetY > 310 && event.offsetY < 410) {
        let place = checkPlace(event.offsetX);

        switch (place) {
            case 1:
                clickPos = 12;
                break;

            case 2:
                clickPos = 13;
                break;

            case 3:
                clickPos = 14;
                break;

            case 4:
                clickPos = 15;
                break;
        }
    }

    //нижняя фишка ползёт вверх
    if (arr15[clickPos - 4] == 0) {
        arr15[clickPos - 4] = arr15[clickPos];
        arr15[clickPos] = 0;

        for (let i = 0; i <= 15; i++) {
            drawTag(i, arr15[i]);
        }

    }

    //верхняя фишка ползёт вниз
    if (arr15[clickPos + 4] == 0) {
        arr15[clickPos + 4] = arr15[clickPos];
        arr15[clickPos] = 0;

        for (let i = 0; i <= 15; i++) {
            drawTag(i, arr15[i]);
        }

    }

    //левая фишка ползёт вправо
    if (arr15[clickPos + 1] == 0 && clickPos !== 3 && clickPos!==7 && clickPos!==11) {
        arr15[clickPos + 1] = arr15[clickPos];
        arr15[clickPos] = 0;

        for (let i = 0; i <= 15; i++) {
            drawTag(i, arr15[i]);
        }

    }

    //правая фишка ползёт влево
    if (arr15[clickPos - 1] == 0 && clickPos !== 4 && clickPos!==8 && clickPos!==12) {
        arr15[clickPos - 1] = arr15[clickPos];
        arr15[clickPos] = 0;

        for (let i = 0; i <= 15; i++) {
            drawTag(i, arr15[i]);
        }

    }



});