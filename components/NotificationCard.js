import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import {
    IconButton
} from "../components";
import { FONTS, COLORS, SIZES, icons } from "../constants";

const NotificationCard = ({ notificationItem }) => {
    return (
        <View
            style={{
                marginBottom: SIZES.radius,
                padding: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                {/* Logo */}
                <View
                    style={{
                        width: 60,
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        backgroundColor: COLORS.primary,
                    }}
                >
                    <Image
                        source={notificationItem?.image}
                        style={{
                            width: 35,
                            height: 35,
                        }}
                    />
                </View>

                {/* Info */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>{notificationItem?.title}</Text>
                    <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>{notificationItem?.desc}</Text>
                    <Text style={{ ...FONTS.body5 }}>{notificationItem?.duration}</Text>
                </View>

                {/* Menu */}
                <View>
                    <IconButton
                        containerStyle={{
                            width: 30,
                            height: 30,
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}
                        icon={icons.menu1}
                        iconStyle={{
                            height: 25,
                            width: 25,
                            tintColor: COLORS.black
                        }}
                        onPress={() => console.log("menu")}
                    />
                </View>
            </View>
        </View>
    )
}

export default NotificationCard;