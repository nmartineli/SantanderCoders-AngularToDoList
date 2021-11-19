export class Task {
  id: string;
  name: string;
  text: string;

  constructor(id: string, name: string, text: string) {
    this.id = id;
    this.name = name;
    this.text = text;
  }
}

/* Exemplo de tarefa
Ed: 1
name "Trocar o nome dos servicos do nosso projeto"
text: 'O arquivo de peristence service pdoeria ter um nome melhor. deveríamos mudá-lo para localstorage service
*/
