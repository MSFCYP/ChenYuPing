// 全选
// 点击表头的全选框 获取全选框的状态
// 定义三个变量
var $theadInput = $('table thead input[type=checkbox]'); //头
var $bodyInput = $('table tbody input[type=checkbox]'); //身
var $allPriceInput = $('.totalprice input[type=checkbox]'); //结算
$(function() {
	$theadInput.change(function() {
		// 获取选中状态
		var state = $(this).prop('checked')
		$bodyInput.prop('checked', state);
		$allPriceInput.prop('checked', state);
		// 调用计算总价函数
		calcTotalPrice();
		// 结算的选择框保持一致
		$allPriceInput.prop('checked', state);
		$allPriceInput.change(function() {
			var state = $(this).prop('checked');
			$theadInput.prop('checked', state);
			$bodyInput.prop('checked', state);
			// 调用计算总价函数
			calcTotalPrice();
		})
	})
	// 表单中的选中状态,反过来影响全选
	$bodyInput.change(function() {
		//顶一个标杆
		var flag = true;
		//总价
		var totalPrice = 0;
		//循环表格中所有选择框的选中状态
		$bodyInput.each(function(i, input) {
			if (!$(input).prop('checked')) { //只要有一个选择框没有选中,那么状态就变为false
				flag = false;
			}
		})
		//把状态用来改变全选框
		$theadInput.prop('checked', flag)
		$allPriceInput.prop('checked', flag)
		// 调用计算总价函数
		calcTotalPrice();

	})
	//数量的加减
	//jia
	$('.add').on('click', function() {
		//下一个input节点
		var $nextInput = $(this).next();
		//获取输入框的值
		var oldval = parseInt($nextInput.val());
		//自增
		oldval++;
		//重新加值
		$nextInput.val(oldval);
		//小计
		subTotalPrice(oldval, $(this));
		// 调用计算总价函数
		calcTotalPrice();
	})
	//jian
	$('.reduce').on('click', function() {
		//上一个input节点
		var $prevInput = $(this).prev();
		//获取输入框的值
		var oldval = parseInt($prevInput.val());
		//自减
		oldval--;
		oldval = oldval < 1 ? 1 : oldval;
		//重新加值
		$prevInput.val(oldval);
		//小计
		subTotalPrice(oldval, $(this));
		// 调用计算总价函数
		calcTotalPrice();
	})
	//抽取函数
	function subTotalPrice(val, dom) {
		var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());
		//把小计的结果放入dom对应位置
		dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
	}
	//删除
	$('.del').click(function() {
		//删除一整行
		$(this).closest('tr').remove();
		calcGoodsCount();
	})
	//计算总价
	function calcTotalPrice() {
		// 定义一个数量
		var count = 0;
		// 定义变量,保持总价
		var totalPrice = 0;
		// 循环表格中的所有选择框
		$bodyInput.each(function(i, input) {
			if ($(input).prop('checked')) {
				// 自增
				count++;
				// 累加价格
				totalPrice += parseFloat($(input).closest('tr').find('.subprice').text())
			}
		})
		//渲染到总价
		$('.total').text(totalPrice.toFixed(2))
		// 把数量渲染到对应的dom位置
		$('.count').text(count)
	}
	// 全部商品
	function calcGoodsCount(){
	$('.goodscount').text($('table tbody tr').length)
	}
	calcGoodsCount();
	// 删除选中商品
	$('.deleteChecked').on('click',function(){
		// 循环单选框
		$bodyInput.each(function(i,input){
			if($(this).prop('checked')){
				$(this).closest('tr').remove();
			}
		})
		// 计算总价
		calcTotalPrice();
		// 计算商品数量
		calcGoodsCount();
	})
})
