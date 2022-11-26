import { useState } from "react";
import { View } from "react-native";
import SList from "../components/SectionList";
import styles from '../styles';

const settings = [
  {
    title: "Bluetooth",
    isBluetoothEnabled: false,
    data: ["device 1", "device 2", "device 3"]
  }
];

function SettingsScreen({ navigation }) {
  const [bluetoothSettings, setBluetoothSettings] = useState(settings)

  return (
    <View style={styles.container }>
      <SList options={bluetoothSettings} />
    </View>)
}

export default SettingsScreen 