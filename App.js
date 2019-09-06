import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack';

class HomeBerita extends React.Component {
  static navigationOptions = {
    title: 'Berita React Native',
  };

  render() {
    return (
     <View style = {style.container}>
       <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('DetailBerita')}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
        <View style = {style.bg1}>
          <Text style = {style.judulBerita}>Judul Berita</Text>
          <Text style = {style.isiBerita}>Isi Berita React Native</Text>
        </View>
      </TouchableNativeFeedback>

        <View style = {style.bg1}>
          <Text style = {style.judulBerita}>Judul Berita</Text>
          <Text style = {style.isiBerita}>Isi Berita React Native</Text>
        </View>

        <View style = {style.bg1}>
          <Text style = {style.judulBerita}>Judul Berita</Text>
          <Text style = {style.isiBerita}>Isi Berita React Native</Text>
        </View>

        <View style = {style.bg1}>
          <Text style = {style.judulBerita}>Judul Berita</Text>
          <Text style = {style.isiBerita}>Isi Berita eact Native</Text>
        </View>
      </View>
    );
  }  
}

class DetailBerita extends React.Component {
  render(){
    return(
    <View style ={{ flex: 1 }}>
      <Text>Halaman Detail Berita</Text>
    </View>

      );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },

  bg1: {
    height: 100,
    marginHorizontal: 8,
    padding: 8,
    borderColor: '#f0f0f0',
    borderWidth: 0.8,
  },

  judulBerita: {
    fontSize: 24, 
    fontWeight: 'bold', 
  },

  isiBerita: {
    marginTop: 8
  }

});

const AppNavigator = createStackNavigator(
  {
    HomeBerita: HomeBerita,
    DetailBerita: DetailBerita,
  },
  {
    initialRouteName: 'HomeBerita',
  }
);

export default createAppContainer(AppNavigator);