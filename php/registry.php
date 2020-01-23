<?php

include "conn.php";


if(isset($_POST['username'])){
    $user=$_POST['username'];
    $result=$conn->query("select * from userregistry where username='$user'");//如果存在结果，注册的用户名存在。
    if($result->fetch_assoc()){//存在
        echo true;//显示1
    }else{
        echo false;//空隙
    }
}


if(isset($_POST['submit'])){
    $username=$_POST['username'];
    $password=$_POST['password'];//后端加密
    $phone=$_POST['phone'];

    $conn->query("insert userregistry values(null,'$username','$password','$phone'");
    header('location:http://192.168.1.102/1912/myproject/dist/login.html');//php页面的跳转。
}