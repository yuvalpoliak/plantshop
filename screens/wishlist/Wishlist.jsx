import { View, Text } from "react-native";
import wishlistStyle from "./wishlistStyle";
import { AntDesign } from "@expo/vector-icons";

const Wishlist = () => {
    return(
        <View style={wishlistStyle.container}>
        <View style={wishlistStyle.counterContainer}>
        <Text style={wishlistStyle.counterText}>3</Text>
        </View>
        <AntDesign name='star' size={27} color={'black'}/>
        </View>
    )
}

export default Wishlist;