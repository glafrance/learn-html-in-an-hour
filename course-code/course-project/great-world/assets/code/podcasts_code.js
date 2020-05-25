// Function to execute when podcasts HTML page is loaded.
function onLoadPodcasts() {
    // Call function that loads podcasts in podcasts.html page.
    loadPodcasts();
}

// Programmatically add HTML to display podcast links.
function loadPodcasts() {
    // Get array of podcast paths. 
    // getPodcastList() function is in a different file, but that file is also 
    // loaded by web page with another <script> tag, so its code is in scope.
    var podcastPaths = getPodcastList();

    // Dynamically create HTML for each podcast, add each to the main content wrapper.
    podcastPaths.forEach(function (path) {
        // Use jQuery to create the <a> tag and supporting HTML.
        // var $image = $('<img src="' + path + '" class="image-thumbnail"/>');

        // Add the video related elements to the main content wrapper.
        // $("#main_wrapper").append($image);
    });
}
