
    const formulario = document.getElementById("formAjuda");
    const campoMensagem = document.getElementById("pedidodeajuda");
    const mensagemRecebida = document.getElementById("mensagemRecebida");
    const modalElemento = document.getElementById("modalAjuda");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const mensagem = campoMensagem.value.trim();

        if (mensagem === "") {
    const toastElemento = document.getElementById("toastAviso");
    const toast = bootstrap.Toast.getOrCreateInstance(toastElemento);

    toast.show();
    campoMensagem.focus();
    return;
}

        mensagemRecebida.textContent = mensagem;

        const modal = bootstrap.Modal.getOrCreateInstance(modalElemento);
        modal.show();

        formulario.reset();
    });
