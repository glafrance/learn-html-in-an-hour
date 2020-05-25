// Function to execute when videos HTML page is loaded.
function onLoadVideos() {
    // Call function that loads videos in videos.html page.
    loadVideos();
}

// Programmatically add HTML to display videos.
function loadVideos() {
    // Get array of video paths. 
    // getVideoList() function is in a different file, but that file is also 
    // loaded by web page with another <script> tag, so its code is in scope.
    var videoPaths = getVideoList();

    // Dynamically create HTML for each video, add each to the main content wrapper.
    videoPaths.forEach(function (path) {
        // Use jQuery to create the <video> tag and supporting HTML.
        // var $image = $('<img src="' + path + '" class="image-thumbnail"/>');

        // Add the video related elements to the main content wrapper.
        // $("#main_wrapper").append($image);
    });
}
