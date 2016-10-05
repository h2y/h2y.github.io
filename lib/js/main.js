const $window  = $(window),
      isMobile = $window.width()<600 ? true : false,
      winh     = $window.height();


// left desc
$('.self-desc').show(7000);


// init masonry
if(!isMobile) {
    var masonry = $('#right').masonry({
        itemSelector: '.item',
        gutter: 20
    });

    setInterval(function () {
        masonry.masonry();
    }, 1234);
}


/*
    动态加载右侧 item
*/
!function() {
    let num = 0,
        lastNode = null,
        domRight = document.querySelector('#right');
    addNode();

    function addNode() {
        let item = window.item_data[num++],
            node = document.createElement("div");
        node.className = 'item';

        //settings fix
        item.link = item.link || 'javascript:;';
        if(!item.img)
            item.img = [];
        else if(typeof(item.img)==='string')
            item.img = [item.img];

        // html in div.lightbox
        let pics = '';
        if(item.img.length) {
            pics = `<a href="${item.img[0]}" target="_blank" title="${item.title}" class="show">
                        <img class="img" src="${item.img[0]}">
                    </a>`;
            for(let i=1; i<item.img.length; i++)
                pics += `<a href="${item.img[i]}" target="_blank" title="${item.title}" class="hide">
                            <img class="img" src="${item.img[i]}">
                         </a>`;
        }

        // output
        node.innerHTML = `
            <a href="${item.link}" target="_blank">
                <p class="title">
                    ${item.title} ${(item.link==='javascript:;')?'':'<i class="fa fa-hand-o-left"></i>'}
                </p>
            </a>
            <div class="lightbox">${pics}</div>
            <p class="text">${item.text}</p>
        `;

        if(masonry)
            masonry.append(node).masonry('appended', node);
        else
            domRight.appendChild(node);
        lastNode = node;

        // init lightbox
        $(node).find('.lightbox').lightGallery();
    }

    let interval = setInterval(function () {
        if(window.item_data.length<=num)
            return clearInterval(interval);
        if(winh+$(document).scrollTop()>lastNode.offsetTop)
            addNode();
    }, 1000);
}();


/*
    随机背景色
*/
!function() {
    let $body = $('body'),
        color = 0;

    changeBgColor();
    function changeBgColor() {
        let rnd = Math.floor(Math.random()*181 + 90);
        color += rnd;
        if(color>=360) color-=360;

        $body.css('background-color', `hsl(${color},40%,70%)`);

        setTimeout(changeBgColor, Math.floor(Math.random()*3333 + 10000));
    }
}();


/*
    侧边栏显隐
*/
if(!isMobile)
    !function() {
        let showing = true;
        $('#switch').click(()=>{
            if(showing)
                hide();
            else
                show();
            showing = !showing;
        });

        function hide() {
            $('#switch').animate({left:-50});
            setTimeout(function () {
                $('#switch').html('<i class="fa fa-angle-double-right"></i>')
                            .animate({left:0}, 'slow');
            }, 2000);

            $('#left').hide('fast', function() {
                $('#right').css('width', '90%');
            });
        }

        function show() {
            $('#switch').animate({left:-50});
            setTimeout(function () {
                $('#switch').html('<i class="fa fa-angle-double-left"></i>')
                            .animate({left:0}, 'slow');
            }, 2000);

            $('#left').show('fast', function() {
                $('#right').css('width', '61.8%');
            });
        }
    }();


/*
    左侧超链接悬浮解释
*/
if(!isMobile) {
    let $desc = $('.link-desc');

    $('#left a.fa-stack').hover(function(){
        let title = $(this).data('title');
        $desc.html(title).stop()
             .animate({opacity:1});
    }, ()=>{
        $desc.stop().animate({opacity:0});
    });
}


/*
    item 图片自动换
*/
if(!isMobile)
    setInterval(()=>{
        let $item = $('#right .item');
        if(!$item.length) return;
        let rnd = Math.floor($item.length * Math.random());
        $item = $($item[rnd]);

        let $pic = $item.find('.lightbox a.hide');
        if(!$pic.length) return;
        let $picShow = $item.find('.lightbox a.show');
        rnd = Math.floor($pic.length * Math.random());
        $pic = $($pic[rnd]);

        $picShow.fadeOut(()=>{
            $picShow.removeClass('show').addClass('hide');
            $pic.fadeIn().removeClass('hide').addClass('show');
        });
    }, 2000);


// hide loaing animate
$(()=>{
    $('#loading').fadeOut(1234);
});
