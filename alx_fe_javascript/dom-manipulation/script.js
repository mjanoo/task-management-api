// Array of quote objects
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Perseverance" },
  { text: "Don’t let yesterday take up too much of today.", category: "Inspiration" }
];

// Select DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");
const quoteForm = document.getElementById("quoteForm");
const categorySelect = document.getElementById("categorySelect");
const feedback = document.getElementById("feedback");
const newQuoteBtn = document.getElementById("newQuote");

// Function to update category dropdown
function updateCategoryOptions() {
  categorySelect.innerHTML = ""; // clear existing options
  const categories = [...new Set(quotes.map(q => q.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

// Function to display a random quote
function displayRandomQuote() {
  let selectedCategory = categorySelect.value;
  let filteredQuotes = selectedCategory
    ? quotes.filter(q => q.category === selectedCategory)
    : quotes;

  if (filteredQuotes.length === 0) {
    quoteDisplay.textContent = "No quotes available in this category.";
    return;
  }

  let randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  let randomQuote = filteredQuotes[randomIndex];

  quoteDisplay.innerHTML = "";

  let quoteText = document.createElement("p");
  quoteText.textContent = `"${randomQuote.text}"`;

  let quoteCategory = document.createElement("span");
  quoteCategory.textContent = `Category: ${randomQuote.category}`;
  quoteCategory.style.fontStyle = "italic";
  quoteCategory.style.color = "gray";
  quoteCategory.style.marginLeft = "10px";

  quoteDisplay.appendChild(quoteText);
  quoteDisplay.appendChild(quoteCategory);
}

// Function to add a new quote
function addQuote() {
  const textInput = newQuoteText.value.trim();
  const categoryInput = newQuoteCategory.value.trim();

  if (!textInput || !categoryInput) {
    feedback.textContent = "Please enter both a quote and a category!";
    feedback.style.color = "red";
    return;
  }

  // Add new quote
  quotes.push({ text: textInput, category: categoryInput });

  // Clear input fields
  newQuoteText.value = "";
  newQuoteCategory.value = "";
  feedback.textContent = "Quote added successfully!";
  feedback.style.color = "green";

  // Update category dropdown
  updateCategoryOptions();

  // Show the new quote immediately
  displayRandomQuote();
}

// Event listeners
quoteForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form reload
  addQuote();
});

newQuoteBtn.addEventListener("click", displayRandomQuote);
categorySelect.addEventListener("change", displayRandomQuote);

// Initial setup
updateCategoryOptions();
displayRandomQuote();
