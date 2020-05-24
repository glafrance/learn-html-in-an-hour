// Function to execute when index HTML page is loaded.
function onLoadIndex() {
    // Call function that loads images in main index.html page.
    loadImages();
}

// When main web page loads, programmatically 
// add HTML to display thumbnails for all images.
function loadImages() {
    // First we get an array of image paths. In reality you would get 
    // image data from a server but that is beyond the scope of this course.
    var imagePaths = getImageList();

    // Now we dynamically create HTML for each image path,
    // and add each to the images container.
    imagePaths.forEach(function (path, index) {
        // Use jQuery to create the <img> tag for the image thumbnail.
        var $image = $('<img src="' + path + '" class="image-thumbnail"/>');

        // Add the <img> element to the <div> containing all the thumbnails.
        $("#main_wrapper").append($image);
    });
}
