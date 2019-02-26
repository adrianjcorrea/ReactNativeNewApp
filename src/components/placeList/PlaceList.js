import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';

import ListItem from '../listItem/ListItem.js';

const placeList = props => {
{/* No Longer will manually map array but will use FlatList instead
 const placesOutput = props.places.map((place, i) => ( */}     
    return (
        < FlatList style={styles.listContainer}
        data={props.places}
        renderItem={(info) => (
          <ListItem
          placeName={info.item.value}
          //Deletind Item when pressed.
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        /> 
        )}/>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;
