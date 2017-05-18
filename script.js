/*global $*/
$(document).ready(function() {
    $.getJSON("events.json", function(json) {
        console.log(json);
        for(var i = 0; i < json.length; i++ ) {
            console.log(json[i]);
            $(".contain").append('<div class="event"> \
            <div class="name">' + json[i].name +'</div> \
            <div class="ls"> \
                <div class="location"></div> \
                <div class="summary"></div> \
            </div> \
            <div class="pd"> \
                <div class="picture"></div> \
                 <div class="date"></div> \
             </div> \
        </div>');
        }
        // $(".picture").append("<img src="+ json[0].picture +" />")
    });
})