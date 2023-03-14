import $ from 'jquery';

export default {
    ready(){
        console.info("[mangodoc-top] ready")
        let color = "#2196F3";
        if(window.$mangodoc.themeColor){
          color = window.$mangodoc.themeColor;
        }
        // 获取小火箭元素
        let topEl = $('<div class="to-top"></div>');
        topEl.css("backgroundColor",color);
        topEl.appendTo($("body"));
        const toTop =  topEl.get(0);
        setTimeout(() => {
          // 延迟加载
          // 当页面滚动时，检查是否需要显示小火箭
          let content =  document.getElementById("content");
          $("#content").on('scroll', function() {
            if (content.scrollTop > 100) {
              toTop.classList.add('active');
            } else {
              toTop.classList.remove('active');
            }
          });
          // 当用户单击小火箭时，平滑滚动到页面顶部
          toTop.addEventListener('click', function() {
            content.scrollTo({ top: 0, behavior: 'smooth' });
          });
        }, 2000);  
    }
}