// Function to execute when index HTML page is loaded.
function onLoadIndex() {
    // Call function that loads images in main index.html page.
    loadImages();
}

// Programmatically add HTML to display thumbnails for all images.
function loadImages() {
    // Get array of image paths. 
    // getImageList() function is in a different file, but that file is also 
    // loaded by web page with another <script> tag, so its code is in scope.
    var imagePaths = getImageList();

    // Dynamically create HTML for each image, add each to the main content wrapper.
    imagePaths.forEach(function (path) {
        // Use jQuery to create the <img> tag for the image thumbnail.
        var image = $('<img src="' + path + '" class="image-thumbnail"/>');

        // Add the <img> element to the main content wrapper.
        $("#main_wrapper").append(image);
    });
}
