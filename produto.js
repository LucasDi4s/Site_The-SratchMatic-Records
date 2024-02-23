var currentIndex = 1;

function changeImage(indexChange) {
    var img = document.getElementById("productImage");

    currentIndex += indexChange;

    if (currentIndex < 1) {
        currentIndex = 2; // Se for menor que 1, volta para o último
    } else if (currentIndex > 2) {
        currentIndex = 1; // Se for maior que 4, volta para o primeiro
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