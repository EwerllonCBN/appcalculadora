import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import Botao from './Botao';

export default function App() {
  console.disableYellowBox = true;
  //Definindo o estado do primeiro numero
  const [firstNumber, setFirstNumber] = useState(0);
  //Definindo o estado do segundo numero
  const [secondNumber, setSecondNumber] = useState(0);
  //Definindo o estado do sinal dos operadores
  const [sinal, setSinal] = useState('');
  //Definindo
  const [stringCalculo, setStringCalculo] = useState(0);

  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function logicaCalculadora(n) {
    //Se o sinal for vazio, iremos trabalhr no primeiro numero da nossa calculadora

    if (sinal == '') {
      //Usando uma função propria do javaScript que permite converter string para inteiro parseInt()
      //Antes somando uma string numero a outra, sem substitui-la
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      //O setStringCalculo irá permitir consequentemente, mostrar na tela os numeros que estamos digitando.
      setStringCalculo(parseInt(firstNumber.toString() + n.toString()));
    }
    //Se meu segundo numero for igual a zero, e se eu estiver colocando um sinal de operação
    if ((n == '+' || n == '-' || n == '/' || n == '*') && secondNumber == 0) {
      //Adicionamos na string numero o  sinal que for pressionado, e exibimos com o primeiro numero na tela do usuario
      setStringCalculo(firstNumber.toString() + n);
      //O setSinal(n), permite que o sinal fique exibido na tela sem ser excluido apos o usuario adicionar uma nova string numero.
      setSinal(n);
    }
    //Se o meu sinal depois do firstNumber for diferente de vazio, ou seja, se houver sinal,
    //Vamos adicionar uma nova string numero depois dele.
    if (sinal != '') {
      //Logo, o segundo string numero é chamado, juntamente com o N string Numero que o usuario digitar
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      //Depois disso, teremos que unificar, com todos os parametros que ja temos ate então.
      // É justamente o que o StringCalculo irá fazer, unificar o firstNumber + sinal e o segundo numero com os N's numeros que o usuários digitar
      setStringCalculo(
        firstNumber + sinal + parseInt(secondNumber.toString() + n.toString())
      );
    }
    if (n == '=') {
      let resultado = 0;

      if (sinal == '+') {
        resultado = firstNumber + secondNumber;
      } else if (sinal == '-') {
        resultado = firstNumber - secondNumber;
      } else if (sinal == '*') {
        resultado = firstNumber * secondNumber;
      } else if (sinal == '/') {
        resultado = firstNumber / secondNumber;
      }
      //Apos o terminos das condições relacionais, irá aparecer o resultado.
      setStringCalculo(resultado);
      //O sinal recebe um conjunto vazio pra limpar a tela de string numeros
      setSinal('');
      //O primeiro Numero recebe o resultado da operação
      setFirstNumber(resultado);
      //E o segundo numero recebe 0
      setSecondNumber(0);
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(20, 62, 217)' }}>
      <StatusBar hidden />
      <View style={styles.topo}>
        <Text style={{ fontSize: 30, color: 'white' }}>{stringCalculo}</Text>
      </View>

      <View
        style={{ flexDirection: 'row', height: '11.5%', alignItems: 'center' }}
      >
        <TouchableHighlight
          onPress={() => logicaCalculadora('+')}
          style={{
            width: '20%',
            backgroundColor: 'rgb(50,50,50)',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => logicaCalculadora('-')}
          style={{
            width: '20%',
            backgroundColor: 'rgb(50,50,50)',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Text style={{ fontSize: 30, color: 'white' }}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => logicaCalculadora('*')}
          style={{
            width: '20%',
            backgroundColor: 'rgb(50,50,50)',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Text style={{ fontSize: 30, color: 'white' }}>*</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => logicaCalculadora('/')}
          style={{
            width: '20%',
            backgroundColor: 'rgb(50,50,50)',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Text style={{ fontSize: 27, color: 'white' }}>/</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => logicaCalculadora('=')}
          style={{
            width: '20%',
            backgroundColor: 'rgb(50,50,50)',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Text style={{ fontSize: 30, color: 'white' }}>=</Text>
        </TouchableHighlight>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          borderTopColor: 'black',
          borderTopWidth: 2,
          height: '66.8%',
        }}
      >
        {numeros.map(function (e) {
          return (
            <Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    height: '16.6%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
