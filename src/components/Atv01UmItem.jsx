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
import { useState } from "react";
import { Pressable, View, Text } from "react-native";

export default function Atv01UmItem()
{
  const [Ativ,setAtiv] = useState()
async function carregarAtiv() {
  await fetch(' https://jsonplaceholder.typicode.com/todos/1',
    {method:'GET',}
  )
   
  .then((objeto)=> {return objeto.json()})
  .then((Ativ)=> {console.log(Ativ)
                 
    let status
    if (Ativ.completed === true)
    {
      status = "feito"
    }
    else{
      status = "a fazer"
    }
                 
    const Atividade = <View>
      <Text> id:{Ativ.id}</Text>
      <Text> title:{Ativ.title}</Text>
      <Text> status:{status}</Text>
    </View>
    setAtv(Atividade)
  })
}


  return(
    <View>
      <Pressable onPress={() => carregarAtiv()}>
        <Text>
          Clique abaixo para carregar uma atividade
        </Text>
      </Pressable>
      {Atv}
    </View>
   
  )
}
