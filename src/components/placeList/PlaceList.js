import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../listItem/ListItem.js';

const placeList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem
          key={i}
          placeName={place}
          //Deletind Item when pressed.
          onItemPressed={() => props.onItemDeleted(i)}
        />
      ));
    return(
        <View style={styles.listContainer}>{placesOutput}</View>
      );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;
