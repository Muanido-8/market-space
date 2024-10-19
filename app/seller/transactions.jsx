import { Stack, Text } from "@react-native-material/core"
import { ScrollView } from "react-native"
import { colors } from "../../styles/styles"
import { TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Select from '../../components/Select'
import { useCallback, useEffect, useState } from "react"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";



export default Transactions = () => {
    const filters = [null, 'withdrawal', 'payment', 'withdrawal_saving']
    const [type, setType] = useState(null)
    const onSelectFilter = useCallback((item, index) => {
        setType(filters[index])
        console.log(type)
    })
    const data = [
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal_saving', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'payment', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal_saving', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'payment', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'payment', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'payment', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal_saving', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal_saving', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal_saving', from_account: 'my account', to_account: '847601581', created_at: new Date()},
        {id: 1, transaction_id: 'BCK1965F5S4D7S9', amount: 23.45, type: 'withdrawal', from_account: 'my account', to_account: '847601581', created_at: new Date()},
    ]

    const [filtered, setFiltered] = useState(data)

    useEffect(() => {
        if (type) {
            setFiltered(data.filter((val => val.type == type)))
        } else {
            setFiltered(data)
        }
    }, [type])
    

    return (
        <ScrollView>
            <Text variant="h6" color={colors.gray} style={{textAlign: 'center', width: '100%', marginVertical: 15}}>Transações</Text>
            <Stack p={10} justify="end" direction="row">
                <Stack w={"60%"}>
                    <Select items={['Todos', 'Levantamento', 'Pagamento', 'Poupança']} onSelect={onSelectFilter} title={"Tipo de trancação"} />
                </Stack>
            </Stack>
            <Stack style={{paddingBottom: 100}}>
                {filtered && filtered.map((item, index) => {return (<Stack key={index} style={{paddingVertical: 1}}>
                    <TouchableOpacity>
                        <Stack style={{backgroundColor: 'white', padding: 10}} items="center" direction="row" wrap="wrap">
                            <Text style={{fontWeight: 'bold', width: 'auto'}}>{item.transaction_id}</Text>
                            <MaterialCommunityIcons size={16} name={item.type == "withdrawal" ? "minus":(item.type == "withdrawal_saving" ? "plus":"arrow-up")} style={{paddving: 0, paddingStart: 10}} />
                            <Text variant="subtitle2" color={colors.primary}>{item.amount.toFixed(2).replace(".", ",")}</Text>
                            <Text variant="subtitle2" style={{fontSize: 9, fontWeight: 'bold'}}>MT</Text>
                            <Stack direction="row" wrap="wrap">
                                <Text style={{width: '100%'}}>De {item.from_account} para {item.to_account}</Text>
                                <Icon name="calendar" size={16} color={colors.primary} />
                                <Text variant="caption" style={{width: 'auto'}} color={colors.gray}>{item.created_at.toLocaleString()}</Text>
                            </Stack>
                        </Stack>
                    </TouchableOpacity>
                </Stack>)})}
            </Stack>
        </ScrollView>
    )
}
