$(document).ready(function(){
		loadYt();
		});
	var player;
	var lplayer;
function loadYt(){


	var tag = document.createElement('script');
	tag.src = "http://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubePlayerAPIReady() {
	player = new YT.Player('test', {
		height: '190',
		width: '240',
		videoId: 'JW5meKfy3fY',
		events: {
		'onReady': onPlayerReady
		}
	});
	lplayer = new YT.Player('test2', {
		height: '190',
		width: '240',
		videoId: 'JW5meKfy3fY',
		events: {
		'onReady': onPlayerReady2
		}
	});
}
function onPlayerReady(evt) {
	player.setVolume(100);
	loop();
}
function onPlayerReady2(evt) {
	loop2();
	lplayer.setVolume(10);
}
function loop(){
	player.seekTo(2, false);
	setTimeout(function(){loop()}, 2500);
}
function loop2(){
	lplayer.seekTo(150, true);
	setTimeout(function(){loop2()}, 1500);
}
