import React, {useState, createContext} from 'react'
import { View, Text, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native'
import { homeStyle } from './homeStyle'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import colors from '../../colorpallete';
import CategoryList from '../../components/categoryList/CategoryList';
import PlantsGrid from '../../components/plantsGrid/plantsGrid';
import Cart from '../cart/Cart';
import Snack from '../../components/snackbar/Snack';
import { Dialog, Portal, Provider, ToggleButton, RadioButton, Button } from 'react-native-paper';
import TopBar from '../../components/topBar/TopBar';

/*
how to divide the app: 
1)inside a redux put the plants data. 
2)dont mess with the input prop drilling its clean .
3) inside a redux put the cart counter.
4)for now, extract the category list(maybe afterwards you dont)
*/
 const Home = () => {


  const [input, setInput] = useState('')
  const [dialogVisible, setDialogVisible] = useState(false)
  return (
    
    <SafeAreaView style={homeStyle.container}>
    <Provider>
    <TopBar/>
    <View style={homeStyle.header}>
    <View>
      <Text style={homeStyle.h2}>Welcome To</Text>
      <Text style={homeStyle.h1}>Plant Shop</Text>
      </View>
      
    </View>
    <View style={homeStyle.searchAndSortContainer}>
      <View style={homeStyle.inputContainer}>
        <Ionicons name='search' size={25} style={homeStyle.searchIcon} />
        <TextInput placeholder='Search...' style={homeStyle.textInput}
        onChangeText={(event) => {
          var lowerCase = event.toLowerCase()
          setInput(lowerCase)
        }}
        />
      </View>
      <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => setDialogVisible(true)}
      >
      <View style={homeStyle.sortBtn}>
        <MaterialIcons name='sort' size={30} color={colors.white}/>
      </View>
      </TouchableOpacity>
    </View>
    <Dialog visible={dialogVisible} setVisible={setDialogVisible}/>
    <CategoryList/>
    <PlantsGrid input={input}/>
    <Snack/>
    </Provider>
    </SafeAreaView>
    
  )
}
export default Home;