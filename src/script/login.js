class userLogin {
    constructor() {
        this.btn = $('.content-bg .main .login-box-wrap .loginBox form .loginButton')[0];
        this.user = $('.content-bg .main .login-box-wrap .loginBox form .username')[0]
        this.pass = $('.content-bg .main .login-box-wrap .loginBox form .password')[0]

    }
    init() {
        $(this.btn).on('click', function() {
            $.ajax({
                type: 'post',
                url: 'http://192.168.1.102/1912/myproject/php/login.php',
                data: {
                    user: $(this.user).val(),
                    pass: $(this.pass).val()
                }
            }).done(function(result) {
                if (result) {
                    location.href = 'index1.html';
                    localStorage.setItem('username', $(this.user).val());
                } else {
                    $(this.pass).val('');
                    alert('用户名或者密码错误');
                }
            })
        })
    }
}

export {
    userLogin,
}