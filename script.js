function cadastrarAnimal(){
    const novoAnimal = {
        name: "Totó",
        idade: "12",
        raca: "cachorro"
        }
    const animalList = document.getElementById("#lista");
    const listItem = document.createElement('li');
    listItem.textContent = `Novo: ${novoAnimal.name} (${novoAnimal.idade} anos) - ${novoAnimal.raca}`;
    animalList.appendChild(listItem);
}

fetch("https://663c040417145c4d8c34f87f.mockapi.io/Animal")
    .then(response => response.json())
    .then(data => {
        document.querySelector("#lista").innerHTML = "id: " +data[40].id + " nome: " +data[40].name + " idade: " +data[40].idade + " raca: " +data[40].raca
    })
    .catch(error => console.log("Erro: " + error));
