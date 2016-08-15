/*$('#button').toggle( 
    function() {
        $('#right').animate({ left: 250 }, 'slow', function() {
            $('#button').html('Close');
        });
    }, 
    function() {
        $('#right').animate({ left: 0 }, 'slow', function() {
            $('#button').html('Menu');
        });
    }
);*/
$('#button').click( 
    function() {
      console.log("In the #button click");
      if ($(this).html() == "Menu") {
        console.log("In the Menu");
        $('#right').animate({ left: 250 }, 'slow', function() {
            $('#button').html('Close');
        });
      }
      else {
        console.log("In the else");
        $('#right').animate({ left: 0 }, 'slow', function() {
            $('#button').html('Menu');
        });
      }
    }
);

$('#menu').click( 
    function() {
      console.log("In the #menu click");
        $('#right').animate({ left: 0 }, 'slow', function() {
            $('#button').html('Menu');
        });
     
    }
);


