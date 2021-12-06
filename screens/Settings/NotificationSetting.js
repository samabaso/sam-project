import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import {
    Header,
    IconButton,
    CustomSwitch
} from "../../components"
import { COLORS, FONTS, SIZES, icons } from "../../constants"

const NotificationSettingCard = ({ title, desc, isSelected, setIsSelected }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 85,
                marginTop: SIZES.radius,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2
            }}
        >
            <Image
                source={icons.notification}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.primary
                }}
            />

            <View
                style={{
                    flex: 1,
                    marginLeft: SIZES.radius
                }}
            >
                <Text style={{ ...FONTS.h3 }}>{title}</Text>
                <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>{desc}</Text>
            </View>

            <CustomSwitch
                value={isSelected}
                onChange={(value) => setIsSelected(value)}
            />
        </View>
    )
}

const NotificationSetting = ({ navigation }) => {

    const [notification, setNotification] = useState(true)
    const [promoNotification, setPromoNotification] = useState(false)

    function renderHeader() {
        return (
            <Header
                title="NOTIFICATION"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }

    function renderOptions() {
        return (
            <View>
                <NotificationSettingCard
                    title="Notifications"
                    desc="You will receive daily updates"
                    isSelected={notification}
                    setIsSelected={setNotification}
                />

                <NotificationSettingCard
                    title="Promotional Notifications"
                    desc="You will receive daily updates"
                    isSelected={promoNotification}
                    setIsSelected={setPromoNotification}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeader()}

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding
                }}
            >
                {renderOptions()}
            </ScrollView>
        </View>
    )
}

export default NotificationSetting;