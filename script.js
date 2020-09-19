$(document).ready(() => {
	$('#documentacao').on('click', () => {
		$('#pagina').load('documentacao.html');
	});

	$('#suporte').on('click', () => {
		$('#pagina').load('suporte.html');
	});

	//Ajax
	$('#competencia').on('change', e => {
		const competencia = $(e.target).val();

		$.ajax({
			type: 'GET',
			url: 'app.php',
			data: `competencia=${competencia}`,
			dataType: 'json',
			success: dados => {
				$('#numeroVendas').html(dados.numeroVendas);
				$('#totalVendas').html(dados.totalVendas);
				$('#clientesAtivos').html(dados.clientesAtivos);
				$('#clientesInativos').html(dados.clientesInativos);
				$('#totalReclamacoes').html(dados.totalReclamacoes);
				$('#totalElogios').html(dados.totalElogios);
				$('#totalSugestoes').html(dados.totalSugestoes);
				$('#totalDespesas').html(dados.totalDespesas);
			},
			error: erro => { console.log(erro) }
		});
	});
});