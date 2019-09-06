import React from 'react';
import { View, Text, Image } from 'react-native';


class DetailBerita extends React.Component {
  render(){
    return(
    <View style ={{ flex: 1, padding: 8 }}>
      <Text style ={{ fontSize: 32, fontWeight: 'bold' }}>Judul Berita</Text>
      <Image style ={{ width: 300,  borderColor: 'black', borderWidth: 0.5 }}
          source={require('../../assets/beritaReact.jpg')}
        />
      <Text style ={{ marginTop: 8 }}>Isi Berita React</Text>
    </View>

      );
  }
}

export default DetailBerita;