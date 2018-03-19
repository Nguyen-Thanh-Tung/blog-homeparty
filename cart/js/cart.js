$j(document).ready(function () {
	var number_click = 1;
	$j(".checkout-cart-index .product-cart-actions input.qty").on("change paste", function() {
		$j(this).closest('.product-cart-actions').find('.btn-update-overload').show();
	});
	$j(".qty-down-fixed-onclick").click(function() {
		var val_input = $j(this).closest('.product-cart-actions').find('input.qty').val();
		val_input = parseInt(val_input);
		if(val_input <= number_click){
			val_input = number_click;
		}
		else{
			val_input = val_input - number_click;
		}
		$j(this).closest('.product-cart-actions').find('input.qty').val(val_input);
		$j(this).closest('.product-cart-actions').find('.btn-update-overload').show();
		return false;
	});
	$j(".qty-up-fixed-onclick").click(function() {
		var val_input = $j(this).closest('.product-cart-actions').find('input.qty').val();
		val_input = parseInt(val_input);
		val_input = val_input + number_click;
		$j(this).closest('.product-cart-actions').find('input.qty').val(val_input);
		$j(this).closest('.product-cart-actions').find('.btn-update-overload').show();
		return false;
	});
});
