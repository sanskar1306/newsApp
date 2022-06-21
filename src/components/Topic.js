import React, { useState, useEffect } from "react";
import { View, Linking, ScrollView, FlatList } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
    Layout,
    Button,
    Text,
    TopNav,
    Section,
    SectionContent,
    useTheme,
    themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Article from "./Artricle";

export default function Topic({ navigation, topic }) {
    
    const { isDarkmode, setTheme } = useTheme();
    const auth = getAuth();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);



    const getNews = async () => {
        setIsLoading(true);
        setIsError(false);
        
        try {
            let arts = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=da01367290e743a38c86e82f22e28339'
                ,{
                    
                    params: {
                        category: topic,
                    }
                }
            )
            setArticles(arts.data.articles);

        } catch (error) {
            setIsError(error)
            console.log(error)
        }

        setIsLoading(false);


    }


    useEffect(async () => {
        await getNews();
        console.log(articles)
    }, [])

    if (isLoading)

        return (
            <Text>
                Loading........
            </Text>
        )




    return (
        <Layout>
           
            <ScrollView style={{ margin: 5 }}>
                <FlatList
                    data={articles}
                    renderItem={({ item }) =>
                        <Article
                            urlToImage={item.urlToImage}
                            title={item.title}
                            description={item.description}
                            author={item.author}
                            publishedAt={item.publishedAt}
                            sourceName={item.source.name}
                            url={item.url}
                        />}
                    keyExtractor={(item) => item.title}
                />
            </ScrollView>

        </Layout>
    );
}
