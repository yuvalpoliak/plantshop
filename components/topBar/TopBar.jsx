import { View } from 'react-native';
import Cart from '../../screens/cart/Cart';
import topBarStyle from './topBarStyle';
import { AntDesign } from '@expo/vector-icons';
import Wishlist from '../../screens/wishlist/Wishlist';

const TopBar = () => {
    return(
        <View style={topBarStyle.container}>
            <Cart/>
            <Wishlist/>
        </View>
    );
}

export default TopBar;