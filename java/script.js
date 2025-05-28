function quizAlert(){
    alert("Merci pour votre don! ");
    quizConfirm();
}

function quizConfirm() {
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();
    let date = document.getElementById("date_naissance").value.trim();
    let mail = document.getElementById("mail").value.trim();
    let statut = document.getElementById("statut").value;

    if (nom === "" || prenom === "" || date === "" || mail === "" || statut === "") {
  alert("Veuillez remplir tous les champs !");
  return;}
    }