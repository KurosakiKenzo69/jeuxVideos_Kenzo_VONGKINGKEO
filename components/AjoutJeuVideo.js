import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const AjoutJeuVideo = () => {
    const [titre, setTitre] = useState('');
    const [tarif, setTarif] = useState('');
    const [categorie, setCategorie] = useState('');

    const handleAjoutJeuVideo = () => {

        setTitre('');
        setTarif('');
        setCategorie('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ajout d'un jeu vidéo</Text>
            <TextInput
                style={styles.input}
                placeholder="Titre"
                value={titre}
                onChangeText={setTitre}
            />
            <TextInput
                style={styles.input}
                placeholder="Tarif"
                value={tarif}
                onChangeText={setTarif}
            />
            <TextInput
                style={styles.input}
                placeholder="Catégorie"
                value={categorie}
                onChangeText={setCategorie}
            />
            <Button title="Ajouter" onPress={handleAjoutJeuVideo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
    },
});

export default AjoutJeuVideo;
