import { useSafeAreaInsets } from "react-native-safe-area-context"
import { View } from "react-native"
import {colors} from '../styles/styles.js'
import image from '../assets/images/1.jpg'
import { IconButton, Stack, Text } from "@react-native-material/core"
import { Image } from "react-native"
import { Dimensions } from "react-native"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default SellerHeader = () => {
    const insets = useSafeAreaInsets()

    const {width} = Dimensions.get("window")
    const user = ('Nome do user')

    return (
        <View style={{padding: 5, paddingTop: insets.top + 10, backgroundColor: colors.primary}}>
            <Stack style={{alignItems: 'center'}} justify="between" direction="row">
                <Stack direction="row" style={{alignItems: 'center'}}>
                    <Image source={image} style={{width: width * 0.20, height: width * 0.20, borderWidth: 1, borderColor: colors.primary, borderRadius: width * 0.20}} resizeMode="cover" />
                    <Stack style={{paddingHorizontal: 5}}>
                        <Text variant="subtitle1" color={colors.white} style={{fontSize: 13, padding: 0}}>Boas Vindas,</Text>
                        <Text variant="subtitle2" color={colors.white} style={{fontSize: 16, padding: 0}}>{user}!</Text>
                        <Text variant="subtitle2" color={colors.black} style={{fontSize: 10, padding: 0}}>455,90 MT</Text>
                    </Stack>
                </Stack>
                <Stack direction="row">
                    <IconButton color={colors.black} icon={() => <Icon name="plus-circle" size={30} color={colors.white} />} />
                    {/* <IconButton color={colors.black} icon={() => <Icon name="bell" size={30} color={colors.white} />} /> */}
                </Stack>
            </Stack>
        </View>
    )
}
