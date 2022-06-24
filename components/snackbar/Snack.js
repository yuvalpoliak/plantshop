import { Snackbar } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { visibleSnackbar, dismissSnackbar } from "../../redux/snackSlice";
import { decrement } from "../../redux/counterSlice";
import { Dimensions, View, Text } from 'react-native'
import snackStyle from "./snackStyle";

const Snack = () => {
    const dispatch = useDispatch()
    const visible = useSelector((state) => state.snack.value)
    return(
        <View style={snackStyle.container}>
        <Snackbar
        style={snackStyle.snackbar}
        visible = {visible}
        onDismiss={()=> dispatch(dismissSnackbar())}
        action = {{
          label: 'Undo',
          onPress: () =>  dispatch(decrement())
        }}
        duration={5000}
        theme= {{colors: {accent: 'teal'}}}
        >
        <Text style= {snackStyle.snackbarText}>Item Added To Cart</Text>
        </Snackbar>
        </View>
    );
}

export default Snack;