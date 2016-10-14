//使用规则：如果要获取transform的属性值，就必须先通过此函数设置transform的属性值
function cssTransform(el,attr,val){
	//判断元素是否存在transform属性，如果没有给其添加一个空对象属性
	if(!el.transform){
		el.transform = {};
	}
	if(arguments.length>2){
		el.transform[attr] = val;
		var sVal = '';
		for(var s in el.transform){
			switch(s){
				case 'rotate':
				case 'shewX':
				case 'shewY':
					sVal+=s+'('+el.transform[s]+'deg) ';
					break;
				case 'translateX':
				case 'translateY':
					sVal+=s+'('+el.transform[s]+'px) ';
					break;
				case 'scaleX':
				case 'scaleY':
				case 'scale':
					sVal+=s+'('+el.transform[s]+') ';
					break;
			}
		}
		el.style.WebkitTransform = el.style.transform = sVal;
	}else{
		return el.transform[attr];
		if(typeof val =='undefined'){
			if(attr == 'scale'||attr =='scaleX'||attr=='scaleY'){
				val = 1;
			}else{
				val = 0;
			}
		}
		return val;
	}
}