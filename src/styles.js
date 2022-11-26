import { StyleSheet, StatusBar } from "react-native";
import { Typography, Colors, Spacings } from 'react-native-ui-lib';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    paddingTop: StatusBar.currentHeight - 10,

  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  sectionHeader: {
    flexDirection: 'column'
  }
})

export default styles