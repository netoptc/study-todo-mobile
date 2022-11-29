
import Icon from "react-native-vector-icons/FontAwesome"
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { styles } from "./styles";


interface props {
  iconColor: string,
  onChange: () => void,
  value: boolean,
  checkColor: string
}

export default function CheckBox(props: props) {

  function handleChange() {
    const { onChange } = props;
    if (onChange) {
      return onChange();
    }
  }

  return (
    <View style={styles.WrapperCheckBox}>
        <TouchableOpacity onPress={handleChange} style={[
            styles.CheckBox,
            { borderColor: props.checkColor ? props.checkColor : '#fff' }
        ]}>
            {
            props.value ? <Icon name="check"
                style={{
                fontSize: 16,
                color: props.iconColor ? props.iconColor : '#fff',
                }}
            /> : null
            }
        </TouchableOpacity>
    </View>
  );
}