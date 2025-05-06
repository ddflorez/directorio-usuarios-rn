// Importamos React y el hook useState para manejar estado
import React, { useState } from 'react';

// Importamos componentes nativos desde React Native
import {
  View,           // Contenedor general
  FlatList,       // Lista optimizada para muchos elementos
  Text,           // Texto en pantalla
  StyleSheet,     // Estilos en formato JS
  SafeAreaView,   // Evita que el contenido se superponga con la barra superior
  Button,         // Botón básico nativo
} from 'react-native';

// Definimos el tipo de dato "Usuario" usando TypeScript
type Usuario = {
  id: string;
  nombre: string;
  email: string;
  ciudad: string;
};

// Creamos una lista de usuarios fija (simulada, como si viniera de una API)
const USUARIOS: Usuario[] = [
  { id: '1', nombre: 'Ana', email: 'ana@mail.com', ciudad: 'Bogotá' },
  { id: '2', nombre: 'Luis', email: 'luis@mail.com', ciudad: 'Medellín' },
  { id: '3', nombre: 'Carlos', email: 'carlos@mail.com', ciudad: 'Cali' },
];

// Componente principal de la aplicación
const App = () => {
  // Estado local que guarda el ID del usuario que tiene los detalles abiertos
  const [verDetalles, setVerDetalles] = useState<string | null>(null);

  return (
    // SafeAreaView protege el contenido de la barra de estado
    <SafeAreaView style={styles.container}>
      {/* Título principal de la app */}
      <Text style={styles.titulo}>Directorio de Usuarios</Text>

      {/* FlatList recorre la lista y renderiza cada usuario */}
      <FlatList
        data={USUARIOS} // Lista de usuarios
        keyExtractor={(item) => item.id} // Clave única por cada usuario
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* Mostramos el nombre del usuario */}
            <Text style={styles.nombre}>{item.nombre}</Text>

            {/* Botón que alterna entre mostrar y ocultar detalles */}
            <Button
              title={verDetalles === item.id ? 'Ocultar' : 'Ver más'}
              onPress={() =>
                setVerDetalles(verDetalles === item.id ? null : item.id)
              }
            />

            {/* Si este usuario está seleccionado, mostramos los detalles */}
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

// Estilos para la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // Usa todo el alto de la pantalla
    paddingHorizontal: 16,     // Margen a los lados
    paddingTop: 60,            // ⬅️ Espacio superior más amplio
    backgroundColor: '#fff',   // Fondo blanco para mejor visualización
  },
  titulo: {
    fontSize: 24,              // Tamaño de letra grande
    fontWeight: 'bold',        // Texto en negrita
    marginBottom: 16,          // Espacio debajo del título
  },
  item: {
    backgroundColor: '#eee',   // Fondo gris claro
    padding: 12,               // Relleno interno
    marginBottom: 10,          // Espacio entre cada usuario
    borderRadius: 8,           // Bordes redondeados
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detalles: {
    marginTop: 8,              // Espacio arriba de los detalles
  },
});

// Exportamos el componente principal
export default App;
