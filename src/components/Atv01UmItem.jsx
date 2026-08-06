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
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'


export default function Atv01UmItem() {


  // Variável que vai armazenar a lista recebida
  const [resultado, setResultado] = useState(<Text>O usuário aparecerá aqui no lugar deste texto</Text>)


  // Função que vai carregar a lista do endereço listado.
  async function carregarUsuario() {
    // 1ª etapa: Enviar requisição
    // "fetch" é a função que envia uma mensagem para um endereço.
    await fetch(
      // Este é o endereço a ser acessado
      'https://jsonplaceholder.typicode.com/todos/1',
      // Aqui definimos o método da requisição
      { method: 'GET', }
    )
    // 2ª etapa: Receber e tratar a resposta
    .then((resposta) => {
      // Se a resposta não tiver um valor "ok", anunciamos um erro
      // Se não der erro, convertemos o resultado para JavaScript
      return resposta.json()
    })
    // 3ª etapa: Usar o resultado
    .then((resultado) => {
      const usuario = <View>
        <Text>[userId]: {resultado.userID}</Text>
        <Text>[title]: {resultado.title}</Text>
        <Text>[completed]: {resultado.completed}</Text>
      </View>


      // Jogamos o valor da lista de itens a serem exibidos para
      // a variável de estado "resultado"
      setResultado(usuario)
    })
    // Se houverem erros mais severos, estes são tratados na função de
    // "catch" abaixo:
    .catch(error => {
      console.log("Erro: ", error)
    })
  }


  // Parte visual do componente
  return(
    <View>
      <Text>
        Carregue o usuário abaixo:
      </Text>
      <Pressable onPress={() => carregarUsuario()}>
        <Text>Clique abaixo para carregar uma atividade</Text>
      </Pressable>
      {resultado} 
      [id]-[title]: [status]
      if (completed == true) {
      then((status) =>{('feito')})
      }
      else ((status) = {('a fazer')})
    </View>
  )
 
}


