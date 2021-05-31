import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const RepositoryItem = (props) =>{
    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 50,
          height: 50,
          borderRadius: 50/2
        },
        logo: {
          width: 66,
          height: 58,
        },
      });
    return(
        <View>
            <Image style = {styles.tinyLogo} source = {{uri:props.ownerAvatarUrl}}/>
            <Text>Full name: {props.fullName}</Text>
            <Text>Description: {props.description}</Text>
            <Text>Language: {props.language}</Text>
            <Text>Stars: {props.stargazersCount}</Text>
            <Text>Forks: {props.forksCount}</Text>
            <Text>Reviews: {props.reviewCount}</Text>
            <Text>Rating: {props.ratingAverage}</Text>
        </View>
    )
  };

export default RepositoryItem;