// Function to execute when quotes HTML page is loaded.
function onLoadQuotes() {
    // Call function that loads quotes in the quotes.html page.
    loadQuotes();
}

// Programmatically add HTML to display quotes.
function loadQuotes() {
    // Get array of quotes. 
    // getQuotes() function is in a different file, but that file is also 
    // loaded by web page with another <script> tag, so its code is in scope.
    var quotes = getQuotes();

    // Dynamically create HTML for each quote, add each to the main content wrapper.
    quotes.forEach(function (quote) {
        // Get the quote and the author if available, by splitting text at the dash.
        var quoteAuthor = quote.split("-");

        if (quoteAuthor.length > 0) {
            // Create the quote element.
            var quoteText = $('<p class="dark-text-one quote"><em><strong>' + quoteAuthor[0] + '</strong></em></p>');

            // Create the author element, or null if no author.
            var author = quoteAuthor.length > 1 ? $('<p class="dark-text-one quote-author">' + quoteAuthor[1] + '</p>') : null;

            // Add the quote elements to the main content wrapper.
            $("#main_wrapper").append(quoteText);
            $("#main_wrapper").append(author);
        }
    });
}
