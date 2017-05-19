/*global $*/
$(document).ready(function() {
    $.getJSON("events.json", function(json) {
        console.log(json);
        for(var i = 0; i < json.length; i++ ) {
            console.log(json[i]);
            $(".contain").append('<div class="event"> \
            <div class="name">' + json[i].name +'</div> \
            <div class="ls"> \
                <div class="location">'+ json[i].location +'</div> \
                <div class="summary">'+ json[i].Summary +'</div> \
            </div> \
            <div class="pd"> \
                <div class="picture"><img src="'+ json[i].picture +'" /></div> \
                 <div class="date">'+ json[i].date +'</div> \
             </div> \
        </div>');
        }
    });
})