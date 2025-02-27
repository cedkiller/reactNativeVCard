import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity, Button, Pressable, TextInput, Platform, Alert, Linking } from 'react-native';
import {  Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import DateTimePicker from "@react-native-community/datetimepicker";
import Onboarding from './components/Onboarding';
import Index from './components/Carousel/Index';
import MapView, {Marker} from 'react-native-maps';
import Contacts from 'react-native-contacts';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Enter a date ');
  const [text2, setText2] = useState('Enter a time');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const phone = "09515949774"
  const [mapRegion, setMapRegion] = useState({
    latitude: 14.6629131,
    longitude: 120.9927599,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = ' ' + tempDate.getHours() + ' : ' + tempDate.getMinutes(); 
    setText(fDate);
    setText2(fTime);
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  function onTouch (){
    Alert.alert("Congratulation!", "You have been set an appointment", [{ text: 'OK' }]);
  }

  function onContact (){
    // setName("");
    // setEmail("");
    // setContact("");
    // setMessage("");
    Alert.alert("Thank you!", "Name: " + name + "\nEmail: " + email + "\nContact: " + contact + "\nMessage: " + message, [{ text: 'OK' }]);
  }

  function requestContactsPermission() {
    let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  }
  else  {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
  .then(supported => {
    if (!supported) {
      Alert.alert('Phone number is not available');
    } else {
      return Linking.openURL(phoneNumber);
    }
  })
}

  return (
    <ScrollView>
      
      <View>
        <Image source = {require('./assets/bg.jpg')} style = {styles.img}/>
        <Text style = {styles.head}>Cedrick Jasper R. Sarabia</Text>
        <Text style = {styles.head2}>Software Engineer</Text>
      </View>

        <Image source = {require('./assets/dp.jpg')} style = {styles.img2}/>

        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity style = {styles.shadow}>
          <Image source = {require('./assets/fb.png')} style = {styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.shadow}>
            <Image source = {require('./assets/insta.png')} style = {styles.icon2}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.shadow}>
            <Image source = {require('./assets/X.png')} style = {styles.icon3}/>
          </TouchableOpacity>
        </View>
        
        <Text style = {styles.par}>Hi there, my name is Cedrick Jasper R. Sarabia. I am a 22-year-old Caloocan City native who is pursuing a degree in  software engineering at Global Reciprocal Colleges. You can rely on me to develop a system with excellent user interface design and seamless functionality, so why wait? Hire me right away!</Text>

        <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity style = {styles.div} onPress={() => Linking.openURL('http://google.com')}>
            <View style = {{flexDirection: 'row'}}>
              <Image source = {require('./assets/mail.png')} style = {styles.img3}/>
              <Text style = {styles.head3}>E-mail Address</Text>
            </View>
            <Text style = {{fontSize: 10, textAlign: 'center', shadowColor: 'black', shadowOffset: {width: -2, height: 3}, shadowOpacity: 0.5, shadowRadius: 3,}}>cedrickjaspersarabia@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.div} onPress = {requestContactsPermission}>
            <View style = {{flexDirection: 'row'}}>
              <Image source = {require('./assets/phone.png')} style = {styles.img4}/>
              <Text style = {styles.head3}>Phone Number</Text>
            </View>
            <Text style = {styles.par2}>{phone}</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <View style = {styles.div}>
            <View style = {{flexDirection: 'row'}}>
              <Image source = {require('./assets/cake.png')} style = {styles.img3}/>
              <Text style = {styles.head3}>Date of Birth</Text>
            </View>
            <Text style = {styles.par2}>June 15, 2001</Text>
          </View>
          <View style = {styles.div}>
            <View style = {{flexDirection: 'row'}}>
              <Image source = {require('./assets/gps.png')} style = {styles.img3}/>
              <Text style = {styles.head3}>Location</Text>
            </View>
            <Text style = {styles.par2}>Caloocan City</Text>
          </View>
        </View>
        
        <View style = {styles.div2}>
          <Text style = {styles.head4}>Make an Appointment</Text>
        </View>

        <View stlye = {styles.center}>
          <View style = {styles.div3}>
            <View style = {{flexDirection: 'row'}}>
              <View style = {{margin: 15, width: 100, borderRadius: 10}}>
                <Button title='Date' onPress = {() => showMode('date')} />
              </View>
              <Text style = {{fontSize: 17, marginTop: 20}}>{text}</Text>
            </View>
            <View style = {{flexDirection: 'row'}}>
              <View style = {{margin: 15, width: 100, borderRadius: 10}}>
                <Button title='Time' onPress = {() => showMode('time')}/>
              </View>
              <Text style = {{fontSize: 17, marginTop: 20}}>{text2}</Text>
            </View>

            {show && (
              <DateTimePicker
                testID = 'dateTimePicker'
                value = {date}
                mode = {mode}
                is24Hour = {true}
                display = 'default'
                onChange = {onChange}
              />
            )}
            
            <TouchableOpacity 
              onPress = {onTouch}
              style = {styles.input}
            >
              <Text style = {{textAlign: 'center', marginTop: 10, fontSize: 15, fontWeight: 'bold'}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style = {{flexDirection: 'row-reverse', marginTop: 30}}>
          <View style = {styles.div4}>
            <Text style = {styles.head5}>Our Services</Text>
          </View>
        </View>

        <View style = {{flexDirection: 'row', marginTop: 30}}>
          <View>
            <Image source = {require('./assets/web.png')} style = {styles.img5}/>
          </View>
          <View style = {{marginRight: 100}}>
            <Text style = {styles.head6}>Web Development</Text>
            <Text style = {styles.par3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>
        </View>

        <View style = {{flexDirection: 'row', marginTop: 30}}>
          <View>
            <Image source = {require('./assets/software.png')} style = {styles.img5}/>
          </View>
          <View style = {{marginRight: 100}}>
            <Text style = {styles.head6}>Software Development</Text>
            <Text style = {styles.par3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </View>
        </View>
        
        <View style = {styles.div5}>
          <Text style = {styles.head7}>Gallery</Text>
        </View>

        <View style = {{marginTop: 30}}>
          <Onboarding/>
        </View>

        <View style = {{flexDirection: 'row-reverse', marginTop: 30}}>
          <View style = {styles.div6}>
            <Text style = {styles.head8}>Testimonial</Text>
          </View>
        </View>

        <View>
          <Index/>
        </View>

        <View style = {styles.div7}>
          <Text style = {styles.head9}>QR Code</Text>
        </View>

        <View style = {{marginTop: 30, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source = {require('./assets/QR.png')} style = {styles.img6}/>
          <Text>Scan me</Text>
        </View>

        <View style = {{flexDirection: 'row-reverse'}}>
          <View style = {styles.div8}>
            <Text style = {styles.head10}>Business Hours</Text>
          </View>
        </View>

        <View style = {{marginTop: 30, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style = {styles.div9}>
            <Text style = {styles.par4}>Mon: 9:00am - 5:00pm</Text>
            <Text style = {styles.par4}>Tue: 9:00am - 5:00pm</Text>
            <Text style = {styles.par4}>Wed: 9:00am - 5:00pm</Text>
            <Text style = {styles.par4}>Thurs: 9:00am - 5:00pm</Text>
            <Text style = {styles.par4}>Fri: 9:00am - 5:00pm</Text>
            <Text style = {styles.par4}>Sat: 9:00am - 5:00pm</Text>
          </View>
        </View>

        <View style = {styles.div10}>
          <Text style = {styles.head11}>Contact Us</Text>
        </View>

        <View style = {{marginTop: 30, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input2}
            placeholder="Enter your name: "
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input3}
            placeholder="Enter your email address: "
          />
          <TextInput
            value={contact}
            onChangeText={setContact}
            style={styles.input3}
            placeholder="Enter your mobile number: "
            keyboardType = 'numeric'
            maxLength = {11}
          />
          <TextInput
            value={message}
            onChangeText={setMessage}
            style={styles.input3}
            placeholder="Enter a message: "
          />
          <TouchableOpacity style = {styles.button} onPress={onContact} title="Send Message">
            <Text style = {styles.head12}>Send Message</Text>
          </TouchableOpacity>
        </View>

        <View style = {{marginTop: 30, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <MapView style = {styles.map} region={mapRegion}>
            <Marker coordinate={mapRegion} title='Marker'/>
          </MapView>
        </View>

        <View style = {{marginTop: 30, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Created by prince_ceddie</Text>
        </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  img: {
    position: 'relative',
    height: 200,
    width: 395,
  },

  img2: {
    position: 'absolute',
    height: 170,
    width: 170,
    borderRadius: 100,
    marginLeft: 5,
    marginTop: 100,
    shadowColor: 'black',
    shadowOffset: {width: -7, height: 7},
    shadowOpacity: 1,
    shadowRadius: 3,
  },

  head: {
    position: 'absolute',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 150,
    marginLeft: 175
  },

  head2: {
    position: 'absolute',
    fontSize: 13,
    color: 'white',
    marginTop: 170,
    marginLeft: 180
  },

  shadow: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  icon: {
    height: 50,
    width: 50,
    marginLeft: 180,
    marginTop: 5
  },

  icon2: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: 5
  },

  icon3: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: 5
  },

  par: {
    textAlign: 'justify',
    fontSize: 15,
    marginTop: 30,
    marginLeft: 30,
    paddingRight: 30,
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  div: {
    height: 100,
    width: 160,
    marginTop: 30,
    marginLeft: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 7
  },

  img3: {
    height: 50,
    width: 50
  },

  img4: {
    height: 35,
    width: 35,
    marginTop: 5
  },

  head3: {
    fontSize: 15,
    marginTop: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  par2: {
    fontSize: 13,
    marginTop: 15,
    textAlign: 'center',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  div2: {
    height: 50,
    width: 220,
    backgroundColor: 'black',
    marginTop: 30,
    elevation: 5,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30
  }, 

  head4: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 11,
    marginLeft: 15
  },

  head5: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 11,
    marginLeft: 25
  },

  div3: {
    height: 200,
    width: 330,
    borderRadius: 15,
    elevation: 3,
    marginLeft: 15,
    marginTop: 30,
    padding: 10
  },

  input: {
    height: 40,
    width: 280,
    marginLeft: 15,
    borderRadius: 15,
    elevation: 3
  },

  div4: {
    height: 50,
    width: 150,
    backgroundColor: 'black',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30
  },

  head6: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15  
  },

  par3: {
    fontSize: 15,
    color: 'black',
    marginLeft: 15,
    textAlign: 'justify',
  },

  img5: {
    height: 70,
    width: 70,
    marginLeft: 15
  },

  div5: {
    height: 50,
    width: 110,
    backgroundColor: 'black',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30
  },

  head7: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 11,
    marginLeft: 15
  },

  div6: {
    height: 50,
    width: 150,
    backgroundColor: 'black',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30
  },

  head8: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 11,
    textAlign: 'right',
    marginRight: 15
  },

  div7: {
    height: 50,
    width: 120,
    backgroundColor: 'black',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 50,
  },

  head9: {
    fontSize: 19,
    color: 'white',
    marginTop: 11,
    marginLeft: 15,
    fontWeight: 'bold'
  },

  img6: {
    height: 150,
    width: 150,
  },

  div8: {
    height: 50,
    width: 180,
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 30,
  },

  head10: {
    textAlign: 'right',
    fontSize: 19,
    marginTop: 11,
    marginRight: 15,
    fontWeight: 'bold',
    color: 'white'
  },

  div9: {
    height: 200,
    width: 330,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    margin: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  par4: {
    textAlign: 'center',
    fontSize: 15,
  },

  div10: {
    marginTop: 30,
    height: 50,
    width: 140,
    backgroundColor: 'black',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  head11: {
    fontSize: 19,
    marginTop: 11,
    marginLeft: 15,
    color: 'white',
    fontWeight: 'bold'
  },

  input2: {
    height: 30,
    width: 300,
    borderBottomWidth: 1,
    paddingLeft: 5,
    marginTop: 5,
  },

  input3: {
    height: 30,
    width: 300,
    borderBottomWidth: 1,
    paddingLeft: 5,
    marginTop: 15,
  },

  button: {
    height: 40,
    width: 130,
    marginTop: 30,
    backgroundColor: 'black',
    borderRadius: 10,
  },

  head12: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    marginTop: 7,
    fontWeight: 'bold',
  },

  map: {
    height: 200,
    width: 330
  }

});
