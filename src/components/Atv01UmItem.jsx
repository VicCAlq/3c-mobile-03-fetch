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


import { View, Pressable, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

const estilo = StyleSheet.create({
  view: {
    backgroundColor: "rgba(220, 221, 170, 1)",
    padding: "10px",
    borderRadius: "10px",
    margin: "20px",
  },
  botao: {

  }
})

export default function Atv01UmItem({}){
  const [resposta, setResposta] = useState(null)

  async function carregarAtv() {
    await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
      { method: 'GET'}
    )
    .then((info) => {
      console.log(info)
      return info.json();
    })
    .then((resultado) => {
      console.log(resultado)

      const id = resultado.id;
      const title = resultado.title;
      let status = ""
      if(resultado.completed){
        status = "feito"
      } else {
        status = "a fazer"
      }

      const usuario = <View>
        <Text> {id} - {title}: {status} </Text>
      </View>

      setResposta(usuario)
    })
  }
  
  return(
    <View style = {estilo.view}>
      <Pressable onPress={() => carregarAtv()} style = {estilo.botao}>
        <Text> 
          Clique abaixo para carregar uma atividade
        </Text>
      </Pressable>
      {resposta}
    </View>
  )
}
