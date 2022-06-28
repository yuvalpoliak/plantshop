import { Dialog, RadioButton, Portal , Provider} from "react-native-paper";
import { View, Text, TouchableOpacity } from 'react-native'
import dialogStyle from "./dialogStyle";

const Dialog = ({dialogVisible, setDialogVisible}) => {
    return(
        <Provider>
        <Portal>
      <Dialog
      visible={dialogVisible}
      onDismiss={() => setDialogVisible(false)}
      >
        <Dialog.Title>Sort</Dialog.Title>
        <Dialog.Content>
        <RadioButton.Group >
        <View style={dialogStyle.toggleContainer}>
        <RadioButton/>
        <Text>Newest</Text>
        </View>
        <View style={dialogStyle.toggleContainer}>
        <RadioButton/>
        <Text>Price(low to high)</Text>
        </View >
       <View style={dialogStyle.toggleContainer}> 
        <RadioButton/>
        <Text>Price(high to low)</Text>
        </View>
        </RadioButton.Group>
        </Dialog.Content>
        <Dialog.Actions>
          <TouchableOpacity
          activeOpacity={0.9}
          style={dialogStyle.dialogButton}
          >
            <Text style={dialogStyle.dialogText}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={0.9}
          style={dialogStyle.dialogButton}
          >
            <Text style={dialogStyle.dialogText}>
              OK 
            </Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal> 
    </Provider>
    )
}

export default Dialog;