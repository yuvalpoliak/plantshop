import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colorpallete';

const width = Dimensions.get('window').width

export const plantsCardStyle = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 30
    },
    card: {
        flex: 1,
        height: 250,
        backgroundColor: colors.light,
        marginHorizontal: 4,
        borderRadius: 10, 
        marginBottom: 20,
        padding: 15
    },
    heartContainer: {
        alignItems: 'flex-end',
        

    },
    likedStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightpink',
        borderRadius: 20
    },
    unlikedStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(280,280,280)',
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 0
    },
    imageContainer: {
        height: 100,
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    plantName: {
        fontSize: 17,
        marginTop: 10,
        fontWeight: 'bold'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    textPrice: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    addConatiner: {
        width: 30,
        height: 30,
        backgroundColor: colors.green,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plus: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold'
    }

})