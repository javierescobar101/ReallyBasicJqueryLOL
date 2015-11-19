
    
    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    };
    	var randomColor = function() {
    	    var r = random(0,255);
    	    var g = random(0,255);
    	    var b = random(0,255);
    	   
    	    return "rgb(" + r + "," + g + "," + b + ")";
    	 	

    	};

    function invertColor(hexTripletColor) {
        var color = hexTripletColor;
        color = color.substring(1);           // remove #
        color = parseInt(color, 16);          // convert to integer
        color = 0xFFFFFF ^ color;             // invert three bytes
        color = color.toString(16);           // convert to hex
        color = ("000000" + color).slice(-6); // pad with leading zeros
        color = "#" + color;                  // prepend #
        return color;
    }

    $(document).ready(function() {


        $('#button').click(function() {
        	var myRanColor = randomColor();
        	var colorInverted = invertColor(myRanColor);
        	 

            $('div').each(function() {
                $(this).css('background-color', myRanColor);
            	$('p').css('color',colorInverted);   
            });
        });
    });
