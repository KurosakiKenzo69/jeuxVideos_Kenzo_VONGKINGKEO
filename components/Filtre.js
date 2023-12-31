import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Filtre = () => {
    const [selectedValue, setSelectedValue] = useState('Tous');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Récupérer les données du JSON (remplacez cette partie par votre propre logique de récupération des données)
        const jsonData = [
            {
                "name": "Medal of Honor",
                "price": "10€",
                "categorie": "FPS",
                "id": 23124
            },
            {
                "name": "Street Fighter 2",
                "price": "20€",
                "categorie": "Combat",
                "id": 12349
            },
            {
                "name": "Call of Duty",
                "price": "30€",
                "categorie": "FPS",
                "id": 549762
            },
            {
                "name": "NBA2K5",
                "price": "5€",
                "categorie": "Sport",
                "id": 549763
            },
            {
                "name": "God Of War 2018",
                "price": "25€",
                "categorie": "Action-Aventure",
                "id": 549764
            },
            {
                "name": "The Legend of Zelda : The Wind Walker",
                "price": "35€",
                "categorie": "Action-Aventure",
                "id": 549765
            },
            {
                "name": "Horizon : Forbidden West",
                "price": "40€",
                "categorie": "Action-Aventure",
                "id": 549766
            },
            {
                "name": "Forza Horizon 5",
                "price": "45€",
                "categorie": "Voiture",
                "id": 549767
            },
            {
                "name": "The Last Of Us",
                "price": "55€",
                "categorie": "Survival horror",
                "id": 549768
            },
            {
                "name": "Red Dead Redemption II",
                "price": "18€",
                "categorie": "Action-Aventure",
                "id": 549769
            }
        ]

        // Créer un tableau pour stocker les catégories uniques
        const uniqueCategories = [];

        // Parcourir le JSON et ajouter les catégories uniques au tableau
        jsonData.forEach((item) => {
            if (!uniqueCategories.includes(item.categorie)) {
                uniqueCategories.push(item.categorie);
            }
        });

        // Mettre à jour le tableau des catégories
        setCategories(uniqueCategories);
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
            alignItems: 'center',
            marginBottom: 10,
            position: 'absolute',
            top: 10,
            left: 18,
            marginTop: 10,
        },
        filtreText: {
            fontSize: 15,
            marginRight: 10,
        },
        picker: {
            borderWidth: 1,
            borderColor: 'black',
            width: 145,
        },
    });

export default Filtre;
