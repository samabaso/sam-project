import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';

import { FONTS, COLORS, SIZES, images } from "../constants";

const CouponCard = ({ couponItem }) => {
    return (
        <View
            style={{
                paddingHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
            }}
        >
            <ImageBackground
                source={images.coupon}
                resizeMode="stretch"
                style={{
                    width: '100%',
                    height: 120,
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            width: (SIZES.width - (2 * SIZES.padding)) * 0.45,
                            height: 120,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={couponItem.image}
                            style={{
                                width: 90,
                                height: 90,
                            }}
                        />
                    </View>

                    <View style={{ justifyContent: 'center', marginLeft: SIZES.radius }}>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>{couponItem.name}</Text>
                        <Text style={{ ...FONTS.h2 }}>{couponItem.discountPercent}% Off</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>{couponItem.description}</Text>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default CouponCard;