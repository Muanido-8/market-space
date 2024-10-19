import {StyleSheet} from 'react-native'

const color = 'lightskyblue'
export const colors = {
    primary: '#4d73f9',
    gray: '#9f9ba1',
    secondary: '#d9d8da',
    background: '#edecee',
    black: '#1a181b',
    white: '#f7f7f8',
    yellow: '#00ffff'
}
export const styles = StyleSheet.create({
    input: {
        color: 'black',
        paddingVertical: 5,
    },
    
    inputContainer: {
        width: '85%',
        marginVertical: 8,
    },

    button: {
        width: '85%',
        marginVertical: 8
    },

    buttonPressable: {
        width: 'auto',
        height: 'auto',
    },

    buttonContent: {
        width: 'auto',
        height: 'auto',
        padding: 15,
        width: '100%'
    },

    buttonTitle: {
        textTransform: 'none',
        fontSize: 15
    },

    dropdownButtonStyle: {
        width: '100%',
        borderWidth: 1.3,
        borderColor: colors.gray,
        height: 55,
        backgroundColor: colors.white,
        borderRadius: 8,
        flexDirection: 'row',
        marginVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 28,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
})
