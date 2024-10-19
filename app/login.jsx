import { Dimensions, Image, View } from "react-native"
import {colors, styles} from '../styles/styles.js'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import {Button, IconButton, Text, TextInput} from '@react-native-material/core'
import icon from '@/assets/images/icon.png'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useCallback, useState } from "react"
import { useRouter } from "expo-router"

export default App = () => {
    const safe = useSafeAreaInsets()
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const login = useCallback(() => {
        setLoading(true)
    })
    const signup = useCallback(() => {
        router.push("signup")
    }, [router])

    const {width, height} = Dimensions.get("window")
    return (
        <View style={{paddingTop: safe.top, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background}}>
            <View style={{padding: 10, marginBottom: 50}}>
                <Image source={icon} style={{height: 150}} resizeMode="contain" />
                <Text variant="h4" color={colors.black} style={{textAlign: 'center', fontWeight: 'bold'}}>Nome Da app</Text>
                <Text variant="subtitle1" color={colors.gray} style={{textAlign: 'center'}}>Seu espaco de compra e venda</Text>
            </View>
            <Text variant="subtitle2" style={{textAlign: 'center', width}}>Acesse sua conta</Text>
            <TextInput color={colors.primary} variant="outlined" label="Telefone" inputContainerStyle={styles.inputContainer} inputStyle={[styles.input]}></TextInput>
            <TextInput secureTextEntry={!showPassword} color={colors.primary} variant="outlined" label="Senha" inputContainerStyle={styles.inputContainer} inputStyle={styles.input} trailing={props => <IconButton icon={<Icon name={showPassword ? 'eye' : 'eye-off'} size={26} color={colors.gray} onPress={() => {setShowPassword(!showPassword)}}></Icon>} />}></TextInput>
            <Button onPress={login} disabled={loading} loading={loading} variant="contained" tintColor={colors.white} title="Entrar" color={colors.primary} style={styles.button} titleStyle={styles.buttonTitle} contentContainerStyle={styles.buttonContent} pressableContainerStyle={styles.buttonPressable}></Button>

            <Text variant="subtitle2" color={colors.gray} style={{textAlign: 'center', width, marginTop: 50}}>Ainda nao tem acesso?</Text>
            <Button disabled={loading} variant="contained" onPress={signup} tintColor={colors.white} title="Criar conta" color={colors.black} style={styles.button} titleStyle={styles.buttonTitle} contentContainerStyle={styles.buttonContent} pressableContainerStyle={styles.buttonPressable}></Button>
        </View>
    )
}
