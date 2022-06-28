import { StyleSheet } from "react-native";
import colors from "../../colorpallete";

const dialogStyle = StyleSheet.create({
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dialogButton: {
        margin: 10,
        backgroundColor: colors.green,
        padding: 5,
        borderRadius: 5
    },
    dialogText: {
        color: 'whitesmoke',
        fontWeight: 'bold'
    }
})

export default dialogStyle;