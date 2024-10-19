import { MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const icons = {
    products: (props) => <Icon name="cart" size={26} {...props} />,
    orders: (props) => <Icon name="bell-alert" size={26} {...props} />,
    savings: (props) => <MaterialCommunityIcons name="currency-usd" size={26} {...props} />,
    transactions: (props) => <Icon name="bank-transfer" size={26} {...props} />,
    messages: (props) => <EvilIcons name="comment" size={26} {...props} />,
}
