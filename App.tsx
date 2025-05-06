import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native';

type Usuario = {
  id: string;
  nombre: string;
  email: string;
  ciudad: string;
};

const USUARIOS: Usuario[] = [
  { id: '1', nombre: 'Ana', email: 'ana@mail.com', ciudad: 'Bogotá' },
  { id: '2', nombre: 'Luis', email: 'luis@mail.com', ciudad: 'Medellín' },
  { id: '3', nombre: 'Carlos', email: 'carlos@mail.com', ciudad: 'Cali' },
];

const App = () => {
  const [verDetalles, setVerDetalles] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Directorio de Usuarios</Text>
      <FlatList
        data={USUARIOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Button
              title={verDetalles === item.id ? 'Ocultar' : 'Ver más'}
              onPress={() =>
                setVerDetalles(verDetalles === item.id ? null : item.id)
              }
            />
            {verDetalles === item.id && (
              <View style={styles.detalles}>
                <Text>Email: {item.email}</Text>
                <Text>Ciudad: {item.ciudad}</Text>
              </View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#eee',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detalles: {
    marginTop: 8,
  },
});

export default App;
