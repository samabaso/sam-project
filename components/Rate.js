import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { icons, COLORS, } from "../constants"

const Rate = ({
    rating,
    iconStyle,
    activeColor = COLORS.orange,
    inactiveColor = COLORS.lightOrange2,
    onChange,
    containerStyle
}) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 200, ...containerStyle }}>
            <TouchableOpacity
                onPress={() => onChange(1)}
            >
                <Image
                    source={icons.star}
                    style={{
                        tintColor: rating >= 1 ? activeColor : inactiveColor,
                        ...styles.rateIcon,
                        ...iconStyle,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChange(2)}
            >
                <Image
                    source={icons.star}
                    style={{
                        tintColor: rating >= 2 ? activeColor : inactiveColor,
                        ...styles.rateIcon,
                        ...iconStyle,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChange(3)}
            >
                <Image
                    source={icons.star}
                    style={{
                        tintColor: rating >= 3 ? activeColor : inactiveColor,
                        ...styles.rateIcon,
                        ...iconStyle,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChange(4)}
            >
                <Image
                    source={icons.star}
                    style={{
                        tintColor: rating >= 4 ? activeColor : inactiveColor,
                        ...styles.rateIcon,
                        ...iconStyle,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onChange(5)}
            >
                <Image
                    source={icons.star}
                    style={{
                        tintColor: rating >= 5 ? activeColor : inactiveColor,
                        ...styles.rateIcon,
                        ...iconStyle,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    rateIcon: {
        height: 30,
        width: 30,
    }
})

export default Rate;