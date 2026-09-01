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


import { View, Text, Pressable } from 'react-native'
import { useState } from 'react'

export default function Atv04TratarErrosDeMuitos() {

  const [resultado, setResultado] = useState(
    <Text>A atividade aparecerá aqui</Text>
  )

  async function carregar() {

    await fetch(
      'https://jsonplaceholder.typicode.com/comments',
      { method: 'GET' }
    )
    .then((resposta) => {

      if (!resposta.ok) {
        throw new Error(`Erro na requisição! Status: ${resposta.status}`)
      }

      return resposta.json()
    })
    .then((dados) => {

      const lista = dados.map((atividade) => {

        return (
          <View key={atividade.id}>
            <Text>{atividade.postId}: {atividade.id} - {atividade.email}</Text>
            <Text>{atividade.name}</Text>
            <Text>{atividade.body}</Text>
          </View>
        )
      })

      setResultado(
        <View>
          {lista}
        </View>
      )
    })
    .catch((error) => {
      console.log("Erro: ", error)
    })
  }

  return (
    <View>

      <Pressable onPress={() => carregar()}>
        <Text>
          Clique abaixo para carregar uma atividade
        </Text>
      </Pressable>

      {resultado}

    </View>
  )
}
