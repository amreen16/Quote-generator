async function getQuote() {
    try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data = await res.json();
        document.getElementById("quote").textContent = data.quote;
        document.getElementById("author").textContent = `${data.author}`;
    } catch (error) {
        document.getElementById("quote").textContent = "Failed to load quote.";
        document.getElementById("author").textContent = "";
    }
}

// Load quote on page start
getQuote();
