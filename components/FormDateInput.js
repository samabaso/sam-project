import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

import { FONTS, SIZES, COLORS, icons } from "../constants"

const FormDateInput = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    setDate,
    value,
    errorMsg = "",
}) => {

    const [open, setOpen] = useState(false)

    return (
        <View style={{ ...containerStyle }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: SIZES.height > 800 ? 55 : 45,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.height > 800 ? SIZES.base : 0,
                    alignItems: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                    ...inputContainerStyle
                }}
                onPress={() => setOpen(true)}
            >
                <Text
                    style={{
                        flex: 1,
                        color: value ? COLORS.black : COLORS.gray2,
                        ...FONTS.body3
                    }}
                >
                    {value ? moment(value).format("DD/MM/YYYY") : placeholder}
                </Text>

                <Image
                    source={icons.calender}
                    style={{
                        width: 25,
                        height: 25
                    }}
                />
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={open}
                mode="date"
                //display="inline"
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

export default FormDateInput;