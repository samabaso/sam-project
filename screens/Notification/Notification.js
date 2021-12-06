import React from "react"
import {
    View,
    Image,
    TouchableOpacity,
    SectionList,
    Text,
} from "react-native"

import {
    NotificationCard
} from "../../components"
import { COLORS, SIZES, FONTS, icons, images, dummyData } from "../../constants"

const Notification = () => {

    function renderNotifications() {
        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <SectionList
                    sections={dummyData.notifications}
                    keyExtractor={(item) => item.id}
                    stickySectionHeadersEnabled={false}
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginBottom: 200,
                        paddingHorizontal: SIZES.padding
                    }}
                    renderItem={({ item }) => (
                        <NotificationCard notificationItem={item} />
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View
                            style={{
                                marginTop: SIZES.radius,
                                marginBottom: SIZES.base
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.body3,
                                }}
                            >
                                {title}
                            </Text>
                        </View>
                    )}
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
            {renderNotifications()}
        </View>
    )
}

export default Notification;