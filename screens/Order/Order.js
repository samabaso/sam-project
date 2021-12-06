import React from "react"
import {
    View,
    Image,
    SectionList,
    Text,
    TouchableOpacity
} from "react-native"

import {
    Header,
    IconButton,
    TextButton,
    OrderCard
} from "../../components"
import { COLORS, SIZES, FONTS, icons, images, dummyData } from "../../constants"

const Order = ({ navigation }) => {

    const [selectedTab, setSelectedTab] = React.useState("history")
    const [orders, setOrders] = React.useState(dummyData.orderHistories)

    function renderHeader() {
        return (
            <Header
                title="MY ORDERS"
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
                    <TouchableOpacity
                        onPress={() => console.log('Account')}
                    >
                        <Image
                            source={images.profile}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                }
            />
        )
    }

    function renderTabButtons() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        borderRadius: SIZES.radius,
                        backgroundColor: (selectedTab == 'history') ? COLORS.primary : COLORS.transparentPrimary9
                    }}
                    label="History"
                    labelStyle={{
                        color: (selectedTab == 'history') ? COLORS.white : COLORS.primary
                    }}
                    onPress={() => {
                        setSelectedTab("history")
                        setOrders(dummyData.orderHistories)
                    }}
                />

                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        marginLeft: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: (selectedTab == 'upcoming') ? COLORS.primary : COLORS.transparentPrimary9
                    }}
                    label="Upcoming"
                    labelStyle={{
                        color: (selectedTab == 'upcoming') ? COLORS.white : COLORS.primary
                    }}
                    onPress={() => {
                        setSelectedTab("upcoming")
                        setOrders(dummyData.upcomingOrders)
                    }}
                />
            </View>
        )
    }

    function renderOrders() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <SectionList
                    sections={orders}
                    keyExtractor={(item) => item.id}
                    stickySectionHeadersEnabled={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <OrderCard orderItem={item} />
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
                                    color: (selectedTab == 'history') ? COLORS.gray : COLORS.black
                                }}
                            >
                                {title}
                            </Text>
                        </View>
                    )}
                    ListFooterComponent={
                        <View style={{ height: 50 }} />
                    }
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
            {renderTabButtons()}
            {renderOrders()}
        </View>
    )
}

export default Order