
/**

 * 增加悬浮窗口插件
 * Powered By Mr Zhou
 * QQ 627266138
 * E-mail 627266138qq.com
 * Date 2013-06-04
 * Dependence jquery-1.7.2.min.js
 **/

(function ($) {
  //调用方法 $('.xxx').showLevel({levelTitle:"1111",levelContent:"333333333333"});
  $.fn.LevelDefaults = { //默认参数
      levelTitle: '123123',//浮动标题
      levelContent:'123123', //内容
      top: 0,//上浮动距离
      left:0,//左浮动距离
      margin:'0 0;', //边距
      wrapWidth: 'auto', //浮动层宽度
      isBorder: true, //浮动层边框 true 为存在，
      borderColor:'ccc',// 边框颜色
      color: '000', //字体颜色
	  isshowtitle:true //是否显示头部 true 显示头部 ，false 不显示头
  };
  $.extendLevel = function (level,opt) { //obj 元素对象，opt 参数对象
    var g = {  //公共方法， 外部可调用
      //初始化
      init: function () {
        var html; //初始化浮动层
		var title_html ="";
		//g.level.css({"position": "relative"}); //给当前对象添加相对定位
		if(opt.isshowtitle){ //判断是否显示头部
			title_html = '<a class="level_title">' + opt.levelTitle + '<br /></a>';
		}
        html =  $('<div class="level" style="display:none; background:#fff;">'
					+ title_html
                    + '<div class="level_content">' + opt.levelContent + '</div>'
                + '</div>');
        $(g.level).append(html); //将元素加入到g.level对象中
        var border = opt.isBorder ? '1px' : '0'; //判断边框是否存在
        if (opt.top != 0) $('.level', g.level).css({ 'top': opt.top }); //判断是否上浮
        if (opt.left != 0) $('.level', g.level).css({ 'left': opt.left });   //判断是否左浮

        $('.level',g.level).css({'margin': opt.margin, 'text-align': 'center', 'width': opt.wrapWidth, 'border': '' + border + ' solid  #' + opt.borderColor + '', color: '#' + opt.color + '', 'position': 'absolute','display':'block' });
        $('.level_title', g.level).css({ 'padding': '4px 6px', 'text-align':'center','width':opt.wrapWidth });
        $('.level_content', g.level).css({'word-wrap': 'break-word','word-break': 'normal','word-break':'break-all','padding':'10px','width': opt.wrapWidth == 'auto' ? 'auto' : opt.wrapWidth - 4, 'display':'block'});
        g.level.hover(//鼠标悬浮
            function () {
			  //g.init();
              g.level.children('.level').css({ 'display': 'block' });},
            function () {
              g.level.children('.level').css({ 'display': 'none' });
			  //g.level.children('.level').remove();
            });
      }
    };
    g.level = $(level);
    g.init();
    return g;
  }
  $.fn.showLevel = function (options) {
    if (this.length == 0) return; //判断对象是否存在
    this.each(function () {
      if (this.usedLevel) return;
      var opt = $.extend({}, $.fn.LevelDefaults, options); //合并已赋值参数
      this.usedLevel = $.extendLevel(this, opt);
    });
  }
})(jQuery);

function checkMsg(){
	var vp = $('#phone').val();
	if(vp=='' || vp==null){
		// C.alert.tips({'content':'请填写联系电话'});
		return false;
	}
	
	if(vp.length<8){
		// C.alert.tips({'content':'请填写正确的联系电话'});
		return false;
	}
}