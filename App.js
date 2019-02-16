import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends React.Component {
  state={
    placeName: ""
  }

changeTextHandler = (value) => {
  this.setState({placeName: value});
}
  render() {
    return (
      <View style={styles.container}>
        < TextInput
          style={{ width: 300,borderColor: 'black', borderWidth:1}}
          placeholder=' Enter Name of place'
          value={this.state.placeName}
          onChangeText={this.changeTextHandler}

        />
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
    justifyContent: 'flex-start',
  },
});
