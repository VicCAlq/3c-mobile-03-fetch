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

  const [resultado, setResultado] = useState(
    <Text>A atividade aparecerá aqui</Text>
  )

  async function carregarAtividade() {

    await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
      { method: 'GET' }
    )
    .then((resposta) => {
      return resposta.json()
    })
    .then((resultado) => {

      let status = "a fazer"

      if (resultado.completed == true) {
        status = "feito"
      }

      const atividade = (
        <Text>
          {resultado.id} - {resultado.title}: {status}
        </Text>
      )

      setResultado(atividade)
    })
  }

  return (
    <View>

      <Pressable onPress={() => carregarAtividade()}>
        <Text>
          Clique abaixo para carregar uma atividade
        </Text>
      </Pressable>

      {resultado}

    </View>
  )
}
