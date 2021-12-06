import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';

import {
    Header,
    IconButton,
    IconLabelButton,
    LineDivider
} from "../../components"
import { COLORS, SIZES, icons } from "../../constants"

const Settings = ({ navigation }) => {

    function renderHeader() {
        return (
            <Header
                title="SETTINGS"
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

    function renderSettings() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                <IconLabelButton
                    icon={icons.password}
                    label="Change Password"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
                    onPress={() => navigation.navigate("ChangePassword")}
                />

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <IconLabelButton
                    icon={icons.filter}
                    label="Preferences"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
                />

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <IconLabelButton
                    icon={icons.notification}
                    label="Notifications"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
                    onPress={() => navigation.navigate("NotificationSetting")}
                />

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <IconLabelButton
                    icon={icons.bar}
                    label="Data use"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
                />

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <IconLabelButton
                    icon={icons.globe}
                    label="Language"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
                />

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <IconLabelButton
                    icon={icons.update}
                    label="Check Update"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
                />

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <IconLabelButton
                    icon={icons.call}
                    label="Contact Us"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
                />

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <IconLabelButton
                    icon={icons.privacy}
                    label="Privacy Policy"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
                />

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <IconLabelButton
                    icon={icons.term}
                    label="Terms & Conditions"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
                />

                <LineDivider
                    lineStyle={{
                        backgroundColor: COLORS.lightGray1
                    }}
                />

                <IconLabelButton
                    icon={icons.logout}
                    label="Logout"
                    containerStyle={styles.iconLabelContainerStyle}
                    iconStyle={styles.iconLabelIconStyle}
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
                {renderSettings()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    iconLabelContainerStyle: {
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 0
    },
    iconLabelIconStyle: {
        marginRight: SIZES.radius,
        tintColor: COLORS.primary
    }
})

export default Settings;