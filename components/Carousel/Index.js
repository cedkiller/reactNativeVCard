import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const Index = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <View style = {{flexDirection: 'row'}}>
          <View> 
            <Image source={item.image} style={styles.img}/>
          </View>
          <View>
            <Text style={styles.head}>{item.title}</Text>
            <Text style={styles.par}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };

  const data = [
    { title: 'Nicolas Rafael Casilang', description: 'There services are good and fast work recommended to avail again!', image: require('./testimony.jpg')},
    { title: 'Shem De Guzman', description: 'There services are good and fast work recommended to avail again!', image: require('./testimony2.JPG') },
    { title: 'Kimberly Ann Arboleda', description: 'There services are good and fast work recommended to avail again!', image: require('./testimony3.jpg') },
    { title: 'Jhig-Art Olmedo', description: 'There services are good and fast work recommended to avail again!', image: require('./testimonial4.jpg') },
  ];

  return (
    <View style={styles.container}>
      <Carousel
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        data={data}
        renderItem={renderItem}
        loop={true}
        autoplay={true}
        style={styles.div}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  slide: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 100,
    width: 330,
    margin: 15,
    elevation: 10
  },
  
  head: {
    fontSize: 15,
    marginLeft: 15,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },

  par: {
    fontSize: 13,
    marginLeft: 15,
    marginRight: 100,
    marginTop: 5,
    textAlign: 'justify'
  },

  img: {
    height: 70,
    width: 70,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 50,
    borderWidth: 3, borderColor: '#0250a3',
  },

  div: {}
});

export default Index;
