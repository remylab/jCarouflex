(function(a){function j(b,i){return parseInt(a.css(b[0],i))||0}a.fn.jCarouflexLite=function(b){b=a.extend({dir:1,btnPrev:null,btnNext:null,speed:800,easing:null,vertical:false,visible:3,scroll:1,start:1,beforeStart:null,afterEnd:null},b||{});return this.each(function(){function i(d){if(!c){c=true;b.beforeStart&&b.beforeStart.call(this,f.slice(l,l+o));var h=d==1?a("li",e).slice(2*g,k+2*g).clone():a("li",e).slice(0,k).clone();l=d==1?2*g:0;d=d==1?-2*g*m:0;e.animate(p=="left"?{left:d}:{top:d},b.speed,
b.easing,function(){b.afterEnd&&b.afterEnd.call(this,f.slice(l,l+o));e.empty().append(h).prepend(h.slice(k-g).clone()).append(h.slice(0,g).clone());e.css(p,-g*m);f=a("li",e);c=false})}return false}var c=false,p=b.vertical?"top":"left",q=b.vertical?"height":"width",n=a(this),e=a("ul",n),d=a("li",e),k=d.size(),o=b.visible,g=b.scroll,h=b.start,g=Math.min(b.visible,g),g=Math.max(1,g),h=Math.min(k,h),h=Math.max(1,h);h>1&&(e.append(d.clone()),d=a("li",e).slice(h-1,h+k-1).clone(),e.empty().append(d),a("li",
e).each(function(){a("#log").append(a(this).html())}),d=a("li",e));e.prepend(d.slice(k-g).clone()).append(d.slice(0,g).clone());var f=a("li",e),d=f.size(),l=0;n.css("visibility","visible");f.css({overflow:"hidden"});f.css("float",b.vertical?"none":"left");e.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});n.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var m=b.vertical?f[0].offsetHeight+j(f,"marginTop")+j(f,"marginBottom"):f[0].offsetWidth+
j(f,"marginLeft")+j(f,"marginRight");d*=m;h=m*o;f.css({width:f.width(),height:f.height()});e.css(q,d+"px").css(p,-(g*m));n.css(q,h+"px");a(this).bind("moveDir",function(a,c){return i(c*b.dir)});b.btnPrev&&a(b.btnPrev).click(function(){return i(-1*b.dir)});b.btnNext&&a(b.btnNext).click(function(){return i(1*b.dir)})})}})(jQuery);
jQuery.jCarouflex=function(a){function j(b){$(a.teaser).data(c).stop=false;$(a.teaser).data(c).pause=b;a.afterPause&&a.afterPause.call(this,$(a.btnPause),$(a.teaser).data(c).pause)}function b(){$(a.teaser).data(c).isMoving=false;$(a.teaser).data(c).force=false}function i(){var b=$(a.teaser).data(c);if(!b.pause&&!b.isMoving&&!b.force&&!b.stop)b.dir=1,$(a.teaser).trigger("moveDir",1),$(a.teaser).data(c,b);setTimeout(function(){i()},a.pauseTime)}var a=$.extend({teaser:null,slides:null,teaserNext:null,
teaserPrev:null,btnPause:null,afterPause:null,speed:500,pauseTime:3E3,visibleTeaser:3,visibleSlides:1,verticalTeaser:false,verticalSlides:true,teaserScroll:1,slidesScroll:1,teaserDir:1,slidesDir:1,pause:false},a||{}),c="jCarouflex";$(a.teaser).find("li").size();$(a.teaser).data(c,{dir:1,force:false,isMoving:false,stop:false,pause:a.pause});$(a.teaser).jCarouflexLite({visible:a.visibleTeaser,vertical:a.verticalTeaser,speed:a.speed,scroll:a.teaserScroll,dir:a.teaserDir,start:a.teaserDir==1?a.teaserScroll+
1:$("li",a.teaser).length-a.visibleTeaser-a.teaserScroll+1,beforeStart:function(){$(a.teaser).data(c).isMoving=true;a.slides&&$(a.slides).trigger("moveDir",$(a.teaser).data(c).dir)},afterEnd:function(){a.slides==null&&b()}});$(a.teaser).bind("pause",function(a,b){j(b)});a.btnPause&&$(a.btnPause).bind("click",function(){j(!$(a.teaser).data(c).pause)});a.slides&&$(a.slides).jCarouflexLite({visible:a.visibleSlides,vertical:a.verticalSlides,speed:a.speed,scroll:a.slidesScroll,dir:a.slidesDir,start:a.slidesDir==
1?1:$("li",a.slides).length-a.slidesScroll+1,afterEnd:function(){b()}});a.teaserPrev&&$(a.teaserPrev).click(function(){$(a.teaser).data(c).force=true;$(a.teaser).data(c).dir=-1;$(a.teaser).trigger("moveDir",-1)});a.teaserNext&&$(a.teaserNext).click(function(){$(a.teaser).data(c).force=true;$(a.teaser).data(c).dir=1;$(a.teaser).trigger("moveDir",1)});$(a.teaser).hasClass("pause")&&($(a.teaser).mouseenter(function(){$(a.teaser).data(c).stop=true}),$(a.teaser).mouseleave(function(){$(a.teaser).data(c).stop=
false}));$(a.slides).hasClass("pause")&&($(a.slides).mouseenter(function(){$(a.teaser).data(c).stop=true}),$(a.slides).mouseleave(function(){$(a.teaser).data(c).stop=false}));(function(){setTimeout(function(){i()},a.pauseTime)})()};