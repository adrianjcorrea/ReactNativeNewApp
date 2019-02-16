import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import ListItem from './src/components/listItem/ListItem.js';

export default class App extends React.Component {
  state={
    placeName: "",
    places: []
  };

changeTextHandler = (value) => {
  this.setState({placeName: value});
}

placeSubmitHandler = () => {
if(this.state.placeName.trim() === ''){
  return;
}
this.setState(prevState => {
  return {
    places: prevState.places.concat(prevState.placeName)
  };
});
};
  render() {
    const placesOutput = this.state.places.map((place, i) =>(
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
       <View style={styles.inputContainer}>
        < TextInput
          style={styles.placeInput}
          placeholder=' Enter Name of place'
          value={this.state.placeName}
          onChangeText={this.changeTextHandler}

        />
        < Button
          title="ADD"
          onPress={this.placeSubmitHandler}
        />
        </View>
        <View>
         {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
  //added padding due to dysplaing under status bar on phone.
    padding: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    //changed to flex startdo to flex box displaying diffent color
    //now flex is to full view again
    justifyContent: 'flex-start'
  },
   inputContainer: {
    width:'100%',
    //ading direction row for my button to be next to text input
      flexDirection:'row',
      //I want a space between my input and button.
      justifyContent:'space-between',
      alignItems:'center'
    },
      placeInput: {
      width:'80%',
      borderColor: 'black',
      borderWidth:1
    },

});
