import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Filtre = () => {
    const [selectedValue, setSelectedValue] = useState('Tous');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./datas/data.json'); // Remplacez le chemin d'accès selon votre structure de dossier
                const jsonData = await response.json();

                const uniqueCategories = [...new Set(jsonData.map(item => item.categorie))];

                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Erreur lors du chargement des données JSON:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.filtre}>
            <Text style={styles.filtreText}>Filtrer par</Text>
            <Picker
                style={styles.picker}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Tous" value="Tous" />
                {categories.map((category) => (
                    <Picker.Item label={category} value={category} key={category} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    filtre: {
        flexDirection: 'row',
        alignItems: 'center', // Aligner les éléments verticalement
        marginBottom: 10,
        position: 'relative',
        bottom: 300,
        marginRight: 150,
        marginTop: 10,
    },
    filtreText: {
        fontSize: 15,
        marginRight: 10,
    },
    picker: {
        borderWidth: 1,
        borderColor: 'black',
        width: 125,
    },
});

export default Filtre;
