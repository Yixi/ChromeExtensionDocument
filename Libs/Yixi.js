/*this function use for all page UI*/

(function () {
    var Header = document.getElementById('header');
    var h_html = '<div class="header_info">此文档基于google chrome官方文档进行翻译制作，并非官方版本，有关更多的详情请查看<a href="http://blog.liuyixi.com/2013/01/09/chromechajianzhongwenkaifawendangfeiguanfang/" target="_blank">这里</a>。'
                + '支持我们的工作，你可以<a href="https://me.alipay.com/yixi" target="_blank"><img src="Libs/donate-with-alipay.png"></a>我们。</div>'
                + '';
    Header.style.color = "#000";
    Header.innerHTML = h_html;

    var gc_footer = document.getElementById('gc-footer');
    var copyleft = gc_footer.getElementsByTagName('p')[0];
    var copy_html = '本文档翻译自<a href="https://developer.chrome.com/extensions/" target="_blank">Google Chrome Extensions</a>,翻译参考<a href="https://sites.google.com/site/crxdoczh" target="_blank">https://sites.google.com/site/crxdoczh</a>。'
                + '所有内容遵循<a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>,代码示例准遵循<a href="http://code.google.com/google_bsd_license.html" target="_blank">BCD License</a>。';
    copyleft.innerHTML = copy_html;
    gc_footer.getElementsByTagName('p')[1].innerHTML = "";

    var Yixi_footer = document.getElementById('footer_cus');
    var f_html = '<a href="http://liuyixi.com" target="_blank">一兮，生活工作点点滴滴</a>'
    Yixi_footer.innerHTML = f_html;

})();