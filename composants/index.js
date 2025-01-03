import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function Acceuil() {
  // Fonction pour gérer la sélection de catégories
  const categorieselect = (category) => {
    
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Liste des catégories */}
      <Text style={styles.subtitle}>Catégories de Livres</Text>
      <ScrollView horizontal style={styles.categoryList}>
        <Button title="Manga" onPress={() => categorieselect('Manga')} />
        <Button title="Actions" onPress={() => categorieselect('Actions')} />
        <Button title="Science-Fiction" onPress={() => categorieselect('Science-Fiction')} />
        <Button title="Romance" onPress={() => categorieselect('Romance')} />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  categoryList: {
    flexDirection: 'row',
    marginBottom: 30,
  }
});
