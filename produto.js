var currentIndex = 1;

function changeImage(indexChange) {
    var img = document.getElementById("productImage");

    currentIndex += indexChange;

    if (currentIndex < 1) {
        currentIndex = 2; // Se for menor que 1, volta para o último
    } else if (currentIndex > 2) {
        currentIndex = 1; // Se for maior que 2, volta para o primeiro
    }

    img.src = "urban" + currentIndex + ".jpeg";
}

function changeImage2(indexChange) {
    var img = document.getElementById("productImage2");

    currentIndex += indexChange;

    if (currentIndex < 1) {
        currentIndex = 2; // Se for menor que 1, volta para o último
    } else if (currentIndex > 2) {
        currentIndex = 1; // Se for maior que 4, volta para o primeiro
    }

    img.src = "nation" + currentIndex + ".jpeg";
}


function changeImage3(indexChange) {
    var img = document.getElementById("productImage3");

    currentIndex += indexChange;

    if (currentIndex < 1) {
        currentIndex = 2; // Se for menor que 1, volta para o último
    } else if (currentIndex > 2) {
        currentIndex = 1; // Se for maior que 4, volta para o primeiro
    }

    img.src = "spaceRap" + currentIndex + ".jpeg";
}

function changeImage4(indexChange) {
    var img = document.getElementById("productImage4");

    currentIndex += indexChange;

    if (currentIndex < 1) {
        currentIndex = 2; // Se for menor que 1, volta para o último
    } else if (currentIndex > 2) {
        currentIndex = 1; // Se for maior que 4, volta para o primeiro
    }

    img.src = "wu-tang" + currentIndex + ".jpeg";
}

function changeImage5(indexChange) {
    var img = document.getElementById("productImage5");

    currentIndex += indexChange;

    if (currentIndex < 1) {
        currentIndex = 2; // Se for menor que 1, volta para o último
    } else if (currentIndex > 2) {
        currentIndex = 1; // Se for maior que 4, volta para o primeiro
    }

    img.src = "enemy" + currentIndex + ".jpeg";
}

function changeImage6(indexChange) {
    var img = document.getElementById("productImage6");

    currentIndex += indexChange;

    if (currentIndex < 1) {
        currentIndex = 2; // Se for menor que 1, volta para o último
    } else if (currentIndex > 2) {
        currentIndex = 1; // Se for maior que 4, volta para o primeiro
    }

    img.src = "racionais" + currentIndex + ".jpeg";
}