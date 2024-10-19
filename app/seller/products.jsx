import { Stack, Text } from "@react-native-material/core"
import ProductCard from "../../components/ProductCard"
import image from '../../assets/images/botas.jpg'
import user from '../../assets/images/1.jpg'
import { colors } from "../../styles/styles"
import { useCallback } from "react"
import { FlatList, ScrollView } from "react-native"


export default Products = () => {
    const onCategoryPress = useCallback((id) => {alert("Category" + id)})
    const onPress = useCallback((id) => {alert("Press" + id)})
    // const onUserPress = useCallback((id) => {alert("UserPress" + id)})

    const data = [
        {name: "Botas voadoras", id: 1, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 2, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 3, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 4, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 5, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 6, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 7, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 8, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 9, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 10, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
        {name: "Botas voadoras", id: 10, category: {id: 1, name: "Calcado"}, price: 340, promotional_price: 339, images: [image]},
    ]
    return (
        <ScrollView>
            <Text variant="h6" color={colors.gray} style={{textAlign: 'center', width: '100%', marginVertical: 15}}>Meus produtos</Text>
            <Stack  direction="row" wrap="wrap" style={{paddingBottom: 100}}>
                {data.map((item, index) => {
                    return (
                        <ProductCard 
                            key={index}
                            onCategoryPress={() => onCategoryPress(item.category.id)} 
                            onPress={() => onPress(item.id)} 
                            onUserPress={() => {}} 
                            style={{width: '50%'}} 
                            name={item.name} 
                            category={item.category.name} 
                            price={item.price} 
                            promotional_price={item.promotional_price} 
                            image={item.images[0]} 
                        />
                    )
                })}
            </Stack>
        </ScrollView>
    )
}
