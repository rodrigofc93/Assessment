$('.irEntrega').click(function(){

	//sem a class ativa
	$('entrega').show();
	$('.cardapio').hide();
	//
	
	//usando a class ativa
	//$('.cardapio').removeClass('ativa');
	//$('.entrega').addClass('ativa');
});

$('.irPagamento').click(function(){

	//sem a class ativa
	$('pagamento').show();
	$('entrega').hide();
	//
	
	//usando a class ativa
	//$('.cardapio').removeClass('ativa');
	//$('.entrega').addClass('ativa');
});



$('.qtd').change(function () {
	var total = 0;
	
	
	$('.qtd).each(function () {
	var $esse = $ (this);
	var valor = Number ($esse.parent().find('.valor').html()};
	var qtd = $esse.val();
	total += valor * qtd;
});

	#('.final').html(total);

});
