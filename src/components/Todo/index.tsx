import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import CheckBox from "../Checkbox";
import { styles } from "./styles";

interface props {
    text: string
    checked: boolean
    remove: () => void
    check: () => void
}

export function Todo(props: props){
    return(
        <View style={styles.container}>
            <CheckBox
                iconColor="#F2F2F2"
                checkColor="#F2F2F2"
                value={props.checked}
                onChange={props.check}
            />
            <Text style={styles.text}>
                {props.text}
            </Text>
            <TouchableOpacity 
                onPress={props.remove}  
            >
                <Icon 
                    name="trash"
                    style={{
                    fontSize: 24,
                    color: '#808080',
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}