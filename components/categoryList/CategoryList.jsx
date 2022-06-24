import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {categoryListStyle} from './categoryListStyle'

 const CategoryList = () => {

 const categories = ['POPULAR', 'ORAGANIC', 'INDOORS', 'SYNTETHIC' ];
 const [categoryIndex, setCategoryIndex] = useState(0)

  return (
    <View style={categoryListStyle.container}>
        {categories.map((item, index) => (
            <TouchableOpacity activeOpacity={0.75} key={index}
            onPress={()=> setCategoryIndex(index)}>
            <Text style={
            [categoryListStyle.itemText,
             categoryIndex == index && categoryListStyle.itemTextSelected]
             } 
             key={index}>{item}</Text>
             </TouchableOpacity>
        )
        )}
    </View>
  )
}
export default CategoryList;