import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginHorizontal: 24,
        marginBottom: 8,
        backgroundColor: '#262626',
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: '#F2F2F2',
        textAlign: "left",
        flex: 1,
        marginLeft: 8,
        marginRight: 18,
    },
    textChecked: {
        color: '#808080',
        textAlign: "left",
        flex: 1,
        marginLeft: 8,
        marginRight: 18,
        textDecorationLine: "line-through"
    },
});