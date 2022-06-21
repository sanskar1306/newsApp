import React, {useState} from "react"
import {View, Text, StyleSheet, FlatList} from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Article from "../components/Artricle";
import {
    Layout,
    Button,
    TopNav,
    useTheme,
    themeColor,
  } from "react-native-rapi-ui";
const Search = () => {
    const [searchText,setSearchText] = useState("");
    const [articles,setArticles] = useState([]);

   const searchArticles = () =>{
       axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=da01367290e743a38c86e82f22e28339',{
           params:{
               
               q: searchText
           }
       })
           .then( (response) =>{
               // handle success
               setArticles(response.data.articles);
           })
           .catch(function (error) {
               // handle error
               console.log(error);
           })
           .then(function () {
               // always executed
           });
   }
    return (
        <Layout>

        
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles}/>
            <FlatList
                data={articles}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                    />}
                keyExtractor={(item) => item.title}
            />
        </View>
        </Layout>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})