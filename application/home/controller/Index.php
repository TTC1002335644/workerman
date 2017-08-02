<?php
namespace app\home\controller;
use think\Controller;
use think\View;
use think\Db;
use app\home\model\User;
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/07/13
 * Time: 10:46 AM
 */
class Index extends Controller{

	 public function index(){
	    return $this->fetch('index');
	 }


	public function StrToBin(){

        $str = "AgAIAAAAAAA=";
        $arr=preg_split('/(?<!^)(?!$)/u', $str);

        foreach($arr as &$v){
        	$temp = unpack('H*', $v); $v = base_convert($temp[1], 16, 2);
        	unset($temp);
        }

        $res = join('',$arr);
        var_dump($res);
        var_dump($str);
        return $res;
    }

    public function BinToStr(){
    	$Bin = '10000011100111100000110010011000001100000110000011000001100000110000011000001111101';
    	$Bin = 'php二次开发：www.php2.cc';
    	$arr = explode(' ',$Bin);
        foreach($arr as &$v){
            $v = pack("H".strlen(base_convert($v, 2, 16)), base_convert($v, 2, 16));
        }
//    	foreach($arr as $k => &$v){
//    		$v = pack("H".strlen(base_convert($v,2,16)),base_convert($v,2,16));
//    	}
    	$res = join('',$arr);
    	var_dump($res);
    	return $res;
    }

    
	
}
