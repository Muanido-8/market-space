import { Chip, Stack, Text } from "@react-native-material/core"
import { Dimensions, Image, Pressable, TouchableOpacity } from "react-native"
import { colors } from "../styles/styles"

export default ProductCard = ({image, name, price, promotional_price, category, userImage, style, onCategoryPress, onUserPress, onPress}) => {
    const {width} = Dimensions.get("window")
    price && (price = price.toFixed(2).replace(".", ","))
    promotional_price && (promotional_price = promotional_price.toFixed(2).replace(".", ","))
    return (
        <Stack p={10} style={[{width: '100%'}, style]}>
            <Pressable onPress={onPress} style={{width: '100%'}}>
                <Stack direction="row" wrap="wrap">
                    <Image source={image} style={{height: width * 0.4 , width: '100%', borderRadius: 8}} resizeMode="cover" />
                    <Text variant="body2" color={colors.black} style={{width: '100%'}}>{name}</Text>
                    <Text variant={promotional_price ? 'body2':'subtitle2'} style={{fontSize: 13, textDecorationLine: promotional_price ? 'line-through':'none', width: 'auto'}}>{price}</Text>
                    <Text variant="subtitle2" style={{fontSize: 9, fontWeight: 'bold'}}>MT</Text>
                    {promotional_price && <Text color={colors.primary} variant="subtitle2" style={{width: 'auto', fontSize: 13}}>{promotional_price}</Text>}
                    {promotional_price && <Text color={colors.primary} variant="subtitle2" style={{fontSize: 9, fontWeight: 'bold'}}>MT</Text>}
                </Stack>
            </Pressable>

            
            {userImage && <TouchableOpacity onPress={onUserPress} style={{width: 35, height: 35, position: 'absolute', top: 14, start: 14}}>
                <Image source={userImage} style={{width: 35, height: 35, borderRadius: 25, borderWidth: 2, borderColor: colors.primary,}}/>
            </TouchableOpacity>}

            <TouchableOpacity onPress={onCategoryPress} style={{position: 'absolute', top: 14, end: 10}}>
                <Text variant="caption" color={colors.white} style={{borderRadius: 20, backgroundColor: colors.primary, paddingHorizontal: 10}}>{category.toUpperCase().substring(0, 11)}</Text>
            </TouchableOpacity>
        </Stack>
    )
}
