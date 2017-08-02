<?php
namespace app\admin\controller;
use think\Controller;
use think\View;
use think\Db;

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
	 
	 
	
}
