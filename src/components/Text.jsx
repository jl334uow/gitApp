import React from 'react'
import {Text as NativeText, StyleSheet} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.primary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
        margin: theme.margin.body
    },
    subheadingText:{
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.subheading,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.bold,
        margin: theme.margin.subheading

    },
    colorTextSecondary:{
        color: theme.colors.textSecondary
    },
    colorPrimary:{
        color: theme.colors.primary
    },
    fontSizeSubheading:{
        fontSize: theme.fontSizes.subheading
    },
    fontWeightBold:{
        fontWeight: theme.fontWeights.bold
    }
})

const Text = ({color, fontSize, fontWeight, style, ...props}) => {
    const textStyle = [
        styles.text,
        styles.subheadingText,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style
    ]

    return <NativeText style = {textStyle} {...props}/>
}

export default Text