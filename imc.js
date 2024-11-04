function imc(){
    const formulario = document.getElementsByName("formulario")[0]
    const formDados = new FormData(formulario)
    const paciente = {
        nome:formDados.get("nome"),
        email:formDados.get("email"),
        dataNasc:formDados.get("nasc"),
        telefone:formDados.get("tel"),
        sexo:document.querySelector('input[name=sexo]:checked').value,
        peso:formDados.get("peso"),
        altura:formDados.get("altura"),
        classificacao:"",
        calcularIMC(){
            if (this.altura > 3) this.altura=this.altura/100
            const imc = this.peso/this.altura**2;
            if (imc < 22 ) this.classificacao = "baixo peso";
            if (imc >= 22 &&  imc < 24,9 ) this.classificacao = "Peso Normal"
            if (imc >= 25 &&  imc < 29,9 ) this.classificacao = "Excesso de Peso"
            if (imc >= 30 &&  imc < 34,9 ) this.classificacao = "Obesidade"
            if (imc >= 35 &&  imc < 80 ) this.classificacao = "Obesidade Severa"
            return imc.toFixed(2);
        
            
            
        },
        
    }
    console.log(paciente)
    console.log(paciente.calcularIMC())
    let resposta=document.getElementById('resposta');
    resposta.innerHTML="Seu IMC é "+paciente.calcularIMC()+". " + "Sua classifição de peso é de  " + paciente.classificacao;
}
