// An object to store the word and its associated image details
const library = {};
console.log(library)
function addWord() {
    const word = document.getElementById("wordInput").value;
    const url = document.getElementById("urlInput").value;
    const width = document.getElementById("gifWidth").value;
    const height = document.getElementById("gifHeight").value;
    const altText = document.getElementById("gifAltText").value;

    if (word && url) {
        library[word] = {
            url: url,
            width: width,
            height: height,
            alt: altText
        };
    }

    // Clear the inputs after adding
    document.getElementById("wordInput").value = "";
    document.getElementById("urlInput").value = "";
    document.getElementById("gifWidth").value = "";
    document.getElementById("gifHeight").value = "";
    document.getElementById("gifAltText").value = "";
}

let typedKeys = "";

// Function to show the GIF
function showGif(details) {
    const gifElement = document.createElement('img');
    gifElement.src = details.url;
    if (details.width) gifElement.style.width = details.width;
    if (details.height) gifElement.style.height = details.height;
    if (details.alt) gifElement.alt = details.alt;

    gifElement.style.position = 'fixed';
    gifElement.style.left = '50%';
    gifElement.style.top = '50%';
    gifElement.style.transform = 'translate(-50%, -50%)';
    gifElement.style.zIndex = '1000';

    document.body.appendChild(gifElement);

    setTimeout(() => {
        gifElement.remove();
    }, 1500);
}

// Function to handle key presses
function handleKeyPress(e) {
    typedKeys += e.key;

    for (let word in library) {
        if (typedKeys.includes(word)) {
            showGif(library[word]);
            typedKeys = ""; 
            break; 
        }
    }

    if (typedKeys.length > 30) {
        typedKeys = "";
    }
}

document.addEventListener('keyup', handleKeyPress);
