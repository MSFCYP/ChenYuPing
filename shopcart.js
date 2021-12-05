// 全选
// 点击表头的全选框 获取全选框的状态
// 定义三个变量
var $theadInput = $('table thead input[type=checkbox]');//头
var $bodyInput = $('table tbody input[type=checkbox]');//身
var $allPriceInput = $('.totalprice input[type=checkbox]');//结算
$(function(){
    $theadInput.change(function(){
        // 获取选中状态
        var state = $(this).prop('checked')
        $bodyInput.prop('checked',state);
        $allPriceInput.prop('checked',state);
        // 结算的选择框保持一致
        $allPriceInput.prop('checked',state);
        $allPriceInput.change(function(){
            var state = $(this).prop('checked');
            $theadInput.prop('checked',state);
            $bodyInput.prop('checked',state);
        })
    })
    // 表单中的选中状态,反过来影响全选
    $bodyInput.change(function(){
        //顶一个标杆
        var flag = true;
        //总价
        var totalPrice = 0;
        //循环表格中所有选择框的选中状态
        $bodyInput.each(function(i,input){
            if(!$(input).prop('checked')){//只要有一个选择框没有选中,那么状态就变为false
                flag = false;
            }else{
                totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
            }
        })
        //把状态用来改变全选框
        $theadInput.prop('checked',flag)
        $allPriceInput.prop('checked',flag)
        //渲染到总价
        $('.total').text(totalPrice.toFixed(2))
    })
    //数量的加减
    //jia
    $('.add').on('click',function(){
        //下一个input节点
        var $nextInput = $(this).next();
        //获取输入框的值
        var oldval = parseInt($nextInput.val());
        //自增
        oldval++;
        //重新加值
        $nextInput.val(oldval);
         //小计
       subTotalPrice(oldval,$(this));
    })
    //jian
    $('.reduce').on('click',function(){
         //上一个input节点
         var $prevInput = $(this).prev();
         //获取输入框的值
         var oldval = parseInt($prevInput.val());
         //自增
         oldval--;
        //  if(oldval < 1){
        //      oldval = 1
        //  }
        oldval = oldval < 1 ? 1 : oldval;
         //重新加值
         $prevInput.val(oldval);
        //小计
       subTotalPrice(oldval,$(this));
    })
    //抽取函数
    function subTotalPrice(val,dom){
        var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());
        //把小计的结果放入dom对应位置
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
    }
    //删除
    $('.del').click(function(){
        //删除一整行
        $(this).closest('tr').remove();
    })
    //计算总价
    $bodyInput.each(function(i,input){
        var totalPrice = 0;
        //判断选中
        if($(input).prop('checked')){
            totalPrice += parseFloat($(this).closest('tr').find('.subpeice').text());
        }
        //渲染到总价位置

    })
})