import { StyleSheet, Dimensions } from 'react-native';

const snackStyle = StyleSheet.create({

    container: {
        justifyContent: 'center',
    },
    snackbar: {
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: 'whitesmoke',
    },
    snackbarText: {
        color: 'black'
    }
})

export default snackStyle;