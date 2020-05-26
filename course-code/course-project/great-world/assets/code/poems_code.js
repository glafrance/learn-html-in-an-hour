// Function to execute when poems HTML page is loaded.
function onLoadPoems() {
    // Call function that loads poems in poems.html page.
    loadPoems();
}

// Programmatically add HTML to display poem links.
function loadPoems() {
    // Get array of poem paths. 
    // getPoemList() function is in a different file, but that file is also 
    // loaded by web page with another <script> tag, so its code is in scope.
    var poemPaths = getPoemList();

    // Dynamically create HTML for each poem, add each to the main content wrapper.
    poemPaths.forEach(function (path) {
        // Get the poem audio file name, by splitting path by forward slash into an
        // array of path parts, and then getting the last path item which is file name.
        var fileName = path.split("/").pop();
        var withoutFileExtension = fileName.substr(0, fileName.lastIndexOf('.'));

        // Get the poem and the author if available, by splitting file name at the double underscore.
        var poemAuthor = withoutFileExtension.split("__");

        // Only proceed if we at least have the poem title.
        if (poemAuthor.length > 0) {
            var author;
            var authorFullName;

            // Create the author element, if we have the author.
            if (poemAuthor.length > 1) {

                // Get the parts of author's name by splitting on underscore.
                var authorName = poemAuthor[1].split("_"); 

                // Create author name element if we have an author name.
                if (authorName.length > 0) {
                    authorFullName = "";

                    // Create the full name text.
                    authorName.forEach(function (name, index) {
                        // Add the current author name part.
                        authorFullName += name;
                        
                        // If we aren't at the last author name part, add a space.
                        if (index < authorName.length - 1) {
                            authorFullName += " ";
                        }
                    });
                }
            }

            // Create the poem title element, splitting title parts by dash.
            var title = "";
            var poemTitle = poemAuthor[0].split("-");

            // Create the poem title text.
            poemTitle.forEach(function (word, index) {
                // Add the current poem title part.
                title += word;
                
                // If we aren't at the last title part, add a space.
                if (index < poemTitle.length - 1) {
                    title += " ";
                }
            });

            // Now create an HTML element using the poem title, and author if we have it.
            var poemTitleText = '<p class="dark-text-one poem-title">' + title + '</p>';

            // Add the poem title to the main content wrapper.
            $("#main_wrapper").append(poemTitleText);

            // Add the author full name if we have it.
            if (authorFullName) {
                var poemAuthorText = '<p class="dark-text-one poem-author">' + authorFullName + '</p>';

                // Add the poem title to the main content wrapper.
                $("#main_wrapper").append(poemAuthorText);
            }

            // Create the audio element to play the audio file.
            var poemAudio = $('<audio class="poem-audio" controls><source src="' + path + '" type="audio/mpeg">Your browser does not support the audio element.</audio>');

            // Add the poem audio element to the main content wrapper.
            $("#main_wrapper").append(poemAudio);
        }
    });
}
