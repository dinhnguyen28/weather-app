import React from 'react'
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.largeText, styles.textStyle]}>Viet Nam</Text>
      <Text style={[styles.largeText, styles.textStyle]}>30</Text>
      <Text style={[styles.smallText, styles.textStyle]}>Sunny</Text>

      <TextInput
        placeholder='Search any city'
        placeholderTextColor='#fff'
        style={styles.textInput}
        clearButtonMode='always'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top'
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
  },
  smallText: {
    fontSize: 18
  },
  largeText: {
    fontSize: 44
  },
  textInput: {
    backgroundColor: '#999',
    color: '#fff',
    width: 300,
    height: 40,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    fontSize: 14
  }
})
