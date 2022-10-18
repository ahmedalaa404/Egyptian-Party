// loading screen

$(document).ready(function()
{
    $('.s-loading').fadeOut(2000);
    $('.s-loading').remove();
    $('body').css('overflow','auto')
})

new WOW().init();

// typing plugins
var typed = new Typed('.typing-persone-name',{
    strings: ['Egyptian Party'],
    showCursor: false,
    typeSpeed: 30,
    backSpeed: 30,
    loop: true,
    loopCount: Infinity,
    smartBackspace: false // Default value

  });
  var typed = new Typed('.typing-quotes',{
    strings: [`Let 's have Fun`],
    showCursor: false,
    typeSpeed: 70,
    backSpeed: 10,
    loop: true,
    smartBackspace: false // Default value

  });


//   plugins wow



//   navbar 

let settings=$("#settings");
let links=$('.links-setting');
settings.css('left',`-${links.innerWidth()}px`)
$(`i[class="fa-solid fa-bars me-3 fs-2"]`).click(changeNavs)  ;
$(`i[class="fa-solid fa-x"]`) .click(changeNavs);  
    function changeNavs()
    {

            if(settings.css('left')=='0px')
            {
                settings.animate({left:`-${links.innerWidth()}`},1000)

            }
            else
            {     
                settings.animate({left:`0`},1000)
            }
    }

    $('.list-group li a[href^="#"]').click(function (e)
    {
        let anchoreClicks=$(e.target).attr('href');
        let sectionsOffst=$(`${anchoreClicks}`).offset().top;
        $("html,body").animate({scrollTop:sectionsOffst+'px'},2000);
        settings.animate({left:`-${links.innerWidth()}`},2000);

    })


//     // end of navbar

    $(".quotes-persone h3").click(
        function(e)
        {
            let detalis = $(e.target);
            detalis.parent().find('p').slideToggle(2000);
            detalis.parent().siblings().find('p').slideUp(500);
        }
    )
       
    const now = new Date();


        // date=setDate()
    console.dir(date.getTime())