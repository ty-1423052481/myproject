class lunBo {
    constructor() {
        // this.news = document.querySelector('#section_1 .section_1_center ul');
        // this.btns = document.querySelectorAll('#section_1 .section_1_center .btnlist li ');
        // this.pics = document.querySelectorAll('#section_1 .section_1_center ul img');
        this.$ul = $('#section_1 .section_1_center ul');
        this.picli = $('#section_1 .section_1_center ul img'); //图片
        this.btnli = $('#section_1 .section_1_center .btnlist li'); //小按钮
        this.left = $('#section_1 .section_1_center .slider-extra .pre p'); //左侧的按钮
        this.right = $('#section_1 .section_1_center .slider-extra .nex p'); //右侧的按钮
        this.num = 0;
        this.$piclilength = this.picli.size();
        this.timer = null;
    }
    init() {
        // console.log(this.picli)
        // console.log(this);
        let _this = this;
        this.btnli.on('mouseover', function() {
            _this.num = $(this).index();
            _this.tabswitch();

        });
        _this.leftclick();
        _this.rightclick();
        _this.autoplay();
        _this.play();
    }
    tabswitch() {
        // console.log(this.num);
        this.btnli.eq(this.num).addClass('active').siblings().removeClass('active');
        this.picli.removeClass('show');
        this.picli.eq(this.num).addClass('show');
    }

    leftclick() { //点击左测箭头，图片向左滚动
        let _this = this;
        this.left.on('click', function() {
            // console.log(1);
            _this.num--;
            if (_this.num < 0) {
                _this.num = _this.$piclilength - 1;
            }
            _this.tabswitch();
        });
    }
    rightclick() { //点击右侧箭头，图片向右侧滚动
        let _this = this;
        this.right.on('click', function() {
            _this.num++;
            if (_this.num >= _this.$piclilength) {
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
                // str += "</ul>"
                // this.like.html(str);
            });
            str += "</ul>"
            this.like.html(str);
        })
    }
}

define([], function() {
    return {
        init: function() {
            new lunBo().init();
            new meiRi().init();
            new like().init();
        }
    }
});