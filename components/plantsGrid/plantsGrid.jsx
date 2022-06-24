import { useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import plants from '../../plantsData';
import PlantsCard from '../plantsCard/PlantsCard';
import { plantsCardStyle } from '../plantsCard/plantsCardStyle';

const PlantsGrid = ({input}) => {
  const filteredData = plants.filter((entireList)=> {
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