import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from './Text';
const RepositoryItem = (props) =>{
    const styles = StyleSheet.create({
        container: {
          paddingTop: 10
        },
        tinyLogo: {
          width: 50,
          height: 50,
          borderRadius: 5
        },
        main: {
          display:'flex',
          flexDirection: 'row',
          paddingLeft: 10
          
        },
        header: {
          paddingLeft: 15
        },
        language: {
          backgroundColor: '#0366d6',
          height: 27,
          alignSelf: 'flex-start',
          borderRadius: 5,
          paddingBottom: 5
        },
        langText: {
          textAlign: 'center'
        },
        desc: {
          width: '95%',
          flex: 1,
          flexWrap: 'wrap',
          paddingBottom: 5
        }

      });
    return(
        <View style = {styles.container}>
          <View style = {styles.main}>
            <Image style = {styles.tinyLogo} source = {{uri:props.ownerAvatarUrl}}/>
            <View style = {styles.header}>
              <Text fontWeight="bold" fontSize="subheading">{props.fullName}</Text>
              <Text style = {styles.desc}>{props.description}</Text>
              <View style = {styles.language}>
                <Text color = 'textSecondary' style = {styles.langText}>{props.language}</Text>
              </View>
            </View>
          </View>
          <Text >
            <Text color = 'primary' >Stars: {props.stargazersCount}</Text>
            <Text color = 'primary'>Forks: {props.forksCount}</Text>
            <Text color = 'primary'>Reviews: {props.reviewCount}</Text>
            <Text color = 'primary'>Rating: {props.ratingAverage}</Text>
          </Text>
        </View>
    )
  };

export default RepositoryItem;