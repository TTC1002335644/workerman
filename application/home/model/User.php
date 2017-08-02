<?php
namespace app\home\model;
use think\Model;

class User extends Model{
//	private $user_model;
	public function __construct(){
//		$this->user_model = new User();
	}

	//必须调用
	protected  function initialize(){
		parent::initialize();
	}



	public function getList($data,$limit = ''){
		return $this->where($data)->limit($limit)->select();
	}

}

?>