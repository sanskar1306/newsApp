import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import moment from "moment";
import {
    Layout,
    Button,
    TopNav,
    useTheme,
    themeColor,
  } from "react-native-rapi-ui";


const Article = (props) => {
    const { isDarkmode, setTheme } = useTheme();
    const goToSource = () => {
        WebBrowser.openBrowserAsync(props.url);
    }
    const styles = StyleSheet.create({
        container: {
            marginVertical: 10,
            color:isDarkmode?themeColor.white:themeColor.black,
            backgroundColor: isDarkmode?themeColor.black:themeColor.white,
            padding: 10,
            overflow: "scroll"
        },
        image: {
            height: 200,
            width: "100%",
            marginHorizontal: "auto",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5
        },
        title: {
            color:isDarkmode?themeColor.white:themeColor.black,
            fontSize: 18,
            fontWeight: "600",
            marginTop: 10
        },
        description: {
            color:isDarkmode?themeColor.white:themeColor.black,
            fontSize: 16,
            fontWeight: "400",
            marginTop: 10
        },
        data: {
            color:isDarkmode?themeColor.white:themeColor.black,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
        },
        heading: {
    
        },
        author: {
            fontWeight: "bold",
            fontSize: 15
        },
        date: {
            fontWeight: "bold",
            color: "#e63946",
            fontSize: 15
        },
        source: {
            color: "#e63946",
            fontWeight: "bold",
            fontSize: 18
        }
    })
    return (
        <Pressable onPress={goToSource} style={styles.container}>
            <Image source={{
                uri: props.urlToImage
            }}
                style={styles.image}
            />
            <View style={{ padding: 20 }}>


                {/*    title */}
                <Text style={styles.title}>{props.title}</Text>

                {/*    description */}
                <Text style={styles.description} numberOfLines={3}>
                    {props.description}
                </Text>

                <View style={styles.data}>
                    <Text style={styles.heading}>by: <Text style={styles.author}>{props.author}</Text></Text>
                    <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
                </View>

                {/*     source */}
                <View style={{ marginTop: 10 }}>
                    <Text>source: <Text style={styles.source}>{props.sourceName}</Text></Text>
                </View>
            </View>

        </Pressable>
    )
}

export default Article


