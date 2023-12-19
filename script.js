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
    } else {
      // Se estiver incorreto, exibe mensagem de erro
      document.getElementById('result').innerHTML = 'Ops! Tente novamente. O nome não é esse.';
    }
  }