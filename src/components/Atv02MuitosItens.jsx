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

import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function Atv02MuitosItens({}){

  const [conteudo, setConteudo] = useState("");

  const estilo = StyleSheet.create({
    view: {
    borderRadius: "10px",
    backgroundColor: "#e65ba0",
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

  async function mostrarLista(){
    await fetch(
      'https://jsonplaceholder.typicode.com/todos',
      { method: 'GET'}
    )
    .then((info) => {
      return info.json()
    })
    .then((resultado) => {
      const lista = <View>
          {resultado.map((item) => {
            const id = item.id
            const title = item.title
            let status = ""
            if(item.completed){
              status = "feito"
            } else{
              status = "a fazer"
            }

            return <View style={estilo.dados}> 
              <Text> {'\n'} {id} - {title} : {status} </Text>
            </View>
          })}
      </View>

      setConteudo(lista)
    })
  }

  return (
    <View style={estilo.view}>
      <Pressable onPress={() => mostrarLista()} style={estilo.botao}>
        Clique abaixo para carregar várias atividades
      </Pressable>
      <View>
        {conteudo}
      </View>
    </View>
  )
}