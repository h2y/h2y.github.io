"use strict";var $window=$(window),isMobile=$window.width()<600,winh=$window.height();if($(".self-desc").show(isMobile?"slow":7e3),!isMobile){var masonry=$("#right").masonry({itemSelector:".item",gutter:20});setInterval(function(){masonry.masonry()},1234)}!function(){function t(){var t=window.item_data[i++],e=document.createElement("div");e.className="item",t.link=t.link||"javascript:;",t.img?"string"==typeof t.img&&(t.img=[t.img]):t.img=[];var o="";if(t.img.length){o='<a href="'+t.img[0]+'" target="_blank" title="'+t.title+'" class="show">\n                        <img class="img" src="'+t.img[0]+'">\n                    </a>';for(var l=1;l<t.img.length;l++)o+='<a href="'+t.img[l]+'" target="_blank" title="'+t.title+'" class="hide">\n                            <img class="img" src="'+t.img[l]+'">\n                         </a>'}e.innerHTML='\n            <a href="'+t.link+'" target="_blank">\n                <p class="title">\n                    '+t.title+" "+("javascript:;"===t.link?"":'<i class="fa fa-hand-o-left"></i>')+'\n                </p>\n            </a>\n            <div class="lightbox">'+o+'</div>\n            <p class="text">'+t.text+"</p>\n        ",masonry?masonry.append(e).masonry("appended",e):n.appendChild(e),a=e,$(e).find(".lightbox").lightGallery()}var i=0,a=null,n=document.querySelector("#right");t();var e=setInterval(function(){return window.item_data.length<=i?clearInterval(e):void(winh+$(document).scrollTop()>a.offsetTop&&t())},1e3)}(),!function(){function t(){var n=Math.floor(181*Math.random()+90);a+=n,a>=360&&(a-=360),i.css("background-color","hsl("+a+",40%,70%)"),setTimeout(t,Math.floor(3333*Math.random()+1e4))}var i=$("body"),a=0;t()}(),isMobile||!function(){function t(){$("#switch").animate({left:-50}),setTimeout(function(){$("#switch").html('<i class="fa fa-angle-double-right"></i>').animate({left:0},"slow")},2e3),$("#left").hide("fast",function(){$("#right").css("width","90%")})}function i(){$("#switch").animate({left:-50}),setTimeout(function(){$("#switch").html('<i class="fa fa-angle-double-left"></i>').animate({left:0},"slow")},2e3),$("#left").show("fast",function(){$("#right").css("width","61.8%")})}var a=!0;$("#switch").click(function(){a?t():i(),a=!a})}(),isMobile||!function(){var t=$(".link-desc");$("#left a.fa-stack").hover(function(){var i=$(this).data("title");t.html(i).stop().animate({opacity:1})},function(){t.stop().animate({opacity:0})})}(),isMobile||setInterval(function(){var t=$("#right .item");if(t.length){var i=Math.floor(t.length*Math.random());t=$(t[i]);var a=t.find(".lightbox a.hide");if(a.length){var n=t.find(".lightbox a.show");i=Math.floor(a.length*Math.random()),a=$(a[i]),n.fadeOut(function(){n.removeClass("show").addClass("hide"),a.fadeIn().removeClass("hide").addClass("show")})}}},2e3),$(function(){$("#loading").fadeOut("slow")});
//# sourceMappingURL=main.js.map
