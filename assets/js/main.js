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

    // $('#rss-feeds').rss(
    //     //Change this to your own rss feeds
    //     'http://feeds.feedburner.com/TechCrunch/startups',
    //     {
    //         // how many entries do you want?
    //         // default: 4
    //         // valid values: any integer
    //         limit: 3,

    //         // the effect, which is used to let the entries appear
    //         // default: 'show'
    //         // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
    //         effect: 'slideFastSynced',

    //         // outer template for the html transformation
    //         // default: "<ul>{entries}</ul>"
    //         // valid values: any string
    //         layoutTemplate: "<div class='item'>{entries}</div>",

    //         // inner template for each entry
    //         // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
    //         // valid values: any string
    //         entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
    //     }
    // );

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
            text: 'JS Event Order'
        },
        {
            link: 'http://perfectionkills.com/javascript-quiz/',
            text: 'JS Quiz'
        }
    ];
    for (var i = 0; i < myData.length; i++) {
        var html = $(
            "<li> <i class='fa fa-headphones' /> <a href=" +
                myData[i].link +
                " target='_blank'>" +
                myData[i].text +
                '</a> </li>'
        );

        $('#blog-list').append(html);
    }
});
