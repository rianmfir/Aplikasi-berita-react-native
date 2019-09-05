/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
  return (
    <View style = {style.container}>
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
          <Text style = {style.isiBerita}>Isi Berita React Native</Text>
        </View>

        <View style = {style.bg1}>
          <Text style = {style.judulBerita}>Judul Berita</Text>
          <Text style = {style.isiBerita}>Isi Berita eact Native</Text>
        </View>
      </View>
    );
  }
};

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


