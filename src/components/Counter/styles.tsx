import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 20,
        marginHorizontal: 24
    },
    counter: {
        flexDirection: "row",
        alignItems: "center",
    },
    counterContainer: {
        backgroundColor: '#333333',
        alignItems: 'center',
        width: 25,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 100,
        marginLeft: 8,
    },
    text: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: "700",
    }
  })