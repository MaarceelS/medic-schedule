document.getElementById('form-consulta').addEventListener('submit', function (e) {
	e.preventDefault();
	let valido = true;

	// Campos
	const nome = document.getElementById('nome');
	const data = document.getElementById('data');
	const hora = document.getElementById('hora');

	// Mensagens
	const erroNome = document.getElementById('erro-nome');
	const erroData = document.getElementById('erro-data');
	const erroHora = document.getElementById('erro-hora');

	// Resetar mensagens e estilos
	[erroNome, erroData, erroHora].forEach((el) => {
		el.textContent = '';
		el.classList.remove('active');
	});

	[nome, data, hora].forEach((el) => el.classList.remove('input-error'));

	// Validações
	if (!nome.value.trim()) {
		erroNome.textContent = 'Por favor, preencha o nome.';
		erroNome.classList.add('active');
		nome.classList.add('input-error');
		valido = false;
	}

	if (!data.value) {
		erroData.textContent = 'Por favor, selecione a data.';
		erroData.classList.add('active');
		data.classList.add('input-error');
		valido = false;
	}

	if (!hora.value) {
		erroHora.textContent = 'Por favor, selecione o horário.';
		erroHora.classList.add('active');
		hora.classList.add('input-error');
		valido = false;
	}

	if (!valido) {
		e.preventDefault();
	}
	if (valido) {
		// Pode simular sucesso com uma mensagem ou resetar o form
		// alert('Consulta agendada com sucesso!');
		this.reset();
		// Opcional: remover bordas de erro e mensagens
		document.querySelectorAll('.error-message').forEach((e) => e.classList.remove('active'));
		document.querySelectorAll('.input-error').forEach((e) => e.classList.remove('input-error'));
	}
});
// Função para remover erro
function limparErro(input, spanErro) {
	input.classList.remove('input-error');
	spanErro.textContent = '';
	spanErro.classList.remove('active');
}

// Adiciona listeners para cada campo
document.getElementById('nome').addEventListener('input', function () {
	limparErro(this, document.getElementById('erro-nome'));
});

document.getElementById('data').addEventListener('change', function () {
	limparErro(this, document.getElementById('erro-data'));
});

document.getElementById('hora').addEventListener('change', function () {
	limparErro(this, document.getElementById('erro-hora'));
});
