// Importamos React y useState
import React, { useState } from 'react';

// Importamos componentes nativos desde React Native
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [tocado, setTocado] = useState(false);

  // Validación muy simple: que tenga @ y .com
  const esValido = email.includes('@') && email.endsWith('.com');
  const mostrarError = tocado && !esValido && email.length > 0;

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Introduce your e-mail</Text>

      {/* Etiqueta de correo */}
      <Text style={[styles.etiqueta, mostrarError && styles.etiquetaError]}>
        {mostrarError ? 'Correo electrónico incorrecto' : 'Correo electrónico'}
      </Text>

      {/* Caja de entrada */}
      <View style={[styles.caja, mostrarError ? styles.cajaError : styles.cajaNormal]}>
        <TextInput
          style={[styles.input, mostrarError && styles.inputError]}
          placeholder="Escribe tu correo electrónico"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
          onBlur={() => setTocado(true)}
        />

        {/* Botón X para limpiar */}
        {email.length > 0 && (
          <TouchableOpacity onPress={() => setEmail('')}>
            <Image
              source={require('./assets/close-icon.png')}
              style={styles.icono}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

// Estilos sencillos pero similares a Figma
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 16,
    marginBottom: 10,
    color: '#7871FF',
  },
  etiqueta: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 4,
  },
  etiquetaError: {
    color: '#B4444B',
  },
  caja: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    height: 60,
    paddingHorizontal: 15,
    borderWidth: 1.5,
  },
  cajaNormal: {
    backgroundColor: '#141534',
    borderColor: '#7871FF',
  },
  cajaError: {
    backgroundColor: '#FBEAEA',
    borderColor: '#B4444B',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  inputError: {
    color: '#B4444B',
  },
  icono: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
});

export default App;
