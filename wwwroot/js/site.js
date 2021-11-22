

$("#Cadastro").submit(function validaForm() {
  if (
    $("#Titulo").val() == null ||
    $("#Autor").val() == "" ||
    $("#Ano").val() == "" ||
    $("#Emprestimo.LivroId").val() == ""
  ) {
    alert("Preencha todos os campos!");
    return false;
  }
});