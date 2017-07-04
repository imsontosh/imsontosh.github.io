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
    GitHubCalendar('.calendar', 'imsontosh');
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: 'imsontosh', selector: '#ghfeed' });

    //JS Blogs
    var myData = [
        {
            link: 'https://www.quirksmode.org/js/events_order.html',
            text: 'JS Event Order'
        },
        {
            link: 'http://javascript.info/tutorial/inheritance',
            text: 'JS inheritance'
        },
        {
            link: 'https://www.sitepoint.com/back-to-basics-javascript-hoisting/',
            text: 'JS Hoisting Details'
        },
        {
            link: 'https://gist.github.com/amysimmons/3d228a9a57e30ec13ab1',
            text: 'JS Closures & Callback'
        },
        {
            link: 'http://perfectionkills.com/javascript-quiz/',
            text: 'JS Quiz'
        },
        {
            link: 'http://steelkiwi.com/blog/asynchronous-javascript-programming-promises/',
            text: 'JS Promises'
        }
    ];
    for (var i = 0; i < myData.length; i++) {
        var html = $(
            "<li> <i class='fa fa-book' /> <a href=" +
                myData[i].link +
                " target='_blank'>" +
                myData[i].text +
                '</a> </li>'
        );

        $('#blog-list').append(html);
    }
});
