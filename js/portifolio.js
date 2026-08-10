function enviarwhats(event){
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = '5585999758068';

    // 👇 Trocado de aspas simples (') para crase (`)
    const texto = `Olá, me chamo ${nome}, ${mensagem}`;
    const msmFormatada = encodeURIComponent(texto);

    // 👇 Trocado de aspas simples (') para crase (`) aqui também
    const url = `https://wa.me/${telefone}?text=${msmFormatada}`;
    
    window.open(url, '_blank'); 
}