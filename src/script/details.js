import "jquery";

class details {
    constructor() {
        this.sid = location.search.substring(1).split('=')[1];
        this.$title = $('.goodsinfo .wrap .wrap-right .hgroup span')[0]
        this.$price = $('.goodsinfo .wrap .wrap-right .prd-price-l')[0]
        this.$list_ul = $('.goodsinfo .wrap .wrap-left .pic-list .pic-small ul')[0]
        this.$btn = $('.goodsinfo .wrap .wrap-right .prd-buttons #addCart')[0]
        this.count = $('.goodsinfo .wrap .wrap-right .prd-buttons .count-wrapper input')[0]



        this.$spic = $('.goodsinfo .wrap .wrap-left .pic-big img')[0]
        this.$sf = $('.goodsinfo .wrap .wrap-left .pic-big .sf')[0]
        this.$bpic = $('.goodsinfo .wrap .bf .bpic')[0]
        this.$bf = $('.goodsinfo .wrap .bf')[0]
        this.$wrap = $('.goodsinfo .wrap')[0]

        // this.ulmove = $('.goodsinfo .wrap .wrap-left .pic-list .pic-small ul li')[0]
    }
    init() {
        $.ajax({
            url: 'http://192.168.1.102/1912/myproject/php/getsid.php',
            data: {
                sid: this.sid
            },
            dataType: 'json'
        }).done((objdata) => {
            $(this.$spic).attr('src', objdata.url);
            $(this.$title).html(objdata.title);
            $(this.$title).css({ "font-size": "16px", "color": "red" });
            $(this.$price).html('￥' + objdata.price1);
            $(this.$price).css({ "font-size": "16px", "color": "red" });

            let piclist = objdata.urls.split(',');
            let str = "";
            $.each(piclist, function(index, value) {
                str += `
                    <li>
                        <a href="javascript:;"><img src="${value}"></a>
                    </li>
                `
            });
            $(this.$list_ul).html(str)
        })

        //放大镜效果
        $(this.$spic).hover(() => {
            $(this.$sf).css('visibility', 'visible');
            $(this.$bf).css('visibility', 'visible')

            $(this.$sf).css({
                width: $(this.$spic).outerWidth() * $(this.$bf).outerWidth() / $(this.$bpic).outerWidth(),
                height: $(this.spic).outerHeight() * $(this.bf).outerHeight() / $(this.bpic).outerHeight()
            })

            this.bili = $(this.bpic).outerWidth() / $(this.spic).outerWidth();

            $(this.$spic).on('mouseover', function(e) {
                let $l = e.pageX - $(this.wrap).offset('left') - $(this.sf).width() / 2;
                let $t = e.pageY - $(this.wrap).offset('top') - $(this.sf).height() / 2;
                if ($l < 0) {
                    $l = 0;
                } else if ($l >= $(this.spic).outerWidth() - $(this.sf).outerWidth()) {
                    $l = $(this.spic).outerWidth() - $(this.sf).outerWidth() - 2;
                }
                if ($t < 0) {
                    $t = 0;
                } else if ($t >= $(this.spic).outerHeight() - $(this.sf).outerHeight()) {
                    $t = $(this.spic).outerHeight() - $(this.sf).outerHeight() - 2;
                }
                $(this.sf).css({
                    left: $l,
                    top: $t
                });
                $(this.bpic).css({
                    left: -$l * this.bili,
                    top: -$t * this.bili
                });
            });
        }, () => {
            $(this.$sf).css('visibility', 'hidden');
            $(this.$bf).css('visibility', 'hidden')
        })


        $(this.$list_ul).on('click', 'li', function() {
            let $imgurl = $(this).find('li a img').attr('src');
            $(this.$spic).find('img').attr('src', $imgurl);
            $(this.$bpic).attr('src', $imgurl);
        });

        this.addcart();
    }

    addcart() {
        let goodsnum = []; //商品的数量
        let goodsid = []; //商品的编号
        //cartnum  cartsid:本地存储的key值
        function getcookie() {
            if (localStorage.getItem('cartnum') && localStorage.getItem('cartsid')) {
                goodsnum = localStorage.getItem('cartnum').split(',');
                goodsid = localStorage.getItem('cartsid').split(',');
            }
        }

        $(this.$btn).on('click', () => {
            getcookie();
            if ($.inArray(this.sid, goodsid) === -1) {
                goodsid.push(this.sid);
                localStorage.setItem('cartsid', goodsid);
                goodsnum.push($(this.count).attr('value'));
                localStorage.setItem('cartnum', goodsnum);
            } else {
                let index = $.inArray(this.sid, goodsid);
                let newnum = parseInt(goodsnum[index]) + parseInt($(this.count).val());
                goodsnum[index] = newnum;
                localStorage.setItem('cartnum', goodsnum);
            }
        })
    }
}
export {
    details,
}