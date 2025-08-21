// Array of quote objects
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Perseverance" },
  { text: "Don’t let yesterday take up too much of today.", category: "Inspiration" }
];

// Function to display a random quote
function displayRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];

  let quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = "";

  let quoteText = document.createElement("p");
  quoteText.textContent = `"${randomQuote.text}"`;

  let quoteCategory = document.createElement("span");
  quoteCategory.textContent = `Category: ${randomQuote.category}`;
  quoteCategory.style.fontStyle = "italic";
  quoteCategory.style.color = "gray";

  quoteDisplay.appendChild(quoteText);
  quoteDisplay.appendChild(quoteCategory);
}

// Function to add a new quote
function addQuote() {
  let textInput = document.getElementById("newQuoteText").value.trim();
  let categoryInput = document.getElementById("newQuoteCategory").value.trim();

  if (textInput === "" || categoryInput === "") {
    alert("Please enter both a quote and a category!");
    return;
  }

  // Add new quote to array
  quotes.push({ text: textInput, category: categoryInput });

  // Clear inputs
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";

  // Update the DOM with the new quote
  displayRandomQuote();
}

// Event listener for "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Event listener for "Add Quote" button
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Show a quote on page load
displayRandomQuote();
