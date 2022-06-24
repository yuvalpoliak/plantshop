import { StyleSheet } from 'react-native';
import colors from '../../colorpallete';

const topBarStyle = StyleSheet.create({

    container: {
        flexDirection: 'row-reverse',
        marginTop: 20,
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
        paddingHorizontal: 0
    }
})

export default topBarStyle;