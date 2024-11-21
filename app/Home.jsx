import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  getCameraDevice,
  useCameraPermission,
} from "react-native-vision-camera";
import { Camera, useCameraDevices } from "react-native-vision-camera";

const Home = () => {
  //const device = useCameraDevices("back");
  const { hasPermission } = useCameraPermission();
  const devices = Camera.getAvailableCameraDevices();
  const device = getCameraDevice(devices, "back", {
    physicalDevices: [
      "ultra-wide-angle-camera",
      "wide-angle-camera",
      "telephoto-camera",
    ],
  });
  const permission = async () => {
    const status = await Camera.requestCameraPermission();
    console.log("status", status);
    console.log("hasPermission", hasPermission);
    const microphoneStatus = await Camera.requestMicrophonePermission();

    console.log(device);
    console.log("microphoneStatus", microphoneStatus);
  };
  useEffect(() => {
    permission();
  });

  return (
    <View>
      <Camera style={styles.cameraContainer} device={device} isActive={true} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  cameraContainer: {
    width: 300,
    height: 300,
  },
});
