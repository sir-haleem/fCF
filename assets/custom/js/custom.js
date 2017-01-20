( // Opens Execution Context
    function (jQ) { // Begins a self invoking funtion






        // CODE GOES IN HERE!!!
    jQ('nav.ui.computer-only i.large.announcement.icon').popup({
        on: 'click',
    });

    jQ('.ui.radio.checkbox').checkbox();
    jQ('.ui.checkbox').checkbox();

    console.log(jQ('.header#main-section'));

    jQ('.header#main-section').click(function(evt){
        var name = jQ(this).data('name')
        var count = jQ(this).data('count');
        var self = this;

         jQ('.item#section[data-count="'+count+'"] .list').transition({
            animation : 'fly left',
            interval  : 200,
            onComplete: function() {
                console.log(count);
                if(jQ(self).data('opened') === 'opened') {
                    jQ('.item#section[data-count="'+count+'"] i').removeClass('open')
                    jQ(self).html("<a>" + name +"</a>");
                    jQ(self).data('opened', 'false')
                } else{
                    jQ(self).html(name);
                    jQ('.item#section[data-count="'+count+'"] i').addClass('open')                    
                    jQ(self).data('opened', 'opened')
                    
                }
            }
        });

         
    });

        






    }(jQuery) // ends and also passes jQuery Object as parameter to a self invoking function
); // Ends Created Execution Context