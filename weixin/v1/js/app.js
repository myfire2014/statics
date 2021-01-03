$(function () {

	/* 微信提示 */
	var btn = document.getElementById('btn');
	var clipboard = new ClipboardJS(btn);
	clipboard.on('success', function (e) {
		$('#weixin').slideDown().delay(1500).slideUp(500);
	});
	clipboard.on('error', function (e) {
		$('#weixin').slideDown().delay(1500).slideUp(500);
	});



	var clipboard_zx = new ClipboardJS('#btn_wx_zx');
	clipboard_zx.on('success', function (e) {
		$('#weixin_zx').slideDown().delay(1500).slideUp(500);
	});
	clipboard_zx.on('error', function (e) {
		$('#weixin_zx').slideDown().delay(1500).slideUp(500);
	});
})


/* 微信弹窗 */
function dkcf() {
	//alert(111)
	$('#wxnr').fadeIn("fast");
}

/* 微信弹窗 */
function gbcf() {
	$('#wxnr').fadeOut("fast");
}


function open_zx() {//alert(111)
	$('#wxnr_zx').fadeIn("fast");
}

/* 微信弹窗 */
function close_zx() {
	$('#wxnr_zx').fadeOut("fast");
}