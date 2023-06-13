import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header = () => {
return (
<View style={styles.header}>
    <Text style={styles.pseudo}>ichigo_vongk01</Text>
    <Text style={styles.nbJeux}>Nb jeux vidéo : </Text>
</View>
);

};

const styles = StyleSheet.create({
header: {
    borderWidth: 1,
    border: 'solid 1px black',
    width: '85%',
    bottom: 300,
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
},

pseudo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 80,
    marginLeft: 10,
},
    nbJeux: {
    fontSize: 15,
    fontWeight: 'bold',
    }
});
export default Header;