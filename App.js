import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/placeInput/PlaceInput.js";
import PlaceList from "./src/components/placeList/PlaceList.js";

export default class App extends Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  placeDeletedHandler = (index) => {
      this.setState(prevState =>{
        return{
      places: prevState.places.filter((place, i) => {
        //true for Item stays on the Array false if it dosent.
        return i !== index;
      })
    };
   });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //added padding due to dysplaing under status bar on phone.
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
