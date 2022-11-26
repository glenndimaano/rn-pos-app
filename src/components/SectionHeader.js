import { Text, StyleSheet, Platform, PlatformColor } from 'react-native'

const defaultStyle = StyleSheet.create({
    title: {
        ...Platform.select({
            ios: {
                color: PlatformColor('label'),
                backgroundColor:
                    PlatformColor('systemTealColor'),
            },
            android: {
                color: PlatformColor('?android:attr/textColor'),
                backgroundColor:
                    PlatformColor('@android:color/holo_blue_bright'),
            },
            default: { color: 'black' }
        })
    }
})

function SectionHeader({ title, style, action }) {
    return (
        <Text style={style ? style : defaultStyle.title}>{title}</Text>
    )
}



export default SectionHeader