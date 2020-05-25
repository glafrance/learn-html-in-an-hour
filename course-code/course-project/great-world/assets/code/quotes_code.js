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
    quotes.forEach(function (path) {
        // Use jQuery to create the HTML for each quote.
        // var $image = $('<img src="' + path + '" class="image-thumbnail"/>');

        // Add the video related elements to the main content wrapper.
        // $("#main_wrapper").append($image);
    });
}
