/*
  * ATIVIDADE 04: TRATAR ERROS DE MUITOS
  *
  * Crie e exporte por padrão um componente chamado Atv04TratarErrosDeMuitos, 
  * que deve ter uma <View>, e dentro desta <View> um <Pressable> com o 
  * conteúdo "Clique abaixo para carregar uma atividade", que quando 
  * pressionado fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/comments
  *
  * Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
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
  * Dentro de um elemento <View> abaixo do <Pressable>, cada item será
  * exibido dentro de sua própria <View> com o conteúdo abaixo:
  * <Text>[postId]: [id] - [email]</Text>
  * <Text>[name]</Text>
  * <Text>[body]</Text>
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  */

import { useState } from "react";
import { Pressable, View } from "react-native";

export default function Atv04TratarErrosDeMuitos({}){

  const [comentariosLista, setComentariosLista] = useState(null)
  async function comentarios(params) {
    fetch(
      'https://jsonplaceholder.typicode.com/comments',
      { method: 'GET' }
    )
    .then((info) => {
      if(!info.ok){
         throw new Error(`Erro na requisição! Status: ${resposta.status}`);
      }
      return info.json()
    })
    .then((dados)=>{
      const renderFinal = <View>

      </View>

      setComentariosLista(renderFinal)
    })
    .catch((erro)=>{
      console.log('Erro: ', erro)
    })
  }

  return <View>
    <Pressable>
      Clique abaixo para carregar uma atividade
    </Pressable>
    {comentariosLista}
  </View>
}
