// Function to execute when graphics HTML page is loaded.
function onLoadGraphics() {
    // Set link click handlers.
    setClickHandlers();

    // Set SVG and canvas radio button group change handler.
    setSVGChangeHandler();
    setCanvasChangeHandler();

    // Draw the canvas rectangle to initilize it.
    drawRectangle();
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
    $('#svg-example-links input').change(function() {
        // First hide all the examples.
        $(".svg-example").hide();

        // Now show the appropriate SVG example.
        switch (this.id) {
            case 'svg_rectangle':
                $("#svg_rectangle_example").show();
                break;
            case 'svg_circle':
                $("#svg_circle_example").show();
                break;
            case 'svg_line':
                $("#svg_line_example").show();
                break;
            case 'svg_path':
                $("#svg_path_example").show();
                break;
            case 'svg_text':
                $("#svg_text_example").show();
                break;
        }
    });
}

// Respond to canvas radio button clicks, to show the corresponding example.
function setCanvasChangeHandler() {
    // Show the correct example, based on the radio button click.
    $('#canvas-example-links input').change(function() {
        switch (this.id) {
            case 'canvas_rectangle':
                drawRectangle();
                break;
            case 'canvas_circle':
                drawCircle();
                break;
            case 'canvas_line':
                drawLine();
                break;
            case 'canvas_path':
                drawPath();
                break;
            case 'canvas_text':
                drawText();
                break;
        }
    });
}

// Draw a rectangle on the canvas.
function drawRectangle() {
    var canvas = document.getElementById("canvasElem");
    var ctx = canvas.getContext("2d");

    // First clear the canvas.
    clearCanvas();

    ctx.fillStyle = "green";
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, 400, 300);
    ctx.fillRect(2, 2, 397, 297);
}

// Draw a circle on the canvas.
function drawCircle() {
    var canvas = document.getElementById("canvasElem");
    var ctx = canvas.getContext("2d");

    // First clear the canvas.
    clearCanvas();

    var centerX = (canvas.width / 2) - 10;
    var centerY = (canvas.height / 2) - 50;
    var radius = 160;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "orange";
    ctx.stroke();
}

function drawLine() {
    var canvas = document.getElementById("canvasElem");
    var ctx = canvas.getContext("2d");

    // First clear the canvas.
    clearCanvas();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "blue";
    ctx.moveTo(20, 50);
    ctx.lineTo(400, 200);
    ctx.stroke(); 
}

function drawPath() {
    var canvas = document.getElementById("canvasElem");
    var ctx = canvas.getContext("2d");

    // First clear the canvas.
    clearCanvas();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
    ctx.moveTo(225, 50);
    ctx.lineTo(80, 340);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(225, 50);
    ctx.lineTo(370, 340);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.moveTo(150, 200);
    ctx.lineTo(300, 200);
    ctx.stroke();

    // <path d="M 100 350 q 150 -300 300 0" stroke="blue"
    // stroke-width="5" fill="none" />
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "blue";
    ctx.moveTo(75, 350);
    ctx.bezierCurveTo(210, 91, 300, 220, 371, 341);
    ctx.stroke();

    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(225, 50, 8, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(75, 350, 8, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(375, 350, 8, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.font = "29px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("A", 35, 350);
    ctx.fillText("B", 215, 40);
    ctx.fillText("C", 395, 350);

}

function drawText() {
    var canvas = document.getElementById("canvasElem");
    var ctx = canvas.getContext("2d");

    // First clear the canvas.
    clearCanvas();

    ctx.font = "50px Arial";
    ctx.fillStyle = "pink";
    ctx.fillText("I LOVE CANVAS", 20, 130);
}

function clearCanvas() {
    var canvas = document.getElementById("canvasElem");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.clearRect(0, 0, 500, 500);
}

