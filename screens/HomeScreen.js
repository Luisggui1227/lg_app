import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  const [meters, setMeters] = useState('');
  const [feet, setFeet] = useState('');
  const [cm, setCm] = useState('');
  const [km, setKm] = useState('');

  const convertToFeet = () => {
    const metersValue = parseFloat(meters);
    if (!isNaN(metersValue)) {
      setFeet((metersValue * 3.28084).toFixed(2));
    } else {
      setFeet('');
    }
  };

  const convertToCm = () => {
    const metersValue = parseFloat(meters);
    if (!isNaN(metersValue)) {
      setCm((metersValue * 100).toFixed(2));
    } else {
      setCm('');
    }
  };

  const convertToKm = () => {
    const metersValue = parseFloat(meters);
    if (!isNaN(metersValue)) {
      setKm((metersValue / 1000).toFixed(3));
    } else {
      setKm('');
    }
  };

  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Bem-vindo à Tela Inicial!</Text>

      <TextInput
        style={HomeStyles.input}
        placeholder="Metros"
        value={meters}
        onChangeText={setMeters}
        keyboardType="numeric"
      />

      <TouchableOpacity style={HomeStyles.button} onPress={convertToFeet}>
        <Text style={HomeStyles.buttonText}>Converter para Pés</Text>
      </TouchableOpacity>

      <TouchableOpacity style={HomeStyles.button} onPress={convertToCm}>
        <Text style={HomeStyles.buttonText}>Converter para Centímetros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={HomeStyles.button} onPress={convertToKm}>
        <Text style={HomeStyles.buttonText}>Converter para Quilômetros</Text>
      </TouchableOpacity>

      {feet ? <Text style={HomeStyles.result}>Resultado: {feet} pés</Text> : null}
      {cm ? <Text style={HomeStyles.result}>Resultado: {cm} cm</Text> : null}
      {km ? <Text style={HomeStyles.result}>Resultado: {km} km</Text> : null}

      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Sobre')}>
        <Text style={HomeStyles.buttonText}>Ir para Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

