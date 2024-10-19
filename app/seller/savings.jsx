import { Button, Divider, Stack, Text } from "@react-native-material/core"
import { ScrollView } from "react-native"
import { colors, styles } from "../../styles/styles"
import { useState } from "react"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import DateTimePicker from 'react-native-ui-datepicker'
import { Slider } from "react-native-awesome-slider"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { useSharedValue } from 'react-native-reanimated';
import { useCallback } from "react"
import Dialog from "react-native-dialog"


export default Products = () => {
    const [loading, setLoadin] = useState()
    const slider = useSharedValue(17)
    const [percent, setPercent] = useState(slider.value)
    const [dates, setDates] = useState([new Date, new Date])
    const [showModal, setShowModal] = useState(false)

    const data = {
        savings: 0,
        saving_percent: 13,
        start_savings: new Date(),
        end_savings: new Date()	
    }

    const min = useSharedValue(0.01)
    const max = useSharedValue(100)

    const sendSaving = useCallback(() => {
        console.log("Enviando")
    }, [percent, dates, showModal])

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ScrollView style={{padding: 6}}>
                <Text variant="subtitle2" color={colors.gray} style={{width: '100%', marginVertical: 15, fontSize: 16}}>Minha Poupança</Text>
                <Stack p={10} direction="row" justify="center" wrap="wrap">
                    <Text variant="h6" color={colors.black} style={{width: '100%', textAlign: 'center'}}>Valor popuado: </Text>
                    <Icon name="cash" size={30} color={colors.gray} style={{paddingEnd: 5}} />
                    <Text variant="h6" color={colors.primary}>{data.savings.toFixed(2).replace(".", ",")}</Text>
                    <Text variant="subtitle2" color={colors.black} style={{fontWeight: 'bold', fontSize: 11, paddingBottom: 4}}>MT</Text>
                    <Divider style={{width: '100%'}} />
                    {data.start_savings && <Text variant="body2" style={{width: '100%', textAlign: 'center'}}>{data.start_savings.toLocaleDateString()} à {data.end_savings.toLocaleDateString()}</Text>}
                    {!data.start_savings && <Text variant="body2" style={{width: '100%', textAlign: 'center'}}>Nenhuma Poupança activa</Text>}
                    {data.saving_percent && data.start_savings && <Text variant="body2" style={{width: '100%', textAlign: 'center'}}>Poupando {data.saving_percent.toFixed(2).replace(".", ",")}% </Text>}

                    {(data.savings > 0 && data.end_savings <= new Date()) && <Button variant="contained" tintColor={colors.white} title="Levantar" color={colors.primary} style={[styles.button, {marginVertical: 10}]} titleStyle={styles.buttonTitle} contentContainerStyle={styles.buttonContent} pressableContainerStyle={styles.buttonPressable}></Button>}
                    {(data.savings > 0 && data.end_savings > new Date()) && <Text variant="subtitle2" style={{width: '100%', textAlign: 'center', marginVertical: 10}}>So pode levantar depois de {data.end_savings.toLocaleDateString()} </Text>}

                    {data.savings == 0 && (!data.end_savings || data.end_savings < new Date()) && <Stack pv={10} direction="row" wrap="wrap" justify="center">
                        <Text variant="subtitle2" color={colors.black} style={{fontSize: 15, width: '100%', marginVertical: 15, fontSize: 15}}>Confirgurar nova Poupança</Text>
                        <Stack w={"85%"} style={{elevation: 4}}>
                            <Text style={{fontSize: 15, width: 'auto'}} variant="caption">Intervalo de tempo de Poupança</Text>
                            <DateTimePicker
                                mode="range"
                                selectedItemColor={colors.primary}
                                headerButtonColor={colors.primary}
                                todayContainerStyle={{borderWidth: 0}}
                                selectedRangeBackgroundColor={colors.primary}
                                locale="pt"
                                minDate={new Date().setDate(new Date().getDate() - 1)}
                                endDate={dates[1]}
                                startDate={dates[0]}
                                onChange={(params) => {setDates([params.startDate, params.endDate])}}
                            />
                            <Text style={{fontSize: 15, width: 'auto', paddingTop: 13, paddingBottom: 5}} variant="caption">Poupar {percent}% das vendas</Text>
                            <Slider 
                                progress={slider}
                                minimumValue={min}
                                maximumValue={max}
                                theme={{
                                    bubbleTextColor: colors.white,
                                    bubbleBackgroundColor: colors.primary,
                                    maximumTrackTintColor: colors.gray,
                                    minimumTrackTintColor: colors.primary
                                }}
                                onSlidingComplete={v => setPercent(Number(v.toFixed(2)))}
                            />

                            <Button 
                                variant="contained" 
                                tintColor={colors.white} 
                                title="Configurar poupança" 
                                color={colors.black} 
                                style={[styles.button, {marginVertical: 14, width: '100%'}]} 
                                titleStyle={styles.buttonTitle} 
                                onPress={() => setShowModal(true)}
                                contentContainerStyle={styles.buttonContent}
                                pressableContainerStyle={styles.buttonPressable}
                            />
                        </Stack>
                    </Stack>}
                </Stack>

                <Stack pb={100}></Stack>
            </ScrollView>

            <Dialog.Container visible={showModal}>
                <Dialog.Title>Confirmar poupança</Dialog.Title>
                <Dialog.Description>
                    Deseja poupar {percent}% de todas suas vendas de {dates[0].toLocaleDateString()} até {dates[1].toLocaleDateString()}?
                    Esta acção é irreversível.
                </Dialog.Description>
                <Dialog.Button onPress={() => setShowModal(false)} label="Não" />
                <Dialog.Button  onPress={() => sendSaving} label="Confirmo" />
            </Dialog.Container>
        </GestureHandlerRootView>
    )
}
