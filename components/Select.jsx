import {colors, styles} from '../styles/styles.js'
import SelectDropdown from 'react-native-select-dropdown'
import { View } from 'react-native'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text } from '@react-native-material/core'
import { Feather } from '@expo/vector-icons'
 
export default Select = ({items, title, onSelect}) => {
    return (
    <SelectDropdown
        data={items}
        onSelect={onSelect}
        renderButton={(selectedItem, isOpened) => {
            return (
                <View style={styles.dropdownButtonStyle}>
                    <Text color={colors.primary} style={styles.dropdownButtonTxtStyle}>
                        {(selectedItem) || title}
                    </Text>
                    <Icon name={isOpened ? 'chevron-double-up' : 'chevron-down'} color={colors.primary} size={26} />
                </View>
            );
        }}
        renderItem={(item, index, isSelected) => {
            return (
                <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                    <Text>{item}</Text>
                </View>
            );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
    />)
}
