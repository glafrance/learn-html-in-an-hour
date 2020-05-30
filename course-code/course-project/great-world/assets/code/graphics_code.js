// Function to execute when graphics HTML page is loaded.
function onLoadGraphics() {
    // Set link click handlers.
    setClickHandlers();

    // Set SVG radio button group change handler.
    setSVGChangeHandler();
}

// Set link click handlers, to show the SVG or Canvas graphics UI.
function setClickHandlers() {
    $("#svgLink").click(function () {
        // "this" is the link that was clicked.
        setActive(this);

        // Show the proper graphics container.
        $("#canvasContainer").hide();
        $("#svgContainer").show();
    });

    $("#canvasLink").click(function () {
        // "this" is the link that was clicked.
        setActive(this);

        // Show the proper graphics container.
        $("#svgContainer").hide();
        $("#canvasContainer").show();
    });
}

// Set the proper link to be styled as active.
function setActive(link) {
    // Clear the active CSS class for both links.
    $("#graphics_links > div").removeClass("active");

    // Add the active CSS class for the link that was clicked.
    $(link).addClass("active");
}

// Respond to SVG radio button clicks, to show the corresponding example.
function setSVGChangeHandler() {
    // Now show the correct example, based on the radio button click.
    $('input[type=radio]').change(function() {
        // First hide all the examples.
        $(".example").hide();

        switch (this.id) {
            case 'rectangle':
                $("#rectangle_example").show();
                break;
            case 'circle':
                $("#circle_example").show();
                break;
            case 'line':
                $("#line_example").show();
                break;
            case 'path':
                $("#path_example").show();
                break;
            case 'text':
                $("#text_example").show();
                break;
        }
    });
}