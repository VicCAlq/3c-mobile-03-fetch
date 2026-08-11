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

import {useState} from "react";
import {View, Pressable, Text, } from "react-native";



const [result, setResult] = useState(<Text>CLiQUE</Text>)



export default function Atv01UmItem() {
async function puxarRequisicao() {
  await fetch(
    'https://jsonplaceholder.typicode.com/todos/1',
    {method: 'GET',}
  )
  .then((result)=>{
    console.log(result)
    return result.json()
  })

  const respostaStatus = ""
  if (result.status == true) {
    const respostaStatus = "feito"
  }
  if (result.status == false) {
     const respostaStatus = "a fazer"
  }

  const dados = <View>
    <Text> id = {result.id} </Text>
    <Text> título = {result.title} </Text>
    <Text> status = {respostaStatus} </Text>
  </View>

setResult(dados)
}


  return (
    <View>
      <View>
        <Pressable onPress={() => puxarRequisicao()}>
          <Text> Clique abaixo para carregar uma atividade </Text>
        </Pressable>
          <View>{result}</View>
      </View>
    </View>
  )
}


export default function AtvUmItem() {
  const [atividade, setAtividade] = useState({});

  function carregar( {
      fetch(https:jsonplaceholder.typicode.com/todos/1)
        then((resposta) => resposta.json())
        then((dados) => setAtividade(dados));
  })

  retun (
<view>
 <Pressable>
   <text>Clique abaixo para carregar uma atividade</text>
  </Pressable>
    {atividade.id} - {atividade.title}:{""}
    {atividade.completed ? "feito" : "fazendu"}
 </view>
  );
}

