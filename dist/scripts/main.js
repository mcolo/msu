var AudioPlayer=function(){function t(){e(),n()}function e(){$("#play").on("click",i),$("#next").on("click",function(){$("#nextanim").get(0).beginElement();var t=a();o(t+1)}),$("#prev").on("click",function(){$("#prevanim").get(0).beginElement();var t=a();o(t-1)}),$(".track").on("click",function(){var t=parseInt($(this).data("trackid"));o(t)})}function n(){u.addEventListener("pause",function(){d=!0,clearInterval(l),r()}),u.addEventListener("play",function(){s(),r()}),u.addEventListener("ended",function(){var t=a();t!==h.length-1&&o(t+1)})}function o(t){d=u.paused,t>=h.length?t=0:0>t&&(t=h.length-1),$("[data-curtrack]").attr("data-curtrack",t),$(".track").removeClass("active"),$('[data-trackid="'+t+'"]').addClass("active"),u.src=h[t],u.load(),u.play()}function i(){c()&&p?o(0):c()?u.play():u.pause(),p=!1}function r(){d&&($("#left").attr({from:c()?f.left.to:f.left.from,to:c()?f.left.from:f.left.to}).get(0).beginElement(),$("#right").attr({from:c()?f.right.to:f.right.from,to:c()?f.right.from:f.right.to}).get(0).beginElement())}function s(){var t=$(".audio").outerWidth();l=setInterval(function(){var e=u.currentTime/u.duration*t;$("#buffer").css({"-webkit-transform":"translateX("+e+"px)","-moz-transform":"translateX("+e+"px)","-ms-transform":"translateX("+e+"px)",transform:"translateX("+e+"px)"})},100)}function a(){var t=$("[data-curtrack]").attr("data-curtrack");return parseInt(t)}function c(){return u.paused}var l,u=document.getElementById("html5audio"),d=!0,p=!0,f={left:{from:"15,0 50,25 50,75 15,100",to:"15,10 40,10 40,90, 15,90"},right:{from:"50,25 85,50 85,50, 50,75",to:"60,10 85,10 85,90, 60,90"}},h=["https://res.cloudinary.com/ddkucvkg0/video/upload/v1520636718/steam/blue-apron.mp3","https://res.cloudinary.com/ddkucvkg0/video/upload/v1520636718/steam/guru.mp3","https://res.cloudinary.com/ddkucvkg0/video/upload/v1520636716/steam/spacious.mp3"];return{init:t}}(),ConnectSection=function(){function t(){ScreenData.isSmall||(r.loaded||r.loading||e(),$(window).scroll(function(){o()})),$(window).resize(function(){ScreenData.isSmall?($("#connect").css("height","auto"),$(".connect__content").css("padding","0")):r.loaded||r.loading?i():e()})}function e(){r.loading=!0,$.ajax({url:"https://www.instagram.com/mobilesteamunit/?__a=1",type:"GET",dataType:"json",success:n,error:function(t,e,n){r.loading=!1}})}function n(t){r.data=t,r.loading=!1,r.loaded=!0;for(var e=t.user.media.nodes,n="",o=0;o<e.length;o++){var s=e[o].thumbnail_src;o%6===0&&(0!==o&&(n+="</div>"),o!==e.length&&(n+='<div class="steamfeed__row">')),n+='<div class="steamfeed__img"><img src="'+s+'" alt="" /></div>'}$("#steamfeed").append(n),i()}function o(){var t=$(window).scrollTop(),e=$("#steamfeed").offset(),n=e.top+ScreenData.height,o=e.top-ScreenData.height;if(t>=o&&n>t){var i=400/(n-o),r=i*(t-o);$(".steamfeed").css({transform:"translateX("+r+"px)"})}}function i(){var t=2*$(".steamfeed__img").width()+30,e=$(".connect__content").height()/2;$(".connect").css("height",t+"px"),$(".connect__content").css("padding-top",t/2-e+"px")}var r={data:null,loaded:!1,loading:!1};return{init:t,runScrollEffect:o}}(),Nav=function(){function t(){i(),e()}function e(){$(window).scroll(function(){n()}),$(window).resize(function(){i()})}function n(){var t=$(window).scrollTop();switch(!0){case t>=r.top&&!r.visible:r.visible=!0,$("#nav").addClass("active");break;case t<r.top&&r.visible:r.visible=!1,$("#nav").removeClass("active");break;case t>=r.sections.first&&t<r.sections.second&&0!=r.currentSection:o(0);break;case t>=r.sections.second&&t<r.sections.third&&1!=r.currentSection:o(1);break;case t>=r.sections.third&&t<r.sections.fourth&&2!=r.currentSection:o(2);break;case t>=r.sections.fourth&&3!=r.currentSection:o(3)}}function o(t){r.currentSection=t;var e=-40*t;$(".nav__link").removeClass("active"),$('[data-nav-id="'+t+'"]').addClass("active"),$(".nav__links").css({"-webkit-transform":"translateY("+e+"px)","-moz-transform":"translateY("+e+"px)","-ms-transform":"translateY("+e+"px)","-o-transform":"translateY("+e+"px)",transform:"translateY("+e+"px)"})}function i(){r.top=r.sections.first=$("#products").offset().top-50,r.sections.second=$("#testimonials").offset().top-50,r.sections.third=$("#connect").offset().top-50,r.sections.fourth=$("#team").offset().top-50}var r={visible:!1,top:0,sections:{},currentSection:0};return{init:t}}(),ProductsSection=function(){function t(){$(window).scroll(function(){o()}),e()}function e(){$(".trigger-contact").click(function(){var t=$(this).data("selectval");n(),$("#request").val(t)})}function n(t){$("html, body").animate({scrollTop:$("#contact-form").offset().top-50},800)}function o(){var t=$(window).scrollTop(),e=$(".gigs").offset().top-$(window).height()/2,n=$(".music").offset().top-$(window).height()/2,o=$(".jingles").offset().top-$(window).height()/2,i=t>e&&n>=t,r=t>n&&o>=t,s=t>o;switch(!0){case i:$(".products").css("background","#4586ff"),$(".products .product-button").css("color","#4586ff");break;case r:$(".products").css("background","#2ac971"),$(".products .product-button").css("color","#2ac971");break;case s:$(".products").css("background","#147F96"),$(".products .product-button").css("color","#147F96")}}return{init:t}}(),ScreenData=function(){function t(){e(),$(window).resize(function(){e()})}function e(){ScreenData.height=$(window).height(),ScreenData.isSmall=$(window).width()<768,ScreenData.width=$(window).width()}var n=null,o=!1,i=null;return{init:t,height:n,isSmall:o,width:i}}(),TeamSection=function(){function t(){i=document.querySelectorAll(".member"),e(),$(window).resize(function(){e()})}function e(){ScreenData.isSmall&&$(window).scroll(function(){n()})}function n(){for(var t=0;t<i.length;t++){var e=i[t];!$(e).hasClass("hovered")&&e.getBoundingClientRect().top<o()?$(e).addClass("hovered"):$(e).hasClass("hovered")&&e.getBoundingClientRect().top>=o()&&$(e).removeClass("hovered")}}function o(){return ScreenData.height/4}var i;return{init:t}}();(function(){var t;t=function(){function t(t,e){var n,o;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof t)for(n in t)o=t[n],this.options[n]=o;this.context=null!=e?e:this,this.unique=this._genKey()}return t.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},t.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},t.prototype.run=function(e){var n,o,i;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=e||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),o="instafeedCache"+this.unique,window[o]=new t(this.options,this),window[o].unique=this.unique),!0},t.prototype.parse=function(t){var e,n,o,i,r,s,a,c,l,u,d,p,f,h,m,g,w,v,y,$,k,b,_,x,S,E,I,C,N,T,B,j,D;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),this.context.nextUrl="",null!=t.pagination&&(this.context.nextUrl=t.pagination.next_url),"none"!==this.options.sortBy)switch(B="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),T="least"===B[0]?!0:!1,B[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",T);break;case"liked":t.data=this._sortBy(t.data,"likes.count",T);break;case"commented":t.data=this._sortBy(t.data,"comments.count",T);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&this.options.mock===!1){if(g=t.data,N=parseInt(this.options.limit,10),null!=this.options.limit&&g.length>N&&(g=g.slice(0,N)),a=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(g=this._filter(g,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(l="",h="",$="",D=document.createElement("div"),d=0,S=g.length;S>d;d++){if(p=g[d],f=p.images[this.options.resolution],"object"!=typeof f)throw s="No image found for resolution: "+this.options.resolution+".",new Error(s);k=f.width,v=f.height,y="square",k>v&&(y="landscape"),v>k&&(y="portrait"),m=f.url,u=window.location.protocol.indexOf("http")>=0,u&&!this.options.useHttp&&(m=m.replace(/https?:\/\//,"//")),h=this._makeTemplate(this.options.template,{model:p,id:p.id,link:p.link,type:p.type,image:m,width:k,height:v,orientation:y,caption:this._getObjectProperty(p,"caption.text"),likes:p.likes.count,comments:p.comments.count,location:this._getObjectProperty(p,"location.name")}),l+=h}for(D.innerHTML=l,i=[],o=0,n=D.childNodes.length;n>o;)i.push(D.childNodes[o]),o+=1;for(_=0,E=i.length;E>_;_++)C=i[_],a.appendChild(C)}else for(x=0,I=g.length;I>x;x++){if(p=g[x],w=document.createElement("img"),f=p.images[this.options.resolution],"object"!=typeof f)throw s="No image found for resolution: "+this.options.resolution+".",new Error(s);m=f.url,u=window.location.protocol.indexOf("http")>=0,u&&!this.options.useHttp&&(m=m.replace(/https?:\/\//,"//")),w.src=m,this.options.links===!0?(e=document.createElement("a"),e.href=p.link,e.appendChild(w),a.appendChild(e)):a.appendChild(w)}if(j=this.options.target,"string"==typeof j&&(j=document.getElementById(j)),null==j)throw s='No element with id="'+this.options.target+'" on page.',new Error(s);j.appendChild(a),c=document.getElementsByTagName("head")[0],c.removeChild(document.getElementById("instafeed-fetcher")),b="instafeedCache"+this.unique,window[b]=void 0;try{delete window[b]}catch(O){r=O}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,n;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=t+"/"+e,n+=null!=this.options.accessToken?"?access_token="+this.options.accessToken:"?client_id="+this.options.clientId,null!=this.options.limit&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},""+t()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var n,o,i,r,s;for(o=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=t;o.test(n);)r=n.match(o)[1],s=null!=(i=this._getObjectProperty(e,r))?i:"",n=n.replace(o,function(){return""+s});return n},t.prototype._getObjectProperty=function(t,e){var n,o;for(e=e.replace(/\[(\w+)\]/g,".$1"),o=e.split(".");o.length;){if(n=o.shift(),!(null!=t&&n in t))return null;t=t[n]}return t},t.prototype._sortBy=function(t,e,n){var o;return o=function(t,o){var i,r;return i=this._getObjectProperty(t,e),r=this._getObjectProperty(o,e),n?i>r?1:-1:r>i?1:-1},t.sort(o.bind(this)),t},t.prototype._filter=function(t,e){var n,o,i,r,s;for(n=[],o=function(t){return e(t)?n.push(t):void 0},i=0,s=t.length;s>i;i++)r=t[i],o(r);return n},t}(),function(t,e){return"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.Instafeed=e()}(this,function(){return t})}).call(this),$(document).ready(function(){ScreenData.init(),TeamSection.init(),ConnectSection.init(),ProductsSection.init(),AudioPlayer.init(),$("#year").replaceWith((new Date).getFullYear())});var AudioPlayer = (function() {

	var player = document.getElementById('html5audio');
	var triggerButtonAnimation = true;
	var firstClick = true;
	var bufferInterval;

	var points = {
	  left: {
	    from: '15,0 50,25 50,75 15,100',
	    to: '15,10 40,10 40,90, 15,90'
	  },
	  right: {
	    from: '50,25 85,50 85,50, 50,75',
	    to: '60,10 85,10 85,90, 60,90'
	  }
	};

	var tracks = [
		'https://res.cloudinary.com/ddkucvkg0/video/upload/v1520636718/steam/blue-apron.mp3',
		'https://res.cloudinary.com/ddkucvkg0/video/upload/v1520636718/steam/guru.mp3',
		'https://res.cloudinary.com/ddkucvkg0/video/upload/v1520636716/steam/spacious.mp3',
	];

	function init() {
		registerHandlers();
		registerListeners();
	}

	function registerHandlers() {
		$('#play').on('click', handlePlayButtonClick);
		$('#next').on('click', function() {
			$('#nextanim').get(0).beginElement();
			var track = getCurTrack();
			playTrack(track+1);
		});
		$('#prev').on('click', function() {
			$('#prevanim').get(0).beginElement();
			var track = getCurTrack();
			playTrack(track-1);
		});
		$('.track').on('click', function() {
			var track = parseInt( $(this).data('trackid') );
			playTrack(track);
		});
	}

	function registerListeners() {
		player.addEventListener('pause', function() {
			triggerButtonAnimation = true;
			clearInterval(bufferInterval);
			setPlayButtonState();
		});
		player.addEventListener('play', function() {
			setBufferPosition();
			setPlayButtonState();
		});
		player.addEventListener('ended', function() {
			var track = getCurTrack();
			if(track !== tracks.length-1) {
				playTrack(track+1);
			}
		});
	}

	function playTrack(idx) {
		triggerButtonAnimation = player.paused;

		if(idx >= tracks.length) {
			idx = 0;
		} else if (idx < 0) {
			idx = tracks.length-1;
		}

		$('[data-curtrack]').attr('data-curtrack', idx);
		$('.track').removeClass('active');
		$('[data-trackid="'+idx+'"]').addClass('active');
		player.src = tracks[idx];
		player.load();
		player.play();
	}

	function handlePlayButtonClick() {
		if(isPaused() && firstClick) {
			playTrack(0);
		} else if(isPaused()) {
			player.play();
		} else {
			player.pause();
		}

		firstClick = false;
	}

	function setPlayButtonState() {
		if(triggerButtonAnimation) {
			$('#left').attr({
				from: isPaused() ? points.left.to : points.left.from,
				to: isPaused() ? points.left.from : points.left.to
			}).get(0).beginElement();
			$('#right').attr({
				from: isPaused() ? points.right.to : points.right.from,
				to: isPaused() ? points.right.from : points.right.to
			}).get(0).beginElement();
		}
	}

	function setBufferPosition() {
		var width = $('.audio').outerWidth();
		bufferInterval = setInterval(function() {
			var translate = (player.currentTime / player.duration) * width;

			$('#buffer').css({
				'-webkit-transform' : 'translateX(' + translate + 'px)',
				'-moz-transform'    : 'translateX(' + translate + 'px)',
				'-ms-transform'     : 'translateX(' + translate + 'px)',
				'transform'         : 'translateX(' + translate + 'px)'
			});
		}, 100);

	}

	function getCurTrack() {
		var curTrack = $('[data-curtrack]').attr('data-curtrack');
		return parseInt(curTrack);
	}

	function isPaused() {
	  return player.paused;
	}

	return {
		init: init
	}

})();

var ConnectSection = (function() {

	var instagram = {
		images: [],
		data: null,
		loaded: false,
		loading: false
	};

	function init() {
		if(!ScreenData.isSmall) {
			if(!instagram.loaded && !instagram.loading) {
				loadInstagram();
			}

			$(window).scroll(function() {
				runScrollEffect();
			});
		}

		$(window).resize(function() {
			if(ScreenData.isSmall) {
				$('#connect').css('height', 'auto');
				$('.connect__content').css('padding', '0');
			} else {
				if(!instagram.loaded && !instagram.loading) {
					loadInstagram();
				} else {
					resizeInstagramSection();
				}
			}
		})
	}


	function loadInstagram() {
		instagram.loading = true;
		$.ajax({
			url: 'https://www.instagram.com/mobilesteamunit/?__a=1',
			type: 'GET',
			dataType: 'json',
			success: processinstagram,
			error: function(a,b,c) {
				instagram.loading = false;
				//do nothing
			}
		});
	}

	function processinstagram(data) {
		instagram.data = data;
		instagram.loading = false;
		instagram.loaded = true;

		try {
			setImagesFromData();
		} catch (err) {
			setFallbackImages();
		} finally {
			injectImagesIntoHtml();
		}
	}

	function setImagesFromData() {
		var arr = instagram.data.graphql.user.edge_owner_to_timeline_media.edges;
		for(var i=0; i<arr.length; i++) {
			instagram.images.push(arr[i].node.thumbnail_src);
		}
	}

	function setFallbackImages() {
		instagram.images = [
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040658/steam/ig_1.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040658/steam/ig_2.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040658/steam/ig_3.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040658/steam/ig_4.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040659/steam/ig_5.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040658/steam/ig_6.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040658/steam/ig_7.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040659/steam/ig_8.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040659/steam/ig_9.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040659/steam/ig_10.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040659/steam/ig_11.jpg',
			'https://res.cloudinary.com/ddkucvkg0/image/upload/v1521040659/steam/ig_12.jpg'
		];
	}

	function injectImagesIntoHtml() {
		var output = '';

		for(var i=0; i<instagram.images.length; i++) {
			var img = instagram.images[i];

			if(i%6===0) {
				if(i!==0) output += '</div>'
				if(i!==instagram.images.length) output += '<div class="steamfeed__row">';
			}

			output += '<div class="steamfeed__img"><img src="'+img+'" alt="" /></div>';
		}

		$('#steamfeed').append(output);
		resizeInstagramSection();
	}

	function runScrollEffect() {
		var yPos = $(window).scrollTop();
		var steamPos = $('#steamfeed').offset();
		var stop = steamPos.top + ScreenData.height;
		var start = steamPos.top - ScreenData.height;

		if(yPos>=start && yPos<stop ) {
			var increment = 400 / (stop-start);
			var move = (increment * (yPos-start));
			$('.steamfeed').css({
				transform: 'translateX('+move+'px)'
			});
		}
	}

	function resizeInstagramSection() {
		var newHeight = ((window.innerWidth + 340) / 6) * 2 + 30;
		$('.connect').css('height', newHeight+'px');
	}

	return {
		init: init,
		runScrollEffect: runScrollEffect
	}

})();

var Nav = (function() {

	var nav = {
		visible: false,
		top: 0,
		sections: {},
		currentSection: 0
	}

	function init() {
		setValues();
		registerListeners();
	}

	function registerListeners() {
		$(window).scroll(function() {
			displayNav();
		});

		$(window).resize(function() {
			setValues();
		})
	}

	function displayNav() {
		var yPos = $(window).scrollTop();

		switch(true) {
			case yPos>=nav.top && !nav.visible:
				nav.visible = true;
				$('#nav').addClass('active');
				break;
			case yPos<nav.top && nav.visible:
				nav.visible = false;
				$('#nav').removeClass('active');
				break;
			case yPos>=nav.sections.first && yPos<nav.sections.second && nav.currentSection != 0:
				updateNav(0);
				break;
			case yPos>=nav.sections.second && yPos<nav.sections.third && nav.currentSection != 1:
				updateNav(1);
				break;
			case yPos>=nav.sections.third && yPos<nav.sections.fourth && nav.currentSection != 2:
				updateNav(2);
				break;
			case yPos>=nav.sections.fourth && nav.currentSection != 3:
				updateNav(3);
				break;
		}
	}

	function updateNav(newSection) {
		nav.currentSection = newSection;
		var translate = newSection*-40;
		$('.nav__link').removeClass('active');
		$('[data-nav-id="'+newSection+'"]').addClass('active');

		$('.nav__links').css({
			'-webkit-transform' : 'translateY(' + translate + 'px)',
			'-moz-transform'    : 'translateY(' + translate + 'px)',
			'-ms-transform'     : 'translateY(' + translate + 'px)',
			'-o-transform'      : 'translateY(' + translate + 'px)',
			'transform'         : 'translateY(' + translate + 'px)'
		});
	}


	function setValues() {
		nav.top = nav.sections.first = $('#products').offset().top - 50;
		nav.sections.second = $('#testimonials').offset().top - 50;
		nav.sections.third = $('#connect').offset().top - 50;
		nav.sections.fourth = $('#team').offset().top - 50;
	}

	return {
		init: init
	}

})();
var ProductsSection = (function() {

	function init() {
		$(window).scroll(function() {
			runEffect();
		});

		registerHandlers();
	}

	function registerHandlers() {
		$('.trigger-contact').click(function() {
			var select = $(this).data('selectval');
			scrollToForm();
			$('#request').val(select);
		});
	}

	function scrollToForm(hash) {
		$('html, body').animate({
			scrollTop: $('#contact-form').offset().top - 50
		}, 800);
	}

	function runEffect() {
		var yPos = $(window).scrollTop();
		var gigsTop = $('.gigs').offset().top - ($(window).height()/2);
		var musicTop = $('.music').offset().top - ($(window).height()/2);
		var jingleTop = $('.jingles').offset().top - ($(window).height()/2);
		var inGigs = yPos > gigsTop && yPos <= musicTop;
		var inMusic = yPos > musicTop && yPos <= jingleTop;
		var inJingles = yPos > jingleTop;

		switch(true) {
			case inGigs:
				$('.products').css('background', '#4586ff');
				$('.products .product-button').css('color', '#4586ff');
				break;
			case inMusic:
				$('.products').css('background', '#2ac971');
				$('.products .product-button').css('color', '#2ac971');
				break;
			case inJingles:
				$('.products').css('background', '#147F96'); //d57421
				$('.products .product-button').css('color', '#147F96');
				break;
		}
	}

	return {
		init: init
	}

})();

var ScreenData = (function() {

	var height = null;
	var isSmall = false;
	var width = null;

	function init() {
		setValues();

		$(window).resize(function() {
			setValues();
		});
	}

	function setValues() {
		ScreenData.height = $(window).height();
		ScreenData.isSmall = $(window).width() < 768;
		ScreenData.width = $(window).width();
	}

	return {
		init: init,
		height: height,
		isSmall: isSmall,
		width: width
	}

})();
var TeamSection = (function() {

	var team;

	function init() {
		team = document.querySelectorAll('.member');
		initScrollWatcher();

		$(window).resize(function() {
			initScrollWatcher();
		});
	}

	function initScrollWatcher() {
		if(ScreenData.isSmall) {
			$(window).scroll(function() {
				initTeamScrollEffect();
			});
		}
	}

	function initTeamScrollEffect() {
		for(var i=0; i<team.length; i++) {
			var member = team[i];
			if(!$(member).hasClass('hovered') && member.getBoundingClientRect().top < teamTriggerPoint()) {
				$(member).addClass('hovered')
			} else if($(member).hasClass('hovered') && member.getBoundingClientRect().top >= teamTriggerPoint()) {
				$(member).removeClass('hovered');
			}
		}
	}

	function teamTriggerPoint() {
		return ScreenData.height / 4;
	}


	return {
		init: init
	}

})();

$(document).ready(function() {
	//init fns
	ScreenData.init();
	TeamSection.init();
	ConnectSection.init();
	ProductsSection.init();
	AudioPlayer.init();
	// Nav.init();

	//copyright year
	$('#year').replaceWith(new Date().getFullYear());
});
