jQuery(document).ready(function($) {
    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');

            $(this).animate(
                {
                    width: itemWidth
                },
                800
            );
        });
    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    /* jQuery RSS - https://github.com/sdepold/jquery-rss */

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    // GitHubCalendar('.github-graph', 'imsontosh');
    GitHubCalendar('.calendar', 'imsontosh',{responsive:true});
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: 'imsontosh', selector: '#ghfeed' });

    //Inject Blogs to UI
    $.getJSON( "./blogs.json", function( data ) {
        console.log('data',data);
        var myData = [];
        for (var prop in data){
            //JS Blogs
            myData = data[prop];

            for (var i = 0; i < myData.length; i++) {
                var html = $(
                    "<li> <i class='fa fa-book' /> <a href=" +
                        myData[i].link +
                        " target='_blank'>" +
                        myData[i].text +
                        '</a> </li>'
                );

                $('#'+prop+'-blog-list').append(html);
            }
        }
    });
    
  
});
