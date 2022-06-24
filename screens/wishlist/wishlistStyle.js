import { StyleSheet } from "react-native";
import colors from "../../colorpallete";

const wishlistStyle = StyleSheet.create({

    container: {
        marginHorizontal: 10
    },
    
    counterContainer: {
        width: 17,
        height: 17,
        right: 8,
        top: 8,
        borderRadius: 10,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: colors.white
    }

})

export default wishlistStyle;