
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react'; // ?? wtf is this?
import {
  Alert,
  Button,
  FlatList,
  Linking,
  Modal,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState("");
  const [session, setSession] = useState({ number: 6, title: 'state' })
  const [current, setCurrent] = useState(true)
  const [showWarning, setShowWarning] = useState(false)

  const [counter, setCounter] = useState(0)
  const [items, setItems] = useState([
    { item: 'item 1' },
    { item: 'item 2' },
    { item: 'item 3' },
    { item: 'item 4' },
    { item: 'item 5' },
    // { key: 5, item: 'item 5' },
  ])

  const DATA = [
    {
      title: 'title-1',
      data: ['item 1-1', 'item 1-2', 'item 1-3']
    },
    {
      title: 'title-2',
      data: ['item 2-1', 'item 2-2', 'item 2-3']
    },
    {
      title: 'title-3',
      data: ['item 3-1', 'item 3-2', 'item 3-3']
    },
    {
      title: 'title-4',
      data: ['item 4-1', 'item 4-2']
    },
    {
      title: 'title-5',
      data: ['item 5-1', 'item 5-2', 'item 5-3']
    },
  ]

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const youtubeOnClickHandler = () => {
    return 'https://www.youtube.com/watch?v=ANdSdIlgsEw&ab_channel=ProgrammingwithMash'
  }

  const onClickHandler = () => {
    if (name.length > 3) {
      setName('The big Titan Dawg')
    } else {
      setShowWarning(true)

      // Alert.alert("Warning", 
      //             "length must be more than 3", 
      // [{text:"okkkk", onPress:() => console.warn("ok pressed")},
      // {text:"cancel", onPress:() => console.warn("canceled ok pressed")}, 
      // {text:"do not show again", onPress:() => console.warn("do not show pressed")}],
      // {cancelable: true, onDismiss: () => console.warn("alert dismissed")}
      // )
      // this is pre warning
      // ToastAndroid.show("the name must be 3", ToastAndroid.SHORT)
    }
    // setSession({ number: 20, title: 'random' })
    // setCurrent(false)
  }

  const onClickCounter = () => {
    setCounter(counter + 1)
  }

  const [refresh, setRefresh] = useState(false)
  const onRefreshHandle = () => {
    setRefresh(true);
    // setItems([...items, {item:'item 70'}]);
    setRefresh(false);
  }

  // import it
  // const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Text>gskjhgkjsdhfk</Text>
    </NavigationContainer>


    // text inputs and keyboard
    // <View style={styles.body}>
    //   <Modal visible={showWarning}
    //         transparent
    //         onRequestClose={() => 
    //         setShowWarning(false)}
    //   > 
    //     <View style={styles.warning_model}>
    //       <Text>the name must be longer than 3</Text>
    //     </View>
    //   </Modal>
    //   <Text style={styles.text}>
    //     please write your name :
    //   </Text>
    //   <TextInput onChangeText={(value) => {setName(value)}} style={styles.input}/>
    //   <Text>your name: {name}</Text>

    //   <Button title='Submit' onPress={onClickHandler}></Button>

    //   <TouchableOpacity>
    //     <Text>
    //       Jello is clickable
    //     </Text>
    //   </TouchableOpacity>
    // </View>

    // <SectionList
    //   keyExtractor={(item, index) => index.toString()}
    //   sections={DATA}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       {/* <Text style={styles.text}>{item}</Text> */}
    //       <Text>{item}</Text>
    //     </View>
    //   )} 
    //   renderSectionHeader={({section})=>(
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{section.title}</Text>
    //     </View>
    //   )}
    // />

    // <FlatList
    //   keyExtractor={(item, index) => index.toString()}
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}>{item.item}</Text>
    //     </View>
    //   )}
    // refreshControl={
    //     <RefreshControl refreshing={refresh} onRefresh={onRefreshHandle}/>}
    // />    

    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //   <RefreshControl refreshing={refresh} onRefresh={onRefreshHandle}/>}
    // >
    // {/* <View style={styles.body}> */}
    // {/* can use ScrollView as the main view */}

    //     {/* lesson 1 */}
    //     {/* <Text style={styles.text}> React-Native practice course</Text>  
    //   <Text style={styles.text}> my name is {name}</Text>  
    //   <Text style={styles.text}> my session number {session.number}</Text>  
    //   <Text style={styles.text}> {current ? 'current session true' : 'next session false'}</Text>  
    //   <Button title='Update State' color={'black'} onPress={
    //   // <Button title='Update State' color={'black'} onPress={() => {
    //     onClickHandler
    //     // Linking.openURL('https://reactnative.dev/docs/environment-setup?guide=native')
    //     // Linking.openURL(youtubeOnClickHandler())
    //   }></Button> */}

    //     {/* <Text style={styles.text}>
    //     Count: {counter}
    //   </Text>
    //   <View style={styles.button}>
    //     <Button title='add count' onPress={onClickCounter}/>
    //   </View> */}

    //     {/* flex view tutorial */}
    //     {/* <View style={styles.view1}>
    //     <Text style={styles.text}>1</Text>
    //   </View>
    //   <View style={styles.view2}>
    //     <Text style={styles.text}>2</Text>
    //   </View>
    //   <View style={styles.view3}>
    //     <Text style={styles.text}>3</Text>
    //   </View> */}

    //     {/* <View>
    //     <Text style={styles.text}>copy and paste</Text>
    //   </View> */}

    //     // <View style={styles.item}>

    //     //   {items.map(i => {
    //     //     return (
    //     //       <View>
    //     //         <Text style={styles.text}>
    //     //           {i.item}
    //     //         </Text>
    //     //       </View>
    //     //     )
    //     //   })}

    //     // </View>

    // {/* </View> */}
    // // </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1, // colors the full screen
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent:'center',
    // borderWidth: 10,
    // borderColor: 'blue',
    // borderRadius: 10,
    // margin:40,
  },

  warning_model: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
    justifyContent: 'center',
    alignItems: 'center',
  },

  item: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 200,
  },

  input: {
    width: 200,
    borderWidth: 2,
  },

  // view1:{
  //   width:100,
  //   height:100,
  //   backgroundColor:'blue',

  //   // responsive design stuff
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // view2:{
  //   width:100,
  //   height:100,
  //   backgroundColor:'purple',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // view3:{
  //   width:100,
  //   height:100,
  //   backgroundColor:'green',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    // margin: 10,
  },
  button: {
    borderColor: 'red',
    borderWidth: 1,
    width: 200,
    height: 100,
  }

  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
