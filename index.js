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
    // 图书电子书轮播
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
    /*电子书 */
$('.ebooks > li').mouseenter(function(){
    //导航高度高亮切换
    $(this).addClass('active').siblings('li').removeClass('active');
    //获取索引
    var index=$(this).index();
    //内容切换
    $('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
})
/*电子书手风琴 */
$('.ebooks-rank-list > li').mouseenter(function(){
    //所有兄弟：隐藏详情，显示标题
    $(this).siblings().find('.detail').hide();
    $(this).siblings().find('.ebooks-title').show();
    //当前：隐藏标题，显示详情
    $(this).find('.detail').show();
    $(this) .find('.ebooks-title').hide();
})
      // 户外运动轮播
      $("#sport-banner").tyslide({
        boxh:339,//盒子的高度
        w:428,//盒子的宽度
        h:339,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"green",//当前控制按钮的颜色
    });
    //童装轮播
    $("#children-banner").tyslide({
        boxh:339,//盒子的高度
        w:428,//盒子的宽度
        h:339,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:4,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6700",//当前控制按钮的颜色
    });
    //服装轮播
    $("#clothes-banner").tyslide({
        boxh:339,//盒子的高度
        w:428,//盒子的宽度
        h:339,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:4,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6700",//当前控制按钮的颜色
    });

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
     $('.promotion .top ul li').mouseenter(function(){
        //所有兄弟：隐藏详情，显示标题
        $(this).addClass('active').siblings().removeClass('active')
       var index=$(this).index();
       console.log(index)
       console.log( $('.promotion .content .list .inner-box'))
       $('.promotion .content .inner-box').animate({
           'left':-index * 1190
       },300)
          })
          /* 返回顶部 */
//绑定滚动事件
$(document).scroll(function(){
    //获取距离顶部的位置
    var topDistance = $('html,body').scrollTop();
    //判断
    if(topDistance > 500){
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
 // 二维码
$('.qr-code .ticket').hover(function(){
    $('.qr-code div').stop(true).animate({
        left:'-100px'
    })
},function(){
    $('.qr-code div').stop(true).animate({
        left:0
    })
})
// 顶部搜索框交互
$(document).scroll(function(){
    var topDistance = $('html,body').scrollTop();
    if(topDistance>500){
        $('.top-search-box').slideDown(500)
    }else{
        $('.top-search-box').slideUp(500)
    }
})
// 楼梯跳转
$('.floor li').click(function(){
    //获取索引
    var index = $(this).index();
    //选中每一个模块顶部的偏移
    var topOffset = $('.floorBox').eq(index).offset().top;
    //让滚动条滚动到相应位置
    $('html,body').animate({
        scrollTop: topOffset -50
    })
})
})