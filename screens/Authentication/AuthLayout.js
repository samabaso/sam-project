import React from 'react';
import {
    View,
    Text,
    Image,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { images, FONTS, SIZES, COLORS } from "../../constants"

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: SIZES.height > 800 ? SIZES.padding : SIZES.radius,
                backgroundColor: COLORS.white,
            }}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode="on-drag"
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* App Logo */}
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source={images.logo_02}
                        resizeMode="contain"
                        style={{
                            height: 100,
                            width: 200
                        }}
                    />
                </View>

                {/* Title */}
                <View
                    style={{
                        marginTop: SIZES.height > 800 ? SIZES.padding : 0,
                        ...titleContainerStyle
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            ...FONTS.h2
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.darkGray,
                            marginTop: SIZES.base,
                            ...FONTS.body3
                        }}
                    >
                        {subtitle}
                    </Text>
                </View>

                {children}
            </KeyboardAwareScrollView>
        </View>
    )
}

export default AuthLayout;