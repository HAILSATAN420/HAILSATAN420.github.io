function Script() {
	this.chatHistory = ["", "¯\\_(ツ)_/¯", "(╯°□°）╯︵ ┻━┻", "\┬\─\┬ ノ( ゜-゜ノ)", "ಠ_ಠ",  ":trollface:", "ヽ༼ ಠ益ಠ ༽ﾉ", "凸(ಠ益ಠ)凸",
	"( ͡° ͜ʖ ͡°)", "( ͡ᵔ ͜ʖ ͡ᵔ )", "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]"];

	this.currentItem = 0;

	this.startAutoWoot();
	this.setupChatHistory();

	$("#header-global").append("<font id='DUBTRACK-TEXT' size='2'><font color='red'>ENABLED</font></font>");
}

Script.prototype.setupChatHistory = function() {
	var _this = this;
	var updateChatFromHistory = function() {
		$('#chat-txt-message').val( _this.chatHistory[_this.currentItem]);
	};
	$("#chat-txt-message").keydown(function(event) {
		if(event.keyCode != 38 && event.keyCode != 40)
			return;

		if( event.keyCode == 38 && _this.currentItem > 0) {
			_this.currentItem -= 1;
		}

		if( event.keyCode == 40 && _this.currentItem < _this.chatHistory.length ) {
			_this.currentItem += 1;
		}
		updateChatFromHistory();
	});
}
Script.prototype.startAutoWoot = function() {
	 $(".dubup").click();

	this.autoWootTimer = setInterval( function() {
		 $(".dubup").click();
	}, 45000);
}

Script.prototype.stopAutoWoot = function() {
	if( this.autoWootTimer != undefined )
		clearInterval( this.autoWootTimer );
}

Script.prototype.cleanUp = function() {
	this.stopAutoWoot();
	this.isDisabled = true;
	$("DUBTRACK-TEXT").remove();
}
if( document.Script === undefined ) {
	document.Script = new Script();
} else {
	document.Script.cleanUp();
	document.Script = undefined;
}
