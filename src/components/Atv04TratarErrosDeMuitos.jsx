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
import { Pressable, View, Text } from "react-native";


export default function Atv04TratarErrosDeMuitos()
{
const [itens,setItens] = useState()

async function carregarItens() {
  await fetch('https://jsonplaceholder.typicode.com/comments',{method:'GET',})
  .then(resposta => {
    if(!resposta.ok)
    {
      throw new Error(`Deu erro, Status : ${resposta.status}`);
    }
    return resposta.json()})
  .then(itens => {
    const listaDeItens = <View>
      {itens.map((conteudo)=>{

        return <View>
          <Text>{conteudo.postId}:{conteudo.id} - {conteudo.email}</Text>
          <Text>{conteudo.name}</Text>
          <Text>{conteudo.body}</Text>
        </View> 
      })}
    </View>
    setItens(listaDeItens)
  })
    .catch(error => { console.log("Error: ", error) })
}

return(
  <View>
    <Pressable onPress={() => carregarItens()}>
      <Text>Clique abaixo para carregar várias atividades</Text>
    </Pressable>
    {itens}
  </View>
)
}
