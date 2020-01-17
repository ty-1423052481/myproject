class lunBo {
    constructor() {
        this.section = $('#section_1');
        this.$ul = $('#section_1 .section_1_center ul');
        this.pic = $('#section_1 .section_1_center ul img'); //图片
        this.btn = $('#section_1 .btnlist li'); //小按钮
        this.left = $('#section_1 .section_1_center .slider-extra .pre p'); //左侧的按钮
        this.right = $('#section_1 .section_1_center .slider-extra .nex p'); //右侧的按钮
        this.num = 0;
        this.$length = $('#section_1 .section_1_center ul img').length;
        this.timer = null;

        //数据渲染
        this.section_2 = $('#section_2 .section_2_all .section_2_left .section_2_left_bottom');
        this.like = $('#section_5 .section_5_main .bottom');
        this.random_right = $('#section_6 .bottom .bottom_right');
        this.random_computer = $('#section_7 .bottom .bottom_right');
        this.random_dianQi = $('#section_8 .bottom .bottom_right');
        this.random_chuFang = $('#section_9 .bottom .bottom_right');
        this.random_shopping = $('#section_10 .bottom .bottom_right');
        this.random_jiaJu = $('#section_11 .bottom .bottom_right');
        this.random_car = $('#section_12 .bottom .bottom_right');
        this.random_reXiao = $('#section_13 .left_bottom');

        //楼梯效果
        this.louti = $('#elevator .louti li');


    }
    init() {
        let _this = this;
        this.btn.on('mouseover', function() {
            _this.num = $(this).index();
            _this.tabswitch();
        })
        this.leftclick();
        this.rightclick();
        this.autoplay();
        this.play();
        this.meiRi();
        this.love();
        this.phone();
        this.computer();
        this.dianQi();
        this.chuFang();
        this.shopping();
        this.jiaJu();
        this.car();
        this.reXiao();
        this.lou();
    }
    tabswitch() {
        this.btn.eq(this.num).addClass('active').siblings().removeClass('active');
        this.pic.removeClass('show');
        this.pic.eq(this.num).addClass('show');
    }

    leftclick() { //点击左测箭头，图片向左滚动

        let _this = this;
        this.left.on('click', function() {
            _this.num--;
            if (_this.num < 0) {
                _this.num = _this.$length - 1;
            }
            _this.tabswitch();
        });
    }
    rightclick() { //点击右侧箭头，图片向右侧滚动
        let _this = this;
        this.right.on('click', function() {
            _this.num++;
            if (_this.num >= _this.$length) {
                _this.num = 0;
            }
            _this.tabswitch();
        });
    }
    autoplay() { //自动播放
        let _this = this;
        this.timer = setInterval(function() {
            _this.right.click();
        }, 2000);
    }

    play() { //鼠标移入移出
        this.$ul.hover(() => {
            clearInterval(this.timer);
        }, () => {
            this.autoplay();
        });
    }


    //数据渲染--每日必抢
    meiRi() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "";
            $.each($data, ($index, $value) => {
                if ($index < 4) {
                    str += `
                <a>
                    <img src="${$value.url}">
                    <span class="span1">${$value.price1}</span>
                    <span class="span2">${$value.price2}</span>
                    <p>${$value.title}</p>
                </a>
                `;

                } else {
                    return false;
                }

            });
            this.section_2.html(str);
        })
    }

    //猜你喜欢
    love() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "<ul>";
            $.each($data, ($index, $value) => {
                if ($index < 5) {
                    str += `
                    <li>
                    <a>
                        <img src="${$value.url}">
                        <span class="span1">${$value.price1}</span>
                        <p>${$value.title}</p>
                    </a>
                    </li>
                `;

                } else {
                    return false;
                }
            });
            str += "</ul>"
            this.like.html(str);
        })
    }

    //1F手机通讯
    phone() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "<ul>";
            $.each($data, ($index, $value) => {
                if ($index < 10) {
                    str += `
                    <li>
                    <a>
                        <img src="${$value.url}">
                        <p>${$value.title}</p>
                        <span>￥${$value.price1}</span>
                    </a>
                    </li>
                `;

                } else {
                    return false;
                }
            });
            str += "</ul>"
            this.random_right.html(str);
        })
    }

    //2F电脑数码
    computer() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "<ul>";
            $.each($data, ($index, $value) => {
                if ($index < 10) {
                    str += `
                    <li>
                    <a>
                        <img src="${$value.url}">
                        <p>${$value.title}</p>
                        <span>￥${$value.price1}</span>
                    </a>
                    </li>
                `;

                } else {
                    return false;
                }
            });
            str += "</ul>"
                //this.computer_right.html(str);

            this.random_computer.html(str);

        })
    }

    //3F家用电器
    dianQi() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "<ul>";
            $.each($data, ($index, $value) => {
                if ($index < 10) {
                    str += `
                    <li>
                    <a>
                        <img src="${$value.url}">
                        <p>${$value.title}</p>
                        <span>￥${$value.price1}</span>
                    </a>
                    </li>
                `;

                } else {
                    return false;
                }
            });
            str += "</ul>"
            this.random_dianQi.html(str);
        })

    }

    //4F厨房卫浴
    chuFang() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "<ul>";
            $.each($data, ($index, $value) => {
                if ($index < 10) {
                    str += `
                    <li>
                    <a>
                        <img src="${$value.url}">
                        <p>${$value.title}</p>
                        <span>￥${$value.price1}</span>
                    </a>
                    </li>
                `;

                } else {
                    return false;
                }
            });
            str += "</ul>"
            this.random_chuFang.html(str);
        })
    }

    //5F国美超市
    shopping() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "<ul>";
            $.each($data, ($index, $value) => {
                if ($index < 10) {
                    str += `
                    <li>
                    <a>
                        <img src="${$value.url}">
                        <p>${$value.title}</p>
                        <span>￥${$value.price1}</span>
                    </a>
                    </li>
                `;

                } else {
                    return false;
                }
            });
            str += "</ul>"
            this.random_shopping.html(str);
        })
    }

    //6F家居家装
    jiaJu() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "<ul>";
            $.each($data, ($index, $value) => {
                if ($index < 10) {
                    str += `
                    <li>
                    <a>
                        <img src="${$value.url}">
                        <p>${$value.title}</p>
                        <span>￥${$value.price1}</span>
                    </a>
                    </li>
                `;

                } else {
                    return false;
                }
            });
            str += "</ul>"
            this.random_jiaJu.html(str);
        })
    }


    //7F汽车用品
    car() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "<ul>";
            $.each($data, ($index, $value) => {
                if ($index < 10) {
                    str += `
                    <li>
                    <a>
                        <img src="${$value.url}">
                        <p>${$value.title}</p>
                        <span>￥${$value.price1}</span>
                    </a>
                    </li>
                `;

                } else {
                    return false;
                }
            });
            str += "</ul>"
            this.random_car.html(str);
        })
    }

    //热销榜
    reXiao() {
        $.ajax({
            url: 'http://10.31.152.30/1912/myproject/php/guomei.php',
            dataType: 'json'
        }).done(($data) => {
            let str = "<ul>";
            $.each($data, ($index, $value) => {
                if ($index < 5) {
                    str += `
                    <li>
                    <a>
                        <img src="${$value.url}">
                        <p>${$value.title}</p>
                        <span>￥${$value.price1}</span>
                    </a>
                    </li>
                `;

                } else {
                    return false;
                }
            });
            str += "</ul>"
            this.random_reXiao.html(str);
        })
    }


    //楼梯效果
    lou() {
        this.louti.on('click', function() { //获取楼梯，给楼梯添加点击事件
            $(this).addClass('current').siblings().removeClass('current'); //给点击的li添加类名，并且给它的其他兄弟元素删除类名
            let $top = $('#product .louceng').eq($(this).index()).offset().top; //获取所点击的楼梯相对应的楼层的top值，
            $('html').animate({
                    scrollTop: $top
                })
                // console.log($top)
        });

        //回到顶部
        $('#elevator .fl_goto .flTop').on('click', function() {
            $('html').animate({
                    scrollTop: 0
                }),
                $('#elevator').css('display', 'none');
        });

        //触发滚轮事件
        let $top = $(window).scrollTop();
        if ($top >= 2000) {
            $('#elevator').show();
        } else {
            $('elevator').hide();
        }
        $(window).on('scroll', function() {
            $top = $(window).scrollTop();
            if ($top >= 2000 && $top <= 6710) {
                $('#elevator').show();
            } else {
                $('#elevator').hide();
            }

            $('#product .louceng').each(function(index, element) {
                let $loucengTop = $('#product .louceng').eq(index).offset().top + $('#product .louceng').eq(index).height / 2;
                if ($loucengTop > $top) {
                    this.louti.removeClass('current');
                    this.louti.eq(index).addClass('current');
                }
            })
        })

    }
}

export {
    lunBo,
}