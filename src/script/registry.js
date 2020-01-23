// import "jquery";

let $user = $('.step-progress form p input[name="username"]')[0];
let $pass = $('.step-progress form p input[name="password"]')[0];
let $phone = $('.step-progress form p input[name="phone"]')[0];

let $span1 = $('.step-progress form .span1')[0];
let $span2 = $('.step-progress form .span2')[0];
let $span3 = $('.step-progress form .span3')[0];

let $form = $('.step-progress form')[0]



class userRegistry {
    constructor() {
        // this.user = $('.step-progress form p input[name="username"]')[0]
        // this.span = $('.step-progress form .span1')[0]
        // this.form = $('.step-progress form')[0]
    }
    init() {
        let $userflag = true;
        let $passflag = true;
        let $phoneflag = true;
        let regName = /(^[a-zA-Z0-9]{2,9}$)|(^[\u2E80-\u9FFF]{2,9}$)/
        let regPass = /^[a-zA-Z0-9]{2,9}$/
        let regPhone = /^1[3578]\d{9}$/
            // $(this.user).on('blur', function() {
            //表单验证
        $($user).on('focus', function() {
            $($span1).html('匹配数字或者字母开头的2-9位中文').css({ "font-size": "12px", "display": "block", "color": "green", "border": "none" });
        });
        $($pass).on('focus', function() {
            $($span2).html('匹配数字或者字母开头的2-9位').css({ "font-size": "12px", "display": "block", "color": "green", "border": "none" });
        });
        $($phone).on('focus', function() {
            $($span3).html('匹配正确的手机号码').css({ "font-size": "12px", "display": "block", "color": "green", "border": "none" });
        });
        $($user).on('change', function() {
            if (regName.test($($user).val())) {
                $($span1).html('√').css({ "display": "block", "color": "green", "border": "none" });
                $userflag = true;
            } else {
                $($span1).html('该用户名格式不正确').css({ "display": "block", "color": "red", "border": "none" });
                $userflag = false;
            }
        });
        $($pass).on('change', function() {
            if (regPass.test($($pass).val())) {
                $($span2).html('√').css({ "display": "block", "color": "green", "border": "none" });
                $passflag = true;
            } else {
                $($span2).html('密码格式不正确').css({ "display": "block", "color": "red", "border": "none" });
                $passflag = false;
            }
        })
        $($phone).on('change', function() {
            if (regPhone.test($($phone).val())) {
                $($span3).html('√').css({ "display": "block", "color": "green", "border": "none" });
                $phoneflag = true;
            } else {
                $($span3).html('密码格式不正确').css({ "display": "block", "color": "red", "border": "none" });
                $phoneflag = false;
            }
        });

        // $($user).on('blur', function() {
        //     $.ajax({
        //         type: 'post',
        //         url: 'http://192.168.1.102/1912/myproject/php/registry.php',
        //         data: {
        //             username: $user.val()
        //         }
        //     }).done(function(result) {
        //         console.log(result)
        //         if (!result) {
        //             $($span1).html('√').css({ "display": "block", "color": "green", "border": "none" });
        //             $userflag = true;
        //         } else {
        //             $($span1).html('该用户名已存在').css({ "display": "block", "color": "red", "border": "none" });
        //             $userflag = false;
        //         }
        //     });
        // });

        $($form).on('submit', function() {
            if ($($user).val() == '') {
                $($span1).html('请输入用户名').css({ "display": "block", "color": "red", "border": "none" });
                $userflag = false;
            }
            if ($($pass).val() == '') {
                $($span2).html('请输入密码').css({ "display": "block", "color": "red", "border": "none" });
                $passflag = false;
            }
            if ($($phone).val() == '') {
                $($span3).html('请输入手机号码').css({ "display": "block", "color": "red", "border": "none" });
                $phoneflag = false;
            }
            if (!$userflag || !$passflag || !$phoneflag) {
                return false;
            }

            $.ajax({
                type: 'post',
                url: 'http://192.168.1.102/1912/myproject/php/registry.php',
                data: {
                    username: $user.val()
                }
            }).done(function(result) {
                console.log(result)
                if (!result) {
                    $($span1).html('√').css({ "display": "block", "color": "green", "border": "none" });
                    $userflag = true;
                } else {
                    $($span1).html('该用户名已存在').css({ "display": "block", "color": "red", "border": "none" });
                    $userflag = false;
                }
            });
        })
    }
}

export {
    userRegistry,
}