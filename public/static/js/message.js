var message = {
	success:function(text,url){
		var index = layer.alert(text, {
		  title:'提示内容',
		  icon: 1,
		  skin: 'layer-ext-moon'
		},function(){
			if(url==null){
				// alert(123);
				layer.close(index);
			}else{
				location.href = url;
			}
		});
	},
	error:function(text,url){
		var index = layer.alert(text, {
		  title:'错误内容',
		  icon: 2,
		  skin: 'layer-ext-moon'
		},function(){
			if(url==null){
				layer.close(index);
			}else{
				location.href = url;
			}
		});
	},
	warning:function(text,url){
		var index = layer.alert(text, {
		  title:'警告内容',
		  icon: 3,
		  skin: 'layer-ext-moon'
		},function(){
			if(url==null){
				layer.close(index);
			}else{
				location.href = url;
			}
		});
	},
	tips:function(text){
		layer.msg(text);
	}
	




};