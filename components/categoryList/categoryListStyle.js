import { StyleSheet } from "react-native"
import colors from "../../colorpallete"

export const categoryListStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 30,
    },
    itemText: {
        fontSize: 14,
        color: 'gray',
        fontWeight: 'bold'
    },
    itemTextSelected: {
        paddingBottom: 5, 
        color: colors.green,
        borderBottomWidth: 2, 
        borderBottomColor: colors.green,
        
    }
})