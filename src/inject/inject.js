// chrome.extension.sendMessage({}, function(response) {
// 	var readyStateCheckInterval = setInterval(function() {
// 	if (document.readyState === "complete") {
// 		clearInterval(readyStateCheckInterval);

// 		// ----------------------------------------------------------
// 		// This part of the script triggers when page is done loading
// 		console.log("Hello. This message was sent from scripts/inject.js");
// 		// ----------------------------------------------------------

// 	}
// 	}, 10);
// });

$(document).ready(function(){
	// $(document.body).on('click', '.mce-panel', function(){
	// 	$(".mce-textbox").val(pageContent);
	// })
})

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	//check if editor source is open
	if(!$(".mce-textbox").length){
		// alert("You need to open the <> panel first"); return}
			$(".mce-i-code").trigger('click');
	}

    switch(message.type.template) {
        case "envelope":
        var pageContent="";
			pageContent += "<!DOCTYPE html>";
			pageContent += "<head>";
			pageContent += "";
			pageContent += "<link rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.0\/css\/bootstrap.min.css\">";
			pageContent += "<style type=\"text\/css\">";
			pageContent += "body {";
			pageContent += "padding-top: 30px;";
			pageContent += "}";
			pageContent += "";
			pageContent += ".top-buffer { ";
			pageContent += "margin-top:20px; ";
			pageContent += "}";
			pageContent += "";
			pageContent += "\/*enter the brand color below*\/";
			pageContent += "";
			pageContent += ".btn-brand {";
			pageContent += "background-color: red;";
			pageContent += "color: white;";
			pageContent += "}";
			pageContent += "";
			pageContent += ".logo-img {";
			pageContent += "height: 50px;";
			pageContent += "margin-top: 20px;";
			pageContent += "}";
			pageContent += "";
			pageContent += "<\/style>";
			pageContent += "<\/head>";
			pageContent += "<body>";
			pageContent += "<div class=\"container\">";
			pageContent += "<img class=\"logo-img\" height= \"30px\" src=\""+message.type.logo+"\">";
			pageContent += "<div class=\"row top-buffer\">";
			pageContent += "<div class=\"col-md-6\">";
			pageContent += "<h2>Ready to get started?<\/h2>";
			pageContent += "<h4>You have been invited to a video interview for <strong>[job-title]<\/strong> that expires on <strong>[video-expiration-date]<\/strong>.<\/h4>";
			pageContent += "<p>This video interview includes [video-total-questions] that will take [video-total-time] to complete.<\/p>";
			pageContent += "<p>This video interview can be conducted at any time and will expire on [video-expiration-date]. In order to conduct this interview, you’ll need access to a webcam and microphone. We suggest conducting this interview in a well lit area that is relatively quiet.<\/p>";
			pageContent += "<div class=\"well\">";
			pageContent += "<a class=\"btn btn-primary\" href=\"[video-actual-url]\">Take Interview<\/a> or <a href=\"[video-practice-url]\">Take Practice Interview<\/a>";
			pageContent += "<\/div>";
			pageContent += "<\/div><div class=\"col-md-6\">";
			pageContent += "<img class=\"img-responsive\" alt=\"Responsive image\" src=\"http://careers.jobvite.com/video-assets/envelope2.svg\" >";
			pageContent += "               ";
			pageContent += "                <\/div>";
			pageContent += "            <\/div>";
			pageContent += "        <\/div>";
			pageContent += "";
			pageContent += "    <\/body>";
			pageContent += "<\/html>";
			pageContent += "";
        	$(".mce-textbox").val(pageContent);
        	break;
        case "videoUrl":
	        var videoUrl="";
			videoUrl += "<!DOCTYPE html>";
			videoUrl += "    <head>";
			videoUrl += "        ";
			videoUrl += "        <link rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.0\/css\/bootstrap.min.css\">";
			videoUrl += "        <style type=\"text\/css\">";
			videoUrl += "            body {";
			videoUrl += "                padding-top: 30px;";
			videoUrl += "            }";
			videoUrl += "";
			videoUrl += "            .top-buffer { ";
			videoUrl += "                margin-top:20px; ";
			videoUrl += "            }";
			videoUrl += "";
			videoUrl += "            \/*enter the brand color below*\/";
			videoUrl += "";
			videoUrl += "            .btn-brand {";
			videoUrl += "                background-color: red;";
			videoUrl += "                color: white;";
			videoUrl += "            }";
			videoUrl += "";
			videoUrl += "            .bg {";
			videoUrl += "                margin-top: 20px;";
			videoUrl += "                background-image: url(\"bg-2.jpg\");";
			videoUrl += "                background-size: cover;";
			videoUrl += "                padding-bottom: 300px;";
			videoUrl += "            }";
			videoUrl += "";
			videoUrl += "            iframe body {";
			videoUrl += "                background-color: #fff;";
			videoUrl += "            }";
			videoUrl += "";
			videoUrl += ".logo-img {";
			videoUrl += "height: 50px;";
			videoUrl += "margin-top: 20px;";
			videoUrl += "}";
			videoUrl += "";
			videoUrl += "        <\/style>";
			videoUrl += "    <\/head>";
			videoUrl += "    <body>";
			videoUrl += "        <div class=\"head\">";
			videoUrl += "            <div class=\"container\">";
			videoUrl += "                <img stlye=\"padding-top:20px\" height= \"20px\" class=\"logo-img\" src=\""+message.type.logo+"\">";
			videoUrl += "            <\/div>";
			videoUrl += "        <\/div>";
			videoUrl += "        <div class=\"container\">";
			videoUrl += "            <div class=\"row top-buffer\">";
			videoUrl += "                <div class=\"col-md-6\">";
			videoUrl += "                    <h2>Ready to get started?<\/h2>";
			videoUrl += "                    <h4 class=\"lead\">You have been invited to a video interview for <strong>[job-title]<\/strong> that expires on <strong>[video-expiration-date]<\/strong>.<\/h4>";
			videoUrl += "                    <p>This video interview includes [video-total-questions] that will take [video-total-time] to complete.<\/p>";
			videoUrl += "                    <p>This video interview can be conducted at any time and will expire on [video-expiration-date]. In order to conduct this interview, you’ll need access to a webcam and microphone. We suggest conducting this interview in a well lit area that is relatively quiet.<\/p>";
			videoUrl += "                    <div class=\"well\">";
			videoUrl += "                        <a class=\"btn btn-primary\" href=\"[video-actual-url]\">Take Interview<\/a> or <a href=\"[video-practice-url]\">Take Practice Interview<\/a>";
			videoUrl += "                    <\/div>";
			videoUrl += "                <\/div>";
			videoUrl += "                <div class=\"col-md-6\">";
			videoUrl += "                    <div class=\"embed-responsive embed-responsive-4by3\">";
			videoUrl += "                        <iframe class=\"embed-responsive-item\" src=\""+message.type.url+"\"><\/iframe>";
			videoUrl += "                    <\/div>";
			videoUrl += "                <\/div>";
			videoUrl += "            <\/div>";
			videoUrl += "        <\/div>";
			videoUrl += "    <\/body>";
			videoUrl += "<\/html>";
			videoUrl += "";
        	$(".mce-textbox").val(videoUrl);
        	break;
        case "imageQuote":
        	var imageQuote="";
			imageQuote += "<!DOCTYPE html>";
			imageQuote += "    <head>";
			imageQuote += "        ";
			imageQuote += "        <link rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.0\/css\/bootstrap.min.css\">";
			imageQuote += "        <style type=\"text\/css\">";
			imageQuote += "            body {";
			imageQuote += "                padding-top: 30px;";
			imageQuote += "            }";
			imageQuote += "";
			imageQuote += "            .top-buffer { ";
			imageQuote += "                margin-top:20px; ";
			imageQuote += "            }";
			imageQuote += "";
			imageQuote += "            \/*enter the brand color below*\/";
			imageQuote += "";
			imageQuote += "            .btn-brand {";
			imageQuote += "                background-color: red;";
			imageQuote += "                color: white;";
			imageQuote += "            }";
			imageQuote += "";
			imageQuote += "            .bg {";
			imageQuote += "                margin-top: 20px;";
			imageQuote += "                background-image: url(\"bg-2.jpg\");";
			imageQuote += "                background-size: cover;";
			imageQuote += "                padding-bottom: 300px;";
			imageQuote += "            }";
			imageQuote += "";
			imageQuote += ".logo-img {";
			imageQuote += "height: 50px;";
			imageQuote += "margin-top: 20px;";
			imageQuote += "}";
			imageQuote += "";
			imageQuote += "        <\/style>";
			imageQuote += "    <\/head>";
			imageQuote += "    <body>";
			imageQuote += "        <div class=\"head\">";
			imageQuote += "            <div class=\"container\">";
			imageQuote += "                <img height= \"60px\" class=\"logo-img\" class=\"logo-img\" src=\""+message.type.logo+"\">";
			imageQuote += "            <\/div>";
			imageQuote += "        <\/div>";
			imageQuote += "        <div class=\"container\">";
			imageQuote += "            <div class=\"row top-buffer\">";
			imageQuote += "                <div class=\"col-md-6\">";
			imageQuote += "                    <h2>Ready to get started?<\/h2>";
			imageQuote += "                    <h4 class=\"lead\">You have been invited to a video interview for <strong>[job-title]<\/strong> that expires on <strong>[video-expiration-date]<\/strong>.<\/h4>";
			imageQuote += "                    <p>This video interview includes [video-total-questions] that will take [video-total-time] to complete.<\/p>";
			imageQuote += "                    <p>This video interview can be conducted at any time and will expire on [video-expiration-date]. In order to conduct this interview, you will need access to a webcam and microphone. We suggest conducting this interview in a well lit area that is relatively quiet.<\/p>";
			imageQuote += "                    <div class=\"well\">";
			imageQuote += "                        <a class=\"btn btn-primary\" href=\"[video-actual-url]\">Take Interview<\/a> or <a href=\"[video-practice-url]\">Take Practice Interview<\/a>";
			imageQuote += "                    <\/div>";
			imageQuote += "                <\/div>";
			imageQuote += "                <div class=\"col-md-6\">";
			imageQuote += "                    <img style=\"margin-bottom:40px\" class=\"img-thumbnail img-responsive\" src=\""+message.type.url+"\">";
			imageQuote += "                        <p class=\"lead\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.\"<\/p>";
			imageQuote += "                        <footer class=\"pull-right\">Raymond Kinder <cite title=\"Source Title\">Product Manager @ [Company]<\/cite><\/footer>";
			imageQuote += "                <\/div>";
			imageQuote += "            <\/div>";
			imageQuote += "        <\/div>";
			imageQuote += "    <\/body>";
			imageQuote += "<\/html>";
			imageQuote += "";

        	$(".mce-textbox").val(imageQuote);
        	break;
        case "bigImage":
	        var bigImage="";
			bigImage += "<!DOCTYPE html>";
			bigImage += "    <head>";
			bigImage += "        ";
			bigImage += "        <link rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.0\/css\/bootstrap.min.css\">";
			bigImage += "        <style type=\"text\/css\">";
			bigImage += "            body {";
			bigImage += "                padding-top: 10px;";
			bigImage += "            }";
			bigImage += "";
			bigImage += "            .top-buffer { ";
			bigImage += "                margin-top:20px; ";
			bigImage += "            }";
			bigImage += "";
			bigImage += "            \/*enter the brand color below*\/";
			bigImage += "";
			bigImage += "            .btn-brand {";
			bigImage += "                background-color: red;";
			bigImage += "                color: white;";
			bigImage += "            }";
			bigImage += "";
			bigImage += "            .bg {";
			bigImage += "                margin-top: 20px;";
			bigImage += "                background-image: url(\""+message.type.url+"\");";
			bigImage += "                background-size: cover;";
			bigImage += "                padding-bottom: 200px;";
			bigImage += "            }";
			bigImage += "";
			bigImage += "            .white-text{";
			bigImage += "                color: #fff;";
			bigImage += "            }";
			bigImage += "";
			bigImage += ".logo-img {";
			bigImage += "height: 50px;";
			bigImage += "margin-top: 20px;";
			bigImage += "}";
			bigImage += "";
			bigImage += "        <\/style>";
			bigImage += "    <\/head>";
			bigImage += "    <body>";
			bigImage += "        <div class=\"head\">";
			bigImage += "            <div class=\"container\">";
			bigImage += "                <img height= \"50px\" class=\"logo-img\" src=\""+message.type.logo+"\">";
			bigImage += "            <\/div>";
			bigImage += "        <\/div>";
			bigImage += "        <div class=\"bg\">";
			bigImage += "            <div class=\"container\">";
			bigImage += "                <div class=\"row top-buffer\">";
			bigImage += "                    <div class=\"col-md-6 " +(message.type.whiteText ? 'white-text' : '')+ "\">";
			bigImage += "                        <h2>Ready to get started?<\/h2>";
			bigImage += "                        <h4 class=\"lead\">You have been invited to a video interview for <strong>[job-title]<\/strong> that expires on <strong>[video-expiration-date]<\/strong>.<\/h4>";
			bigImage += "                        <p>This video interview includes [video-total-questions] that will take [video-total-time] to complete.<\/p>";
			bigImage += "                        <p>This video interview can be conducted at any time and will expire on [video-expiration-date]. In order to conduct this interview, you’ll need access to a webcam and microphone. We suggest conducting this interview in a well lit area that is relatively quiet.<\/p>";
			bigImage += "                        <p>";
			bigImage += "                        <\/br>";
			bigImage += "                            <a class=\"btn btn-primary btn-lg\" href=\"[video-actual-url]\">Take Interview<\/a> or <a class=\"btn btn-default btn-lg\" href=\"[video-practice-url]\">Take Practice Interview<\/a>";
			bigImage += "                        <\/p>";
			bigImage += "                 ";
			bigImage += "                    <\/div>";
			bigImage += "                    <\/div>";
			bigImage += "                <\/div>";
			bigImage += "            <\/div>";
			bigImage += "    <\/body>";
			bigImage += "<\/html>";
			bigImage += "";

        	$(".mce-textbox").val(bigImage);
        	break;
        	case "confirmEnvelope":
        	var confirmEnvelope = "<!DOCTYPE html>\r\n    <head>\r\n        \r\n        <link rel=\"stylesheet\" href=\"https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.0\/css\/bootstrap.min.css\">\r\n        <link href=\'http:\/\/fonts.googleapis.com\/css?family=Rock+Salt\' rel=\'stylesheet\' type=\'text\/css\'>\r\n        <link href=\'http:\/\/fonts.googleapis.com\/css?family=Lato:400,300italic\' rel=\'stylesheet\' type=\'text\/css\'>\r\n        <style type=\"text\/css\">\r\n            body {\r\n                padding-top: 10px;\r\n            }\r\n\r\n   .logo-img {\r\n                height: 50px;\r\n            }\r\n\r\n           .top-buffer { \r\n                margin-top:20px; \r\n            }\r\n\r\n            \/*enter the brand color below*\/\r\n\r\n            .btn-brand {\r\n                background-color: red;\r\n                color: white;\r\n            }\r\n\r\n            .bg {\r\n                margin-top: 20px;\r\n                background-image: url(\"https:\/\/careers.jobvite.com\/video-assets\/send-envelope.png\");\r\n                background-size: cover;\r\n                padding-bottom: 200px;\r\n            }\r\n\r\n            .white-text{\r\n                color: #fff;\r\n            }\r\n\r\n            .centered-text {\r\n                text-align:center\r\n            }   \r\n\r\n            .no-margin{\r\n                margin: 0px;\r\n            }\r\n\r\n            .margin-top {\r\n                margin-top: 20px;\r\n            }\r\n\r\n            .margin-top-large {\r\n                margin-top: 50px;\r\n            }\r\n\r\n            .envelope-from {\r\n                position: relative;\r\n                text-align: left;\r\n                padding: 0px 0px 0px 5px;\r\n            }\r\n\r\n            .img-center {\r\n                margin: auto;\r\n            }\r\n\r\n            .position-wrap {\r\n                width: 70%;\r\n                position: absolute;\r\n                top: 25px;\r\n                left: 115px;\r\n                color: #999999;\r\n                text-align: left;\r\n                text-shadow: 2px 2px 3px rgba(255,255,255, 1)\r\n            }\r\n\r\n            .position-wrap h4 {\r\n                \/*font-family: \'Lato\', sans-serif;*\/\r\n                font-family: \'Rock Salt\', cursive;\r\n                \/*font-weight: 300;*\/\r\n                \/*font-style: italic;*\/\r\n            }\r\n\r\n            .envelope-to {\r\n                padding: 60px 0px 0px 33%;\r\n                text-align: left;\r\n            }\r\n\r\n        <\/style>\r\n    <\/head>\r\n    <body>\r\n        <div class=\"head\">\r\n            <div class=\"container\">\r\n                <img class=\"logo-img top-buffer\" height= \"50px\" src=\""+message.type.logo+"\">\r\n            <\/div>\r\n        <\/div>\r\n        <div class=\"container\">\r\n            <div class=\"row top-buffer\">\r\n                <div class=\"col-md-10 col-md-offset-1 centered-text\">\r\n                    <h1 class=\"no-margin\">Take a deep breath [candidate-first-name], the interview is over!<\/h1>\r\n                    <p class=\"lead margin-top\">Your interveiw for [job-title] has been wrapped up and sent to the [job-company-name] recruiting team. Sit back, relax and we will be in touch shortly.<\/p>\r\n                <\/div>\r\n            <\/div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 col-md-offset-2 centered-text\">\r\n                    <img class=\"img-responsive centered-text img-center\" src=\"https:\/\/careers.jobvite.com\/video-assets\/send-envelope.png\">\r\n                    <div class=\"position-wrap\">\r\n                        <div class=\"row margin-top\">\r\n                            <div class=\"col-md-8\">\r\n                                <h3>From:<\/h3>\r\n                                <h4>[candidate-first-name]<\/h4>\r\n                            <\/div>\r\n                            <div class=\"col-md-3 pull-right\">\r\n                                <img class=\"visible-md visible-lg\" width=\"100%\" src=\""+message.type.logo+"\">\r\n                            <\/div>\r\n                        <\/div>\r\n                        <div class=\"row margin-top\">\r\n                            <div class=\"col-md-7 col-md-offset-3\">\r\n                                <h3>To:<\/h3> \r\n                                <h4>[job-company-name] Recruiting Team<\/h4>\r\n                                \r\n                            <\/div>\r\n                        <\/div>\r\n                    <\/div>\r\n                <\/div>\r\n            <\/div>\r\n        <\/div>\r\n    <\/body>\r\n<\/html>"
        	$(".mce-textbox").val(confirmEnvelope);
        	break;
    }
});