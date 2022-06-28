import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {categoryListStyle} from './categoryListStyle'
import { categories } from '../../plantsData'
import { useSelector, useDispatch } from 'react-redux'
import { changeIndex } from '../../redux/categoriesSlice'

 const CategoryList = () => {

 const dispatch = useDispatch()
 const categoryIndex = useSelector((state) => state.category.value)

  return (
    <View style={categoryListStyle.container}>
        {categories.map((item, index) => (
            <TouchableOpacity activeOpacity={0.75} key={index}
            onPress={()=> dispatch(changeIndex(index))}>
            <Text style={
            [categoryListStyle.itemText,
             categoryIndex == index && categoryListStyle.itemTextSelected]
             } 
             key={index}>{item.name}</Text>
             </TouchableOpacity>
        )
        )}
    </View>
  )
}
export default CategoryList;