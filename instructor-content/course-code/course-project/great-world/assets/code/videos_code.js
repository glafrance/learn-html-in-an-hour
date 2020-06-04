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
        // Get the video file name, by splitting path by forward slash into an
        // array of path parts, and then getting the last path item which is file name.
        var fileName = path.split("/").pop();
        var withoutFileExtension = fileName.substr(0, fileName.lastIndexOf('.'));

        // Create the video title element, splitting title parts by dash.
        var title = "";
        var videoTitle = withoutFileExtension.split("-");

        // Create the video title text.
        videoTitle.forEach(function (word, index) {
            // Add the current poem title part.
            title += word;
            
            // If we aren't at the last title part, add a space.
            if (index < videoTitle.length - 1) {
                title += " ";
            }
        });

        // Now create an HTML element using the video title.
        var videoTitleText = '<p class="light-text-one video-title">' + title + '</p>';

        // Add the video title to the main content wrapper.
        $("#main_wrapper").append(videoTitleText);

        // Create the video element to play the video file.
        var video = $('<video class="video" width="320" height="240" controls><source src="' + path + '" type="video/mp4">Your browser does not support the video tag.</video>');

        // Add the video element to the main content wrapper.
        $("#main_wrapper").append(video);
    });
}
