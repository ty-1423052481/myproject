class lunBo {
    constructor() {
        this.$ul = $('#section_1 .section_1_center ul');
        this.pic = $('#section_1 .section_1_center ul img'); //图片
        this.btn = $('#section_1 .btnlist li'); //小按钮
        this.left = $('#section_1 .section_1_center .slider-extra .pre p'); //左侧的按钮
        this.right = $('#section_1 .section_1_center .slider-extra .nex p'); //右侧的按钮
        this.num = 0;
        this.$length = $('#section_1 .section_1_center ul img').length;
        this.timer = null;
    }
    init() {
        // console.log(this.pic)
        let _this = this;
        this.btn.on('mouseover', function() {
            _this.num = $(this).index();
            _this.tabswitch();
            console.log('*****************')
        })
        _this.leftclick();
        _this.rightclick();
        _this.autoplay();
        _this.play();
    }
    tabswitch() {
        this.btn.eq(this.num).addClass('active').siblings().removeClass('active');
        this.pic.removeClass('show');
        this.pic.eq(this.num).addClass('show');
    }

    leftclick() { //点击左测箭头，图片向左滚动
        let _this = this;
        this.left.on('click', function() {
            console.log(1);
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
}


//每日必抢
class meiRi {
    constructor() {
        this.section_2 = $('#section_2 .section_2_all .section_2_left .section_2_left_bottom');
    }
    init() {

        // let _this = this;
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
}


//猜你喜欢

class like {
    constructor() {
        this.like = $('#section_5 .section_5_main .bottom');
    }
    init() {

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
}

//1F手机通讯
class phone {
    constructor() {
        this.right = $('#section_6 .bottom .bottom_right');
    }
    init() {

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
            this.right.html(str);
        })
    }
}

//2F电脑数码
class computer {
    constructor() {
        this.right = $('#section_7 .bottom .bottom_right');
    }
    init() {

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
            this.right.html(str);
        })
    }
}

//3F家用电器
class dianQi {
    constructor() {
        this.right = $('#section_8 .bottom .bottom_right');
    }
    init() {

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
            this.right.html(str);
        })
    }
}


//4F厨房卫浴
class chuFang {
    constructor() {
        this.right = $('#section_9 .bottom .bottom_right');
    }
    init() {

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
            this.right.html(str);
        })
    }
}

//5F国美超市
class shopping {
    constructor() {
        this.right = $('#section_10 .bottom .bottom_right');
    }
    init() {

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
            this.right.html(str);
        })
    }
}


//6F家居家装
class jiaJu {

    constructor() {
        this.right = $('#section_11 .bottom .bottom_right');
    }
    init() {

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
            this.right.html(str);
        })
    }
}


//7F汽车用品
class car {
    constructor() {
        this.right = $('#section_12 .bottom .bottom_right');
    }
    init() {

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
            this.right.html(str);
        })
    }
}


//热销榜
class reXiao {
    constructor() {
        this.right = $('#section_13 .left_bottom');
    }
    init() {

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
            this.right.html(str);
        })
    }
}




export {
    lunBo,
    meiRi,
    like,
    phone,
    computer,
    dianQi,
    chuFang,
    shopping,
    jiaJu,
    car,
    reXiao,
}