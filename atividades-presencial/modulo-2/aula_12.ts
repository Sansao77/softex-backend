// Atividades Praticas - Encapsulamento

// Atividade 1

class Funcionario{
    constructor(public nome:string, private salario:number){}

    getSalario(){
        return this.salario;
    }

    setSalario(salario: number){
        if(salario < 1518){
            console.log("O valor colocado não é válido dentro da lei! Coloque um valor igual ou acima de R$ 1518,00");
            return;
        }

        this.salario = salario;
    }

    exibirDados(){
        console.log("\nNome: " + this.nome + "\nSalario: " + this.salario.toFixed(2));
    }
}


// Atividade 2

class Aluno{
    constructor(private nota: number){}

    getNota(): number{
        return this.nota;
    }

    setNota(nota: number): void{
        if(nota < 0 || nota >10){
            console.log("As notas devem ser de 0 a 10");
            return;
        }

        this.nota = nota;
    }
}

// Atividade 3

class Veiculo{
    constructor(private velocidade:number){}

    acelerar(aumentoVelocidade: number): void{
        if((this.velocidade + aumentoVelocidade) > 200){
            console.log("\nA velocidade vai ultrapassar o limite! Não deve chegar a mais de 200 km/h (velocidade atual: " + this.velocidade + ")\n");
            return;
        }

        this.velocidade += aumentoVelocidade;
    }

    freiar(diminuirVelocidade: number): void{
        if((this.velocidade - diminuirVelocidade) < 0){
            console.log("\nO veiculo já está paradondo! Não tem como ter velocidade negativa (velocidade atual: " + this.velocidade + ")\n");
            return;
        }

        this.velocidade -= diminuirVelocidade;
    }
}