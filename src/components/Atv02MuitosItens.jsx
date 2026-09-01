/*
  * ATIVIDADE 02: MUITOS ITENS
  *
  * Crie e exporte por padrão um componente chamado Atv02MuitosItens, que deve ter
  * uma <View>, e dentro desta <View> um <Pressable> com o conteúdo 
  * "Clique abaixo para carregar várias atividades", que quando pressionado
  * fará uma requisição usando "fetch" para a URL abaixo:
  *
  * https://jsonplaceholder.typicode.com/todos
  *
  * Esta URL envia uma lista de objetos JSON, cada um com as propriedades:
  * userId: número inteiro
  * id: número inteiro
  * title: texto
  * completed: booleano
  *
  * Ao receber este conteúdo, ele deve ser exibido da seguinte forma
  * dentro de uma <View> abaixo do <Pressable>, onde cada item será
  * um <Text> dentro dessa view:
  * [id] - [title]: [status]
  * Os colchetes indicam que deve se tratar de uma variável, e não
  * do texto dentro deles.
  * O valor de "status" deve ser "feito" se completed for true, 
  * ou "a fazer" se completed for false
  */




import { View, Text, Pressable } from 'react-native'
import { useState } from 'react'

export default function Atv02MuitosItens() {

  const [resultado, setResultado] = useState(
    <Text>A atividade vai aparecer aqui atividade</Text>
  )

  async function carregar() {

    await fetch(
      'https://jsonplaceholder.typicode.com/todos',
      { method: 'GET' }
    )
    .then((resposta) => {
      return resposta.json()
    })
    .then((dados) => {

      const lista = dados.map((atividade) => {

        let status = "a fazer"

        if (atividade.completed == true) {
          status = "feito"
        }

        return (
          <Text key={atividade.id}>
            {atividade.id} - {atividade.title}: {status}
          </Text>
        )
      })

      setResultado(
        <View>
          {lista}
        </View>
      )
    })
  }

  return (
    <View>
      <Pressable onPress={() => carregar()}>
        <Text>Clique abaixo para carregar várias atividades</Text>
      </Pressable>

      {resultado}
    </View>
  )
}


