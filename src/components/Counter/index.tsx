import { Text, View } from "react-native";
import { styles } from "./styles";

interface props {
    created: number
    completed: number
}

export function Counter(props: props) {
    return(
        <View style={styles.container}>
            <View style={styles.counter}>
                <Text style={[styles.text, {color: '#4EA8DE'}]}>
                    Criadas
                </Text>
                <View style={styles.counterContainer}>
                    <Text style={styles.text}>
                        {props.created}
                    </Text>
                </View>
            </View>
            <View style={styles.counter}>
                <Text style={[styles.text, {color: '#8284FA'}]}>
                    Concluídas
                </Text>
                <View style={styles.counterContainer}>
                    <Text style={styles.text}>
                        {props.completed}
                    </Text>
                </View>
            </View>
        </View>
    );
}