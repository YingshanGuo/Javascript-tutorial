;(function($){

	var Helper = function(){
		this.htmlTemplate = {};
		this.coursewareToolsSettings = {
			"send" 	  	: {text:"发送",icon:"send"},
			"enlarge"   : {text:"放大",icon:"plus",common:true},
			"narrow"    : {text:"缩小",icon:"minus",common:true},
			"recover"   : {text:"复原",icon:"files-o",common:true},
			"directory" : {text:"目录",icon:"th-list"},
			"lastpage"  : {text:"上页",icon:"chevron-left"},
			"nextpage"  : {text:"下页",icon:"chevron-right"},
			"close"		: {text:"关闭",icon:"close"},
			"resend" 	: {text:"重发",icon:"external-link"},
			"progress"  : {text:"查看进度",icon:"calendar-check-o"},
			"return"    : {text:"返回课件",icon:"newspaper-o"},
			"finish"    : {text:"结束练习",icon:"ban"}
		};
		this.helperCacheData = {};
	}

	Helper.prototype = {
		//提示{left:,top:,message:}
		notifyTip : function(options){

			var notifyTip = $('#notify-tip');
			if(notifyTip.length <= 0){
				//新增元素
				var html = "<div  class='notify-tip' style='left:" + options.left + "px;top:" + options.top + "px;'><i class='notice-triangle'><b></b></i>";
				html += "<p> <i class='fa fa-warning'></i><span id='notice-info'>"+options.message+"</span></p></div>";
				var notifyTip = $(html);
				$('body').append(notifyTip);
				$(document).click(function(){
					notifyTip.hide();
				});
			} else {
				notifyTip.find('#notice-info').text(options.message);
			}
			var height  =  notifyTip.height()
			notifyTip.css({'top':options.top - height - 10});
			notifyTip.show();
			
		},

		//验证表单尚未完善
		validForm:function(formObj){
			var helper = this;
			var isReTrue = false;
			var returnResult = true;
			formObj.find('input[data-type]').each(function(){
				if(isReTrue) return;
				var el = $(this);
				switch(el.attr('data-type')){
					case '*':
					//*代表输入任何即可通过,尚未对checkbox 做处理
					if(el.val()==''){
						var offset = el.offset();
						helper.notifyTip({
							message : el.attr('data-error'),
							left	: offset.left,
							top     : offset.top
						});
						returnResult = false;
						isReTrue = true;
						return false;
					}
					break;
				}
			});
			return returnResult;
		},

		browserInit : function(){
			var self = this;
			return ;
			//后退
			javascript:window.history.forward(1);
			//右键
			document.oncontextmenu = function(e){
				return false;
			}
			
			//F5
			window.onkeydown = function(e){
				e = window.event || e;
				var keycode = e.keyCode || e.which;
				console.log(keycode);
				if (keycode == 116){
					// e.returnValue = false;
				}
				return self.banBackSpace();
			}
			window.onkeypress = this.banBackSpace;
			// $(window).keydown(function(e){  console.log(e.keyCode,"---"); if(e.keyCode == 116) return false;});
		},

		banBackSpace : function(e){ 
			var ev = e || window.event;//获取event对象 
			var obj = ev.target || ev.srcElement;//获取事件源 
			var t = obj.type || obj.getAttribute('type');//获取事件源类型 
			//获取作为判断条件的事件类型 
			var vReadOnly = obj.getAttribute('readonly'); 
			var vEnabled = obj.getAttribute('enabled'); 
			//处理null值情况 
			vReadOnly = (vReadOnly == null) ? false : vReadOnly; 
			vEnabled = (vEnabled == null) ? true : vEnabled; 

			//当敲Backspace键时，事件源类型为密码或单行、多行文本的， 
			//并且readonly属性为true或enabled属性为false的，则退格键失效 
			var flag1=(ev.keyCode == 8 && (t=="password" || t=="text" || t=="textarea") 
				&& (vReadOnly==true || vEnabled!=true)) ? true : false; 

			//当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效 
			var flag2=(ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea") ? true : false; 

			//判断 
			if(flag2){ 
				return false; 
			} 
			if(flag1){ 
				return false; 
			}
		},

		//检测是否支持HTML5
		isSupportHtml5:function(){

			if ( !window.applicationCache && $.cookie('html5-tip-iknow') != 1) {
				var html = "<div id='html5-tip' >";
				html += "您的浏览器版本较低,为了不影响您的体验，请点击图标下载使用全新浏览器: <a href='http://www.firefox.com.cn/' target='_blank'><img src='../static/images/exam/f.jpg' title='下载火狐浏览器' alt='下载火狐浏览器' ></a> <a href='http://www.opera.com/zh-cn' target='_blank'> <img src='../static/images/exam/o.jpg' title='下载opera浏览器' alt='下载opera浏览器' ></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='javascript:;' id='html5-tip-iknow'>我知道了，不再提示！</a></div>"
				var htmlDom = $(html);	
				$('body').append(htmlDom);
				htmlDom.find('#html5-tip-iknow').click(function(){
					htmlDom.slideUp("fast");
					$.cookie('html5-tip-iknow',1,{ expires: 2 });
				});
            }
		},

		//拖拽
		dragBox : function(options){
			var options =  options || {};
			var defaultOptions = {
				//需要移动的容器
				boxClass : 'drag-box',
				//可操作区域
				dragClass : 'drag-handle',
				//粘力范围
				padding : 30
			}
			options = $.extend(defaultOptions,options);
			var _move = false;
			var _x,_y,x,y;
			var box = $('.'+options.boxClass);
			var drag = $('.'+options.dragClass);
			var maxY = $('body').height() - box.height();
			var maxX = $('body').width() - box.width();
			drag.mousedown(function(e){
				e.stopPropagation();
				_move = true;
				_x=e.pageX-parseInt(box.offset().left);  
				_y=e.pageY-parseInt(box.offset().top); 
				box.fadeTo(20, 0.8);
				$('html').addClass('user-select-none');
			})
			$(document).mousemove(function(e){
				if(_move){
					x = e.pageX - _x;
					y = e.pageY - _y;
					x = x > maxX ? maxX : x ;
					y = y > maxY ? maxY : y ;
					x = x < 0 ? 0 : x ;
					y = y < 0 ? 0 : y ;
					box.css({top:y,left:x});
				}
			}).mouseup(function(){
				if(!_move) return ;
				_move = false;
				box.fadeTo("fast", 1);
				$('html').removeClass('user-select-none');
				if(y < options.padding){
					y = 0;
				} else if( maxY - y < options.padding) {
					y = maxY
				}

				if(x < options.padding){
					x = 0;
				} else if( maxX - x < options.padding) {
					x = maxX
				}
				box.animate({ left: x, top: y },50);
			});
			
		},

		//解释参数
		parseUrl : function(){
			var info  = {};
			var query = {}
			var search = window.location.search;
			if( search.indexOf('?') != -1){
				var queryStr = search.substring(search.indexOf('?')+1);
				queryStr.split('&').forEach(function(i){
			        var j = i.split('=');
			        query[j[0]]=j[1];
			    });
			}
			info['query'] = query;
			return info;
		},

		//扫描模板
		scanTemplate : function(obj){
			var self = this;
			obj.find("[data-template]").each(function(){
				var templateName = $(this).attr('data-template');
				if(!self.htmlTemplate[templateName]){
					$(this).removeAttr('style');
					$(this).removeAttr('data-template');
					$(this).remove();
					self.htmlTemplate[templateName] = $(this);
				}
			});
		},

		//简单模板变量替换
		templateStrToVar : function(temp,data){
			$.each(data,function(key, val) {
				var reg = new RegExp("{{"+key+"}}","g");
				temp = temp.replace(reg,val);
			});
			return temp;
		},

	

		//课件工具栏-放大
		coursewareTools_enlarge : function(args){
    		this.helperCacheData.scaleVal = this.helperCacheData.scaleVal * 1.25 || 1.25;
    		$('.'+args.displayClass).css({
    			'transform-origin':'0 0',
    			'transform': 'scale('+this.helperCacheData.scaleVal+')',
    			'position': "relative"
    		});
		},

		//课件工具栏-缩小
		coursewareTools_narrow : function(args){

			this.helperCacheData.scaleVal = this.helperCacheData.scaleVal / 1.25 || 1/1.25;
    		$('.'+args.displayClass).css({
    			'transform-origin':'0 0',
    			'transform': 'scale('+this.helperCacheData.scaleVal+')',
    			'position': "relative"
    		});
		},

		//课件工具栏-复原
		coursewareTools_recover : function(args){
			this.helperCacheData.scaleVal = 1;
    		$('.'+args.displayClass).css({
    			'transform-origin':'0 0',
    			'transform': 'scale('+this.helperCacheData.scaleVal+')',
    			'position': "relative"
    		});
		},

		drawingBoardTimeKeeper : function(options){
			var t = 0;
			setInterval(function(){
		        t++;
		        var s = parseInt(t%60);
		        var m = parseInt(t/60);
		        options.mObj.text(m);
		        options.sObj.text(s);
		    },1000);
		}

	}

	window.Helper = new Helper();
	window.Helper.isSupportHtml5();
	//根目录设置
	window.baseUrl  = "/dreamWebEbag/dist";
	// 题目类型
	// 101 单选题
	// 102 多选题
	// 103 不定向选择题
	// 104 判断题
	// 105 填空题
	// 106 排序题
	// 107 连线题
	// 201 主观题
	// 202 问答题
	// 203 诵读题
	// 204 手绘题
	// 205 习作题
	// 301 听力题
	// 302 阅读理解
	// 303 复合题



})(jQuery);