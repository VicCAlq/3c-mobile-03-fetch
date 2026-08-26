/*
  * ATIVIDADE 03: TRATAR ERROS DE UM
  *
  * Crie e exporte por padrão um componente chamado Atv03TratarErrosDeUm, que deve ter
  * uma <View>, e dentro desta <View> um <Pressable> com o conteúdo 
  * "Clique abaixo para carregar uma atividade", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/comments/20
  *
  * Esta URL envia um objeto JSON com as propriedades:
  * postId: número inteiro
  * id: número inteiro
  * name: texto
  * email: texto
  * body: texto
  *
  * Ao receber este conteúdo, você deve tratar ele dentro do primeiro ".then"
  * para verificar se existe um "ok" dentro da resposta, e tratar por erros
  * de requisição após o segundo ".then" dentro de um ".catch".
  *
  * No segundo ".then" o valor recebido deve ser exibido da forma abaixo:
  * Dentro de um elemento <View> abaixo do <Pressable>:
  * <Text>[postId]: [id] - [email]</Text>
  * <Text>[name]</Text>
  * <Text>[body]</Text>
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  */
  
import React, {useState} from "react";
import { View, Text,Pressable} from "react-native";
 
export default function  Atv03MuitosItens() {
  cosnt [atividades, setAtividades] = useStates<any>();
  
   funcion carregarAtividade(){
    fetch("https://jsonplaceholder.typicode.com/comments/20")
      .then(resposta => {
        if (!respsota.ok) {
          throw new Error("erro na requisição");
   }
    retun resposta.json();
  })
    .then(dados => {
     setAtividade(dados);
    })
    .catch(erro => {
      console.log(erro);
    });
 }

 retun ( 
  <View>
    <Pressable onPress={carregarAtividade}>
      <Text>clique abaixo para carregar várias atividades</Text>
      </Pressable>
      <View>
        {atividade.map(atividade => (
          <Text key={atividade.id}>
            {atividade.completed ? "feito" : "a fazer"}
            </Text>
        ))}
      </View>
      </View>
   );
  }