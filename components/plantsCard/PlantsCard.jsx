import React, {useState} from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { plantsCardStyle } from './plantsCardStyle';
import plants from '../../plantsData';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/counterSlice';
import { visibleSnackbar } from '../../redux/snackSlice';

const PlantsCard = ({ plant }) => {
    
    const dispatch = useDispatch()

    const [liked, setLiked] = useState(false)
    const [snackbarVisibile, setSnackBarVisible] = useState(false);

    const likedButton = 

    liked ? {
        iconName:  'heart',
        iconSize:  25,
        iconColor: 'red',
        style: plantsCardStyle.likedStyle
    }
    : {
        iconName: 'heart-outlined',
        iconSize: 25,
        iconColor: 'black',
        style: plantsCardStyle.unlikedStyle
    }

  return (
    <View style={plantsCardStyle.card}>
    <TouchableOpacity onPress={()=> setLiked((prev)=> !prev)}>
    <View style={[plantsCardStyle.heartContainer,]}>
    <View style={likedButton.style}>
    <Entypo 
    name={likedButton.iconName}
    size={likedButton.iconSize}
    color={likedButton.iconColor}
    />
    </View>
    </View>
    </TouchableOpacity>
    <View style ={plantsCardStyle.imageContainer}>
    <Image source={plant.img} style={plantsCardStyle.image}/>
    </View>
    <Text style={plantsCardStyle.plantName}>{plant.name}</Text>
    <View style={plantsCardStyle.bottom}>
        <Text style={plantsCardStyle.textPrice}>${plant.price}</Text>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=> {
        dispatch(increment())
        dispatch(visibleSnackbar())
        }
        }
        >
        <View style={plantsCardStyle.addConatiner}>
        <Text style={plantsCardStyle.plus}>+</Text>
        </View>
        </TouchableOpacity>
        
    </View>
    </View>
  )
}
export default PlantsCard;