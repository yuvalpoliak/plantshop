import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import cartStyle from './cartStyle'
import { useSelector } from 'react-redux';

const Cart = () => {
    const count = useSelector((state) => state.counter.value)
    return(
    <View style={cartStyle.container}>
    { count != 0 ?
    <View style={cartStyle.counterContainer}>
      <Text style={cartStyle.counterText}>{count}</Text>
      </View> : <View style={{width: 17, height: 17, right: 5, top: 5,}}/>
    }
      <Ionicons name="ios-cart" size={32} color="black" />
      
      </View>
    );
}

export default Cart