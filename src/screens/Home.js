import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Text, View, Image, ImageBackground, TextInput, StyleSheet } from "react-native";


export default class Home extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require("../images/back.png")}
                style={{ width: "100%", height: "100%" }}>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 40,
                        alignItems: "center",
                        paddingHorizontal: 40,
                    }}>
                    {/* <Icon name="menu" size={30} color="#a2a2db" style={{ width: 20 }} /> */}
                    <Icon
                        name="account-circle"
                        size={33}
                        color="#a2a2db"
                        style={{ marginLeft: 250 }}/>
                </View>

                <View style={{ paddingHorizontal: 10, marginTop: 35 }}>
                    <Text
                        style={{
                            textAlign:"center",
                            fontSize: 45,
                            color: "#522289",
                            fontFamily: "OpenSansExtraBold",
                            
                        }}>
                        NEXT WORD
                    </Text>

                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 70
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 250,
                                width: 250,
                                borderRadius: 200,
                                backgroundColor: "#fff",
                            }}>
                            <Image
                                source={require("../images/logo1.png")}
                                style={{ height: 200, width: 200, borderRadius: 200 }}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: 40,}}>
                        <Button
                            title="Sign in with Google"
                            fontFamily="MontserratBlack"
                            color="#a2a2db">
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        );
    }

}
