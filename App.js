import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Picker, Text } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  _generateCombination() {
    Alert.alert(this.state.optionSelected);
  }
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { label:'Al', value:'Al' },
        { label:'AS', value:'AS' },
        { label:'BL', value:'BL' },
        { label:'BS', value:'BS' },
        { label:'CL', value:'CL' },
        { label:'CS', value:'CS' },
        { label:'ZL', value:'ZL' },
        { label:'ZS', value:'ZS' },
        { label:'ML', value:'ML' },
        { label:'MS', value:'MS' }, 
      ],
      duples: [
        { label:'XAUUSD', value:'XAUUSD' },
        { label:'USDMXN', value:'USDMXN' },
        { label:'GBPUSD', value:'GBPUSD' },
        { label:'NZDCHF', value:'NZDCHF' },
        { label:'EURJPY', value:'EURJPY' },
        { label:'USDCAD', value:'USDCAD' },
      ],
      dupleSelected: '',
      optionSelected: '',
    };
    this._generateCombination = this._generateCombination.bind(this);
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Text>Seleccione el tipo de movimiento del comparador</Text>
            <Picker selectedValue={this.state.optionSelected} onValueChange={(opt) => this.setState({ optionSelected: opt})}>
                {this.state.options.map(option => {
                  return <Picker.Item  label={option.label} value={option.value} key={option.value}/>
                })}
            </Picker>
        </View>
       
        <View style={styles.buttonContainer}>
            <Text>Seleccione par a operar</Text>
            <Picker selectedValue={this.state.dupleSelected} onValueChange={(duple) => this.setState({ dupleSelected: duple})}>
                {this.state.duples.map(duple => {
                  return <Picker.Item  label={duple.label} value={duple.value} key={duple.value}/>
                })}
            </Picker>
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._generateCombination}
            title="Generar!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

