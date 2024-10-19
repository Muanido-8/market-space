import { Tabs } from "expo-router"
import SellerHeader from "../../components/SellerHeader"
import TabBar from "../../components/TabBar"


export default Lay = () => {
    return (
        <Tabs
            initialRouteName="orders"
            screenOptions={{header: () => <SellerHeader />}}
            tabBar={props=> <TabBar {...props} />}
        >
            <Tabs.Screen
                name="messages"
                options={{
                    title: "Conversas",
                    // unmountOnBlur: true ,
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="products"
                options={{
                    title: "Produtos",
                    // unmountOnBlur: true,
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="orders"
                options={{
                    title: "Pedidos",
                    // unmountOnBlur: true,
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="savings"
                options={{
                    title: "Poupança",
                    // unmountOnBlur: true,
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="transactions"
                options={{
                    title: "Transações",
                    // unmountOnBlur: true,
                    headerShown: true,
                }}
            />
        </Tabs>
    )
}
