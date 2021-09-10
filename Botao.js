import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';

export default function Botao(props) {
  return (
    <View
      style={{
        backgroundColor: 'rgb(7, 8, 8)',
        borderColor: 'white',
        borderWidth: 1,
        width: '25%',
        height: '21%',
        borderRadius: 50,
        marginRight: 20,
        marginTop: 21,
        left: 27,
      }}
    >
      <TouchableOpacity
        onPress={() => props.logicaCalculadora(props.numero)}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(20, 35, 94)',
          borderRadius: 50,
        }}
      >
        <Text style={{ fontSize: 30, color: 'white' }}>{props.numero}</Text>
      </TouchableOpacity>
    </View>
  );
}
