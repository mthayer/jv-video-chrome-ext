// popup.js
// window.onload = function() {
//     document.getElementById("video").onclick = function() {
//         chrome.extension.sendMessage({
//             type: "color-divs"
//         });
//     }
// }

$(document).ready(function(){

    if (localStorage.getItem("logoUrl") != null) {
        $("#logo").val(localStorage.getItem("logoUrl"));
    }

    $("#logo").on('input', function(){
        localStorage.setItem("logoUrl", $(this).val());
    })

	$(document).on('submit', 'form', function(event) {
	    var form = $(this);
	    console.log($('#logo').val());
	    chrome.extension.sendMessage({
            template:  form.find('input').attr('id'),
            url: form.find('input').val(),
            logo: $('#logo').val(),
            whiteText: $("#white-text").is(':checked')
        });
    	event.preventDefault();
    	// window.close()
	});

})