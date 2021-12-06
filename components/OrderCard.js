import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    TextButton,
    OrderStatus
} from "../components";
import { FONTS, COLORS, SIZES } from "../constants";

const OrderCard = ({ orderItem }) => {

    const navigation = useNavigation();

    function getStatus() {
        if (orderItem.status == "D") {
            return "DELIVERED"
        } else if (orderItem.status == "C") {
            return "CANCELLED"
        } else if (orderItem.status == "O") {
            return "PENDING"
        }
    }

    return (
        <View
            style={{
                marginBottom: SIZES.radius,
                padding: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2
            }}
        >
            {/* Order Info */}
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
                        backgroundColor: COLORS.white,
                    }}
                >
                    <Image
                        source={orderItem.image}
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
                        marginLeft: SIZES.radius,
                    }}
                >
                    <Text style={{ ...FONTS.h2, fontSize: 18, lineHeight: 0 }}>{orderItem.name}</Text>

                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        {/* Delivered Timestamp */}
                        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{orderItem.deliveredTime}</Text>

                        {/* dot separator */}
                        <View
                            style={{
                                backgroundColor: COLORS.gray,
                                marginHorizontal: SIZES.base,
                                height: 4,
                                width: 4,
                                borderRadius: 2,
                                alignSelf: 'center'
                            }}
                        />

                        {/* Item count */}
                        <Text style={{ ...FONTS.body4, color: COLORS.gray }}>{orderItem.itemCount} items</Text>
                    </View>

                    <OrderStatus
                        status={getStatus()}
                        containerStyle={{
                            marginTop: 0
                        }}
                        labelStyle={{
                            ...FONTS.body4
                        }}
                    />
                </View>

                {/* Price / Order no */}
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h2, fontSize: 18, lineHeight: 0 }}>
                        {
                            ['C', 'D'].includes(orderItem.status) ? `$${orderItem.price.toFixed(2)}` :
                                `#${orderItem.id}`
                        }
                    </Text>
                </View>

            </View>

            {/* Buttons */}
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius
                }}
            >
                {
                    // On the way --> Track Order + Cancel
                    orderItem.status == 'O' &&
                    <>
                        <TextButton
                            buttonContainerStyle={{
                                ...styles.textButtonContainer,
                                backgroundColor: COLORS.primary
                            }}
                            label="Track Order"
                            labelStyle={{
                                ...FONTS.body4
                            }}
                            onPress={() => console.log('Track Order')}
                        />

                        <TextButton
                            buttonContainerStyle={{
                                ...styles.textButtonContainer,
                                backgroundColor: COLORS.transparentPrimary9,
                                marginLeft: SIZES.radius
                            }}
                            label="Cancel"
                            labelStyle={{
                                ...FONTS.body4,
                                color: COLORS.primary
                            }}
                            onPress={() => console.log('Cancel Order')}
                        />

                    </>
                }

                {
                    // Delivered / Cancel --> Re-order + Rate
                    orderItem.status != 'O' &&
                    <>
                        <TextButton
                            buttonContainerStyle={{
                                ...styles.textButtonContainer,
                                backgroundColor: COLORS.primary
                            }}
                            label="Re-Order"
                            labelStyle={{
                                ...FONTS.h4
                            }}
                            onPress={() => console.log('Re-order')}
                        />
                        <TextButton
                            buttonContainerStyle={{
                                ...styles.textButtonContainer,
                                backgroundColor: COLORS.transparentPrimary9,
                                marginLeft: SIZES.radius
                            }}
                            label="Rate"
                            labelStyle={{
                                ...FONTS.h4,
                                color: COLORS.primary
                            }}
                            onPress={() => navigation.navigate('Review')}
                        />
                    </>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textButtonContainer: {
        flex: 1,
        height: 40,
        borderRadius: 10,
    }
})

export default OrderCard;