import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/Header';
import Filtre from './components/Filtre';
import ListeJeux from './components/ListeJeux';
import AjoutJeuVideo from "./components/AjoutJeuVideo";

const App = () => {
    const [jeux, setJeux] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filtreCategorie, setFiltreCategorie] = useState('Tous');

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


        const allCategories = ['Tous', ...new Set(jsonData.map((jeu) => jeu.categorie))];
        setCategories(allCategories);
        setJeux(jsonData);
    }, []);

    const handleFilterChange = (value) => {
        setFiltreCategorie(value);
    };

    const filteredJeux = filtreCategorie === 'Tous' ? jeux : jeux.filter((jeu) => jeu.categorie === filtreCategorie);

    return (
        <View style={styles.appContainer}>
            <Header total={jeux.length}></Header>
            <View style={styles.contentContainer}>
                <Filtre categories={categories} onFilterChange={handleFilterChange} />
                <ListeJeux jeux={filteredJeux} />
                <AjoutJeuVideo></AjoutJeuVideo>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
