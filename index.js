$(function () {
    $("#banner").tyslide({
        boxh:420,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
    /*图书轮播*/
    $("#ebooks-banner").tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"green",//当前控制按钮的颜色
    });
    $("#sport-banner").tyslide({
        boxh:334,//盒子的高度
        w:429,//盒子的宽度
        h:334,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"white",//普通控制按钮的颜色
        controlsCurrentColor:"gray",//当前控制按钮的颜色
    });
    $("#children-clothes-banner").tyslide({
        boxh:340,//盒子的高度
        w:383,//盒子的宽度
        h:340,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"white",//普通控制按钮的颜色
        controlsCurrentColor:"gray",//当前控制按钮的颜色
    });
    
})

/* 新书列表手风琴效果*/
$('.ebooks .right-box ul > li').mouseenter(function(){
   //所有兄弟：隐藏详情，显示标题
   $(this).siblings().find('.desc').hide();
   $(this).siblings().find('.ebooks-title').show();
   //当前：隐藏标题，显示详情
   $(this).find('.ebooks-title').hide();
   $(this) .find('.desc').show();
     })
// 左右滑块
     $('.promotion .top .title ul li').mouseenter(function(){
        //所有兄弟：隐藏详情，显示标题
        $(this).addClass('active').siblings().removeClass('active')
       var index=$(this).index();
       console.log(index)
       console.log( $('.promotion .promotion-content promotion-list .inner-box'))
       $('.promotion .promotion-content .inner-box').animate({
           'left':-index * 1190
       },300)
          })
          /* 返回顶部 */
//绑定滚动事件
$(document).scroll(function(){
    //获取距离顶部的位置
    var topDistance = $('html,body').scrollTop();
    //判断
    if(topDistsnce > 500){
        $('.backTop').fadeIn();
    } else {
        $('.backTop').fadeOut();
    }
})
//返回顶部功能
$('.backToTop').click(function(){
    $('html,body').animate({
        scrollTop:0

    },300)
})



