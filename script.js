// Função principal
function verificarAdivinhacao() {
    // Obtém a entrada do usuário
    var palpite = document.getElementById("palpite").value;

    // Limpa o resultado anterior
    document.getElementById('result').innerHTML = '';

    // Verifica se o campo foi preenchido
    if (palpite.trim() === "") {
      document.getElementById('result').innerHTML = 'Campo não preenchido. Por favor, digite seu palpite.';
      return; // Sai da função se o campo não foi preenchido
    }

    // Converte o palpite e os nomes fixos para minúsculas para tornar a comparação insensível a maiúsculas/minúsculas
    var palpiteMinusculo = palpite.toLowerCase();
    var nomesFixos = ["poli", "poliana"];

    // Verifica se o palpite está entre os nomes fixos
    if (nomesFixos.includes(palpiteMinusculo)) {
      // Se estiver correto, exibe mensagem de sucesso
      document.getElementById('result').innerHTML = '😘 É exatamente em quem estou pensando agora. 😘 ';

    // Cria um elemento de imagem e atribui a origem
    var imagem = document.createElement('img');
    imagem.src = './img/Captura de tela de 2023-12-19 16-34-47.png'; // Substitua pelo caminho da sua imagem
    
    var divImagem = document.createElement('div');
    divImagem.appendChild(imagem);

    // Adiciona a div com a imagem abaixo do resultado
    document.getElementById('result').appendChild(divImagem);

    // Adiciona a imagem ao resultado
    document.getElementById('result').appendChild(imagem);
  } else {
    // Se estiver incorreto, exibe mensagem de erro
    document.getElementById('result').innerHTML = 'Ops! Tente novamente. O nome não é esse.';
  }
}