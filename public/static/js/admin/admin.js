/*左侧菜单栏的点击事件*/
//这个数组主要使用判断是否已经打开该页面
var tag_id = ['0'];
// message.error('登录成功','https://www.baidu.com');

$('p.fumenu,p.zcd').click(function(){
	if(tag_id.length>9){
		message.warning('标签页不能够打开多于9个,请关闭多余的标签页',null);
		return false;
	}
	var fumenu_data_id = $(this).attr('data-id');
	var res = check_exist(fumenu_data_id);
	//如果为真，就不添加
	if(res == true){
		var fumenu_name = $(this).text();
		var data_id = $(this).attr('data-id');
		$('.close').hide();
		var html_str = '<li class="l-select" data-id="'+data_id+'"><a href="#" style="padding:0 25px;">'+fumenu_name+'</a><span class="close"></span></li>';
		$('#tab_page').append(html_str);
		openPage(data_id);
	}
});

//判断是否存在该标签
function check_exist(fumenu_data_id){
	var res = $.inArray(fumenu_data_id,tag_id);
	if(res == '-1'){
		tag_id.push(fumenu_data_id);
		return true;
	}else{
		return false;
	}
}



/*下拉图标的点击事件*/
$('img.xiala').click(function(e){
//	e.stopPropagation();
});

/*标签页的特效事件*/
$(document).on('click','.l-select',function(){
	$('.close').hide();
	$(this).children('.close').show();
	$('.l-tab-content').hide();
	console.log(123456);
	var data_id = $(this).attr('data-id');
	$('.content_page_'+data_id).children('.l-tab-content').show();
});

/*关闭标签页*/
$(document).on('click','.close',function(e){
	e.stopPropagation();
	var data_id = $(this).parent('.l-select').attr('data-id');
	var target_page = "content_page_"+data_id;
	$(this).parent('.l-select').remove();
	$('.'+target_page).remove();
	//也要删除数组所存的data-id
	for(var i = 0; i < tag_id.length; i++){
        if(tag_id[i] == data_id){
        	tag_id.splice(i,1);
        	if(i==0){
        		console.log($('.content_page_'+tag_id[i]+' div.l-tab-content'));
        		var target_class = '.content_page_'+tag_id[i];
        		console.log(target_class);
        		$('.content_page_'+tag_id[i]+' .l-tab-content').show();
        		$('.l-select[data-id="'+tag_id[i]+'"] .close').show();
        	}else{
        		$('.content_page_'+tag_id[i-1]+' .l-tab-content').show();
        		$('.l-select[data-id="'+tag_id[i-1]+'"] .close').show();
        	}
        	break;
        }
    }

});



//判断打开哪个页面
function openPage(data_id){
	$('.l-tab-content').hide();
	var target_class = "content_page_"+data_id;
	var data = parseInt(data_id);
//	var target_page = '<div class="l-tab-content '+target_class+'"></div>';
	var target_page = '<div class="'+target_class+'"></div>';
	$('.page-teb').append(target_page);
	
	switch(data){
		case 0:
			$("."+target_class).load("../public/static/content/home.html");
			break;
		//库房管理，第一栏	
		case 1:
			$("."+target_class).load("../public/static/content/ck-kffp.html");
			break;	
		case 2:
			$("."+target_class).load("../public/static/content/ck-rkd.html");
			break;
		case 3:
			$("."+target_class).load("../public/static/content/ck-rkd.html");
			break;	
		case 4:
			$("."+target_class).load("../public/static/content/ck-rkd.html");
			break;
		
		//产品管理，第二栏	
		case 5:
			$("."+target_class).load("../public/static/content/ckgl.html");
			break;	
		case 6:
			break;	
		case 7:
			break;	
		case 8:
			break;
		
		//订单管理，第三栏
		case 9:
			$("."+target_class).load("../public/static/content/dd-ddgl.html");
			break;	
		case 10:
			break;
		case 11:
			break;	
		case 12:
			break;
		case 13:
			break;
		case 14:
			break;	
		case 15:
			break;
		case 16:
			break;
		
		//财务管理，第四栏
		case 17:
			break;
		
		case 18:
			$("."+target_class).load("../public/static/content/cj-ckd.html");
			break;	
		case 19:
			break;
		
		//客户管理，第五栏
		case 20:
			$("."+target_class).load("../public/static/content/kh-khgl.html");
			break;	
		case 21:
			break;	
		case 22:
			break;	
		case 23:
			break;
		case 24:
			break;
		
		//员工管理，第六栏
		case 25:
			$("."+target_class).load("../public/static/content/yg-czrz.html");
			break;
		case 26:
			$("."+target_class).load("../public/static/content/yg-jbxx.html");
			break;	
		case 27:
			$("."+target_class).load("../public/static/content/yg-jsgl.html");
			break;	
		case 28:
			break;	
		case 29:
			break;
	}

}

