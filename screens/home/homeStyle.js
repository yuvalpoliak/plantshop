import { StyleSheet } from "react-native"
import colors from "../../colorpallete"

export const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.white
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    h2: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    h1: {
        fontSize: 38,
        fontWeight: 'bold',
        color: colors.green
    },
    searchAndSortContainer: {
        marginTop: 30,
        flexDirection: "row"
    },
    inputContainer: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 10
    },
    searchIcon: {
        marginLeft: 20,
    },
    textInput: {
        fontSize: 16,
        flex: 1,
        marginLeft: 5,
        fontWeight: 'bold',
        color: colors.dark
    },
    sortBtn: {
        width: 50, 
        height: 50,
        marginLeft: 10,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})