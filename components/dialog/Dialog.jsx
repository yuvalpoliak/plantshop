import { Dialog, RadioButton, Portal , Provider, Modal} from "react-native-paper";
import { View, Text, TouchableOpacity, Modal as RNModal } from 'react-native'
import dialogStyle from "./dialogStyle";
import { useState } from "react";
import colors from "../../colorpallete";


const DialogComp = ({dialogVisible, setDialogVisible}) => {

  const [radioButtonActive, setRadioButtonActive] = useState('newest')
  

 
  
    return(
     
      <Dialog
      
      visible={dialogVisible}
      onDismiss={() => setDialogVisible(false)}
      >
        <Dialog.Title>Sort</Dialog.Title>
        <Dialog.Content>
        <RadioButton.Group >
        <View style={dialogStyle.toggleContainer}>
        <RadioButton
         value='newest' 
         color={colors.green}
         status={radioButtonActive == 'newest' ? 'checked' : 'unchecked'}
         onPress={() => setRadioButtonActive('newest')} />
        <Text>Newest</Text>
        </View>
        <View style={dialogStyle.toggleContainer}>
        <RadioButton 
        value='desc' 
        color={colors.green}
        status={radioButtonActive == 'desc' ? 'checked' : 'unchecked'}
        onPress={() => setRadioButtonActive('desc')}
        />
        <Text>Price(low to high)</Text>
        </View >
       <View style={dialogStyle.toggleContainer}> 
        <RadioButton 
        value='asc' 
        color={colors.green}
        status={radioButtonActive == 'asc' ? 'checked' : 'unchecked'}
        onPress={
          () => { 
          setRadioButtonActive('asc')
          
          }}
        />
        <Text>Price(high to low)</Text>
        </View>
        </RadioButton.Group>
        </Dialog.Content>
        <Dialog.Actions>
          <TouchableOpacity
          activeOpacity={0.9}
          style={dialogStyle.dialogButton}
          onPress={() => setDialogVisible(false)}
          >
            <Text style={dialogStyle.dialogText}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={0.9}
          style={dialogStyle.dialogButton}
          onPress={() => sortAsc()}
          >
            <Text style={dialogStyle.dialogText}>
              OK 
            </Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
     
    
    )
}

export default DialogComp;