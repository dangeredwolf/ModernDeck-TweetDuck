constructor(){
  super({
    requiresPageReload: true
  });
}

enabled(){
	let byebyeTweetDuck = document.querySelector("style#tweetduck-browser-css");
	byebyeTweetDuck.remove();

	console.log("ModernDeck content.js 8.0");
	console.log("bootstrapping moderndeck.css for extensibility");

	var injStyles = document.createElement("link");
	injStyles.rel = "stylesheet";
	injStyles.href = `tdp://${this.$token}/root/resources/moderndeck.css`;

	document.head.appendChild(injStyles);

	var injectScript2 = document.createElement("script");
	injectScript2.src = `tdp://${this.$token}/root/resources/libraries/moduleraid.min.js`;
	injectScript2.type = "text/javascript";
	document.head.appendChild(injectScript2);

	console.log("Bootstrapping moderndeck.js");

	var injectScript = document.createElement("script");

	var injectURL = document.createElement("div");
	injectURL.setAttribute("type",`tdp://${this.$token}/root/`);
	injectURL.id = "MTDURLExchange";
	document.head.appendChild(injectURL);
	console.log("injected url exchange with id " + injectURL.id);

	injectScript.src = `tdp://${this.$token}/root/resources/moderndeck.js`;

	injectScript.type = "text/javascript";
	document.head.appendChild(injectScript);

	if (document.getElementsByTagName("title").length > 0) {
		document.getElementsByTagName("title")[0].innerHTML = "ModernDeck"
	}
}

disabled(){
	// TODO
}
