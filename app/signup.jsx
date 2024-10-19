import { Dimensions, Image, ScrollView, View, Alert } from "react-native"
import {colors, styles} from '../styles/styles.js'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import {Button, IconButton, Stack, Text, TextInput} from '@react-native-material/core'
import icon from '@/assets/images/icon.png'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useCallback } from "react"
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router"
import { useState } from "react"
import Select from "@/components/Select"

export default App = () => {
    const safe = useSafeAreaInsets()
    const router = useRouter()

    const [file, setFile] = useState(null)

    const [loading, setLoading] = useState(false)

    const signup = useCallback(() => {
        setLoading(true)
    })

    const onSelectType = useCallback((item, index) => {
        const accountTypes = {0: 'user', 1: 'seller'}
        console.log(accountTypes[index])
    })
    const onSelectGender = useCallback((item, index) => {
        const genders = {0: 'F', 1: 'M'}
        console.log(genders[index])
    })

    const pickImage = useCallback(async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== "granted") {
                Alert.alert("Permissao Negada", `Sorry, we need camera roll permission to upload images.`)
            } else {
                const result = await ImagePicker.launchImageLibraryAsync();
    
                if (!result.canceled) {
                    setFile(result.assets[0].uri);
                    // console.log("selecionou", result.assets[0].uri)
                }
            }
        } catch(e) {
            console.log(e)
        }
    }, [setFile, file, ImagePicker])

    const login = useCallback(() => {
        router.push("index")
    }, [router])

    const {width, height} = Dimensions.get("window")
    return (
        <ScrollView>
            <Stack style={{paddingTop: safe.top, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background}}>
                <Stack style={{padding: 10, paddingBottom: 10, alignItems: 'center', width}}>
                    <Image source={icon} style={{height: 100}} resizeMode="contain" />
                    <Text variant="h6" color={colors.black} style={{textAlign: 'center', fontWeight: 'bold'}}>Boas Vindas!</Text>
                    <Text variant="subtitle2" color={colors.gray} style={{textAlign: 'center', padding: 10, width: '100%'}}>Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
                </Stack>
                <Stack>
                    {file && <Image source={{uri: file}} resizeMode="contain" style={{width: 115, height: 115, borderRadius: 115, borderWidth: 5, borderColor: colors.primary}} />}
                    {!file && <Icon onPress={pickImage} name="account-outline" style={{padding: 3, textAlign: 'center', borderRadius: 105, borderWidth: 5, borderColor: colors.primary}} color={colors.gray} size={115} />}
                    <Icon onPress={pickImage} name="pencil-circle" size={40} style={{position: 'absolute', right: 0, bottom: 0, backgroundColor: colors.white, padding: 0, borderRadius: 40, borderWidth: 0}} color={colors.primary} />
                </Stack>
                <TextInput color={colors.primary} variant="outlined" label="Nome" inputContainerStyle={styles.inputContainer} inputStyle={[styles.input]}></TextInput>
                <TextInput color={colors.primary} variant="outlined" label="Numero de BI" inputContainerStyle={styles.inputContainer} inputStyle={[styles.input]}></TextInput>
                <TextInput color={colors.primary} variant="outlined" placeholder="ex: 841234567" label="Telefone" inputContainerStyle={styles.inputContainer} inputStyle={[styles.input]}></TextInput>
                <View style={{width: '85%'}}>
                    <Select onSelect={onSelectType} title="Selecione o tipo de conta" items={['Cliente', 'Vendedor ambuente']} />
                </View>
                <View style={{width: '85%'}}>
                    <Select onSelect={onSelectGender} title="Selecione seu Genero" items={['Femenino', 'Masculino']} />
                </View>
                <TextInput color={colors.primary} variant="outlined" label="Senha" inputContainerStyle={styles.inputContainer} inputStyle={styles.input} trailing={props => <IconButton icon={<Icon name="eye" size={26} color={colors.gray}></Icon>} />}></TextInput>
                <TextInput color={colors.primary} variant="outlined" label="Confirmar senha" inputContainerStyle={styles.inputContainer} inputStyle={styles.input} trailing={props => <IconButton icon={<Icon name="eye" size={26} color={colors.gray}></Icon>} />}></TextInput>
                <Button disabled={loading} loading={loading} onPress={signup} variant="contained" tintColor={colors.white} title="Entrar" color={colors.black} style={styles.button} titleStyle={styles.buttonTitle} contentContainerStyle={styles.buttonContent} pressableContainerStyle={styles.buttonPressable}></Button>

                <Text variant="subtitle2" color={colors.gray} style={{textAlign: 'center', width, marginTop: 50}}>Ja tem uma conta?</Text>
                <Button disableElevation disabled={loading} variant="contained" onPress={login} tintColor={colors.black} title="Ir para login" color={colors.white} style={styles.button} titleStyle={styles.buttonTitle} contentContainerStyle={styles.buttonContent} pressableContainerStyle={styles.buttonPressable}></Button>
            </Stack>
        </ScrollView>
    )
}
