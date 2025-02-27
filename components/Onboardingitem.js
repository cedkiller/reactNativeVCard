import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

export default Onboardingitem = ({item}) => {
  const { width } = useWindowDimensions();
  
  return (
    <View style = {styles.container}>
      <View style = {styles.div}>
        <Image source={item.image} style={styles.image} />

        <View style = {{ flex: 0.3 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  div: {
    height: 370,
    width: 330,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    marginTop: 15,
  },

  image: {
    height: 170,
    width: 300,
    marginTop: 15,
    marginLeft: 15,
  },

  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },

  description: {
    fontWeight: '300',
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 30,
  }
});