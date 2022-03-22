function inicia(){

    let personagem = window.prompt("Escolha seu personagem!")

        if(personagem == "1") {

                window.location.href = "../Personagens_CDZ/Hyoga/hyogaFase1.html"

        }else if(personagem == "2") {

                window.location.href = "../Personagens_CDZ/Seiya/saiyaFase1.html"

        }else if(personagem == "3") {

                window.location.href = "../Personagens_CDZ/Shun/shunFase1.html"

        }else {
                alert("Insira o numero respectivo do personagem corretamente!")
                inicia();
            }
}
