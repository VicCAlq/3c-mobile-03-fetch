/*
  * ATIVIDADE 01: UM ITEM
  *
  * Crie e exporte por padrão um componente chamado Atv01UmItem, que deve ter
  * uma <View>, e dentro desta <View> um <Pressable> com o conteúdo 
  * "Clique abaixo para carregar uma atividade", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos/1
  *
  * Esta URL envia um objeto JSON com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de um elemento <Text> abaixo do <Pressable>:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true, 
  * ou "a fazer" se completed for false
  */

import { View, Text, Pressable } from 'react-native'
import { useState } from 'react'

export default function Atv01UmItem() {

  const [atividade, setAtividade] = useState(
    <Text>Nenhuma atividade carregada</Text>
  )

  async function buscarAtividade() {

    await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
      { method: 'GET' }
    )
    .then((resposta) => {
      return resposta.json()
    })
    .then((dados) => {

      let situacao = "a fazer"

      if (dados.completed == true) {
        situacao = "feito"
      }

      setAtividade(
        <Text>
          {dados.id} - {dados.title}: {situacao}
        </Text>
      )
    })
  }

  return (
    <View>
      <Pressable onPress={() => buscarAtividade()}>
        <Text>Clique abaixo para carregar uma atividade</Text>
      </Pressable>

      {atividade}
    </View>
  )
}
