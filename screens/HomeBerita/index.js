import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';


class HomeBerita extends React.Component {

constructor(props) {
  super(props);
  this.state = { listBerita: null}
}

  static navigationOptions = {
    title: 'Berita React Native',
  };

  renderRow(item) {
    return(
      <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('DetailBerita')}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
        <View style = {style.bg1}>
          <Text style = {style.judulBerita}>Judul Berita</Text>
          <Text style = {style.isiBerita}>Isi Berita React Native</Text>
        </View>
      </TouchableNativeFeedback>
      );
  }

 
  render() {
    return (
      <View style = {style.container}>

      <FlatList
        data={this.this.state..listBerita} //mengambil data di isi dari API
        renderItem={this.renderRow.bind(this)} //lidt yang dipanggil ketita list dibuat atau di render(membuat sesuai jumlah berita yang ada(perulangan))
      />

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

export default HomeBerita;