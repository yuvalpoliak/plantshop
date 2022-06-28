import { useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import plants from '../../plantsData';
import PlantsCard from '../plantsCard/PlantsCard';
import { plantsCardStyle } from '../plantsCard/plantsCardStyle';
import { categories } from '../../plantsData';
import { useSelector } from 'react-redux';

const PlantsGrid = ({input}) => {
  const category = useSelector((state) => state.category.value)
  const categoryData = categories[category].content;
  
  
  const filteredData = categoryData.filter((entireList)=> {
    if(input === '') {
      return entireList
    }
    else{
      return entireList.name.toLowerCase().includes(input)
    }
  })

        
        
  return (
    <FlatList
    contentContainerStyle={plantsCardStyle.container}
    showsVerticalScrollIndicator={false}
    numColumns={2}
    data={filteredData}
    key={plants.id}
    renderItem={({ item }) => <PlantsCard plant={item} />}
    >
    </FlatList>
  )
}
export default PlantsGrid;