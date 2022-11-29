import { StyleSheet, TextComponent } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        flex: 1
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        color: '#F2F2F2',
        borderRadius: 6,
        padding: 16,
        fontSize: 16,
        height: 52,
        marginRight: 4,
    },
    inputFocus: {
        borderColor: '#5E60CE',
        borderWidth: 1,
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 24,
        marginTop: -26
    },
    emptyComponent: {
        borderTopColor: '#333333',
        borderTopWidth: 1,
        alignItems: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20,
        marginHorizontal: 24,
    },
    emptyImage: {
        marginBottom: 16
    },
    emptyText: {
        color: '#808080',
        fontSize: 14,
    },
    emptyTextBold: {
        color: '#808080',
        fontSize: 14,
        fontWeight: '700',
    }
});