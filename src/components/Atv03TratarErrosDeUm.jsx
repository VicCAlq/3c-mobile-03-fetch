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

import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Atv03TratarErrosDeUm({}){
  const [comments, setComments] = useState(null);

  const estilo = StyleSheet.create({
    view: {
    borderRadius: "10px",
    backgroundColor: "#e67a9a",
    padding: "10px",
    margin: "20px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
  },
  dados: {
    backgroundColor: "rgb(253, 133, 223)",
    padding: "5px",
    borderRadius: "5px",
    margin: "10px",
  },
  })

  async function ReceberComentario(params) {
    fetch(
      'https://jsonplaceholder.typicode.com/comments/20',
      { method: 'GET' }
    ) 
    .then((info)=>{
      if(!info.ok){
         throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      return info.json();
    })
    .then((resultado)=>{
      const postId = resultado.postId;
      const id = resultado.id;
      const email = resultado.email;
      const name = resultado.name;
      const body = resultado.body;

      const mensagem = <View style = {estilo.dados}> 
        <Text>{postId}: {id} - {email}</Text>
          <Text>{name}</Text>
          <Text>{body}</Text>
      </View>

      setComments(mensagem);
    })
    .catch((erro)=>{
      console.log(erro)
    })
  }

  return <View style = {estilo.view}>
    <Pressable onPress={()=>ReceberComentario()} style={estilo.botao}>
      Clique abaixo para carregar uma atividade
    </Pressable>
    {comments}
  </View>
}