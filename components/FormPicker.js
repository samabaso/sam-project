import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
    Modal
} from 'react-native';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

import {
    LineDivider
} from "../components";
import { FONTS, SIZES, COLORS, icons } from "../constants"

const FormPicker = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    value,
    setValue,
    modalTitle,
    modalStyle,
    options = [],
    errorMsg = "",
}) => {

    const [isVisible, setIsVisible] = useState(false)

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
                onPress={() => setIsVisible(true)}
            >
                <Text
                    style={{
                        flex: 1,
                        color: value == "" ? COLORS.gray2 : COLORS.black,
                        ...FONTS.body3
                    }}
                >
                    {value == "" ? placeholder : value}
                </Text>

                <Image
                    source={icons.down_arrow}
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.gray
                    }}
                />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.transparentBlack7
                    }}
                >
                    {/* Transparent Background */}
                    <TouchableWithoutFeedback
                        onPress={() => setIsVisible(false)}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            }}
                        />
                    </TouchableWithoutFeedback>

                    <View
                        style={{
                            width: SIZES.width * 0.8,
                            padding: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.white,
                            ...modalStyle
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{modalTitle}</Text>

                        <FlatList
                            data={options}
                            keyExtractor={item => `${item.id}`}
                            contentContainerStyle={{
                                marginTop: SIZES.radius,
                            }}
                            renderItem={({ item, index }) => (
                                <>
                                    <TouchableOpacity
                                        style={{
                                            height: 50,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        onPress={() => {
                                            setIsVisible(false)
                                            setValue(item.value)
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...FONTS.body3
                                            }}
                                        >
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>

                                    {index < options.length - 1 &&
                                        <LineDivider />
                                    }
                                </>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default FormPicker;