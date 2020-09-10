const Clock = {
	'년' : 0,
	'월' : 0,
	'일' : 0,
	'요일' : 0,
	'시' : 0,
	'분' : 0,
	'초' : 0,
	'밀리초' : 0,
	'update' : function() {
		let date = new Date();
		Clock['년'] = date.getYear() + 1900;
		Clock['월'] = date.getMonth() + 1;
		Clock['일'] = date.getDate();
		Clock['요일'] = Days[date.getDay()];
		Clock['시'] = date.getHours();
		Clock['분'] = date.getMinutes();
		Clock['초'] = date.getSeconds();
		Clock['밀리초'] = date.getMilliseconds();

		return this;
	},
	'toString' : function() {
		let txt = '';
		for(i in this) {
			if(typeof(Clock[i]) == 'function') continue;
			txt += Clock[i] + i + ' ';
		}
		return txt;
	}
}

const Days = ['일', '월', '화', '수', '목', '금', '토'];

window.onload = function() {
	setInterval(tick, 13.33);
}

function tick() {
	document.querySelector('#clock').innerText = Clock.update().toString();
}