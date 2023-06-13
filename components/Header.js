import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header = (props) => {
return (
<View style={styles.header}>
    <Text style={styles.pseudo}>ichigo_vongk01</Text>
    <Text style={styles.nbJeux}>Nb jeux vidéo : {props.total}</Text>
</View>
);

};

const styles = StyleSheet.create({
header: {
    borderWidth: 1,
    border: 'solid 1px black',
    width: '85%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    top: 10,
    left: 30,
    backgroundColor: '#000',
    borderRadius: 10,

},

pseudo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 80,
    marginLeft: 10,
    color: '#fff',
},
    nbJeux: {
    fontSize: 15,
    fontWeight: 'bold',
        color: '#fff',
    }
});
export default Header;