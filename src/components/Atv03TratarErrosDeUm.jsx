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
import { useState } from "react";
import { Pressable } from "react-native";
import { View,Text } from "react-native-web";

export default function Atv03TratarErrosDeUm()
{
  const [ativ,setAtiv] = useState()
  async function carregarAtiv(){
    await fetch(
      'https://jsonplaceholder.typicode.com/comments/20', {method: 'GET',}
    )
    .then((objeto)=>{
      if (!objeto.ok)
      {
        throw new Error(`Deu erro, Status : ${objeto.status}`);
      }
      return objeto.json()
    })

    .then((ativ)=> {
      const Atividade = <View>
        <Text>{ativ.postId}:{ativ.id}-{ativ.email}</Text>
        <Text>{ativ.name}</Text>
        <Text>{ativ.body}</Text>
      </View>

      setAtv(Atividade)
    })
    .catch(error => {console.log("Error: ", error)})
  }

  return(
    <View>
      <Pressable  onPress={()=>carregarAtiv()}>
        <Text>Clique abaixo para carregar uma atividade</Text>
      </Pressable>
      {ativ}
    </View>
  )
}
