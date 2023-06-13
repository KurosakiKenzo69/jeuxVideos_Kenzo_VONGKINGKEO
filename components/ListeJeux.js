import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ListeJeux = () => {
    const [jeux, setJeux] = useState([]);

    useEffect(() => {
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


        setJeux(jsonData);
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {jeux.map((jeu, index) => (
                    <View key={index} style={styles.jeuItem}>
                        <Text style={styles.jeuName}>{jeu.name}</Text>
                        <Text style={styles.jeuPrice}>{jeu.price}</Text>
                        <Text style={styles.jeuCategorie}>{jeu.categorie}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        maxHeight: '40%',
        // marginBottom: 100,
    },
    scrollView: {
        paddingBottom: 20,
    },
    jeuItem: {
        marginBottom: 20,
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 8,
    },
    jeuName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    jeuPrice: {
        fontSize: 14,
    },
    jeuCategorie: {
        fontSize: 14,
        fontStyle: 'italic',
    },
});
export default ListeJeux;
