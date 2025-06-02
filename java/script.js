function confirmerDon() {
    const confirmation = confirm("Vous êtes sur le point d'effectuer une transaction. Voulez-vous continuer ?");
    if (confirmation) {
        alert("Merci pour votre don !");
        window.location.href = "accueil.html";
        return false;
    } else {
        alert("Vous allez être redirigé vers la page d'accueil !");
        window.location.href = "accueil.html";
        return false;
    }
}
