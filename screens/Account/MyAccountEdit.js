import React, { useState } from 'react';
import {
    View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
    Header,
    IconButton,
    TextButton,
    FormInput,
    FormDateInput,
    FormPicker
} from "../../components"
import { COLORS, SIZES, icons, constants } from "../../constants"

const MyAccountEdit = ({ navigation }) => {

    const [fullName, setFullName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [idCard, setIdCard] = useState("")
    const [dob, setDob] = useState(null)
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [addr, setAddr] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")

    function renderHeader() {
        return (
            <Header
                title="MY ACCOUNT"
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

    function renderForm() {
        return (
            <View
                style={{
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Name */}
                <FormInput
                    label="Full Name"
                    value={fullName}
                    onChange={(value) => {
                        setFullName(value)
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                />

                {/* Phone Number */}
                <FormInput
                    label="Phone Number"
                    value={phoneNo}
                    onChange={(value) => {
                        setPhoneNo(value)
                    }}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                />

                {/* ID Card */}
                <FormInput
                    label="ID Card"
                    value={idCard}
                    onChange={(value) => {
                        setIdCard(value)
                    }}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                />

                {/* D.O.B */}
                <FormDateInput
                    label="Date of Birth"
                    placeholder="MM/DD/YYYY"
                    value={dob}
                    setDate={setDob}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                />

                {/* Gender */}
                <FormPicker
                    label="Gender"
                    placeholder="Select gender"
                    modalTitle="Select Gender"
                    value={gender}
                    setValue={setGender}
                    options={constants.gender}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                />

                {/* Email */}
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    value={email}
                    onChange={(value) => {
                        setEmail(value)
                    }}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                />

                {/* Address */}
                <FormInput
                    label="Address"
                    value={addr}
                    onChange={(value) => {
                        setAddr(value)
                    }}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                />

                {/* City */}
                <FormInput
                    label="City"
                    value={city}
                    onChange={(value) => {
                        setCity(value)
                    }}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                />

                {/* State */}
                <FormPicker
                    label="State"
                    placeholder="Select state"
                    modalTitle="Select State"
                    value={state}
                    setValue={setState}
                    options={constants.state}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
                    modalStyle={{
                        height: 250
                    }}
                />

                {/* Zip */}
                <FormInput
                    label="Zip"
                    value={zip}
                    onChange={(value) => {
                        setZip(value)
                    }}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    inputContainerStyle={{
                        backgroundColor: COLORS.white
                    }}
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

            <KeyboardAwareScrollView
                keyboardDismissMode="on-drag"
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 40
                }}
            >
                {renderForm()}
            </KeyboardAwareScrollView>

            <TextButton
                buttonContainerStyle={{
                    height: 60,
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    marginBottom: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
                label="Save"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default MyAccountEdit;