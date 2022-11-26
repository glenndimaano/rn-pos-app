import { useState } from "react";
import { SectionList, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";


const Header = ({ title }) => {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <View style={styles.headingWrapper}>
            <Text style={styles.title1}>{title}</Text>
            <View style={styles.switchhWrapper}>
                <Text style={{ color: (isToggle ? "green" : "red"), marginRight: 10 }}>{isToggle ? "On" : "Off"}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isToggle ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setIsToggle}
                    value={isToggle}
                />

            </View>
        </View>
    )
}

const ListItem = ({ title }) => (
    <TouchableOpacity
        onPress={() => console.log("Press")}
    >
        <View style={styles.stateWrapper}>
            <Text style={styles.title2}>{title}</Text>
            <Text style={styles.state}>{title}</Text>
        </View>
    </TouchableOpacity>
)

const SList = ({ options }) => (
    <SectionList
        sections={options}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <ListItem title={item} />}
        renderSectionHeader={({ section: options }) => (
            <Header title={options.title} />
        )}
    />
);

const styles = StyleSheet.create({
    title1: {
        fontSize: 28,
        fontWeight: '700',
        color: 'black',
        textAligh: 'left'
    },
    headingWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 15
    },
    switchhWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title2: {
        fontSize: 19.5,
        fontWeight: '600'
    },
    state: {
        fontSize: 16
    },
    stateWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 7,

    }
})

export default SList