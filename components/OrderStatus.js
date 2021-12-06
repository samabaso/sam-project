import React from 'react';
import {
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

import { COLORS, FONTS, SIZES } from '../constants';

const OrderStatus = ({ status, containerStyle, labelStyle }) => {

    function getColor() {
        if (status == "DELIVERED") {
            return COLORS.green
        } else if (status == "CANCELLED") {
            return COLORS.red
        } else {
            return COLORS.orange
        }
    }

    function getLabel() {
        if (status == "DELIVERED") {
            return "Order Delivered"
        } else if (status == "CANCELLED") {
            return "Order Cancelled"
        } else {
            return "Food is on the way"
        }
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                alignItems: 'center',
                ...containerStyle
            }}
        >
            <View
                style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: getColor(),
                }}
            />
            <Text
                style={{
                    color: getColor(),
                    marginLeft: SIZES.base,
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
                {getLabel()}
            </Text>
        </View>
    )
}

OrderStatus.propTypes = {
    status: PropTypes.oneOf(['DELIVERED', 'CANCELLED', 'PENDING']),
}

export default OrderStatus;