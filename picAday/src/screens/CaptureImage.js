import React , {useEffect, useRef}  from 'react'

import { View, Text, Platform, TouchableOpacity, Alert } from 'react-native'
import {RNCamera as Camera}  from 'react-native-camera';
import ImageCard from "../components/ImageCard"



export default function CaptureImage(props) {
    // const [imgUrl, setImgUrl] = useState(null);

    const cameraRef = useRef();
   const takePicture = async () => {
       console.log("from take picture")
    
          let options = {
            quality: 0.85,
            fixOrientation: true,
            forceUpOrientation: true,
          };
    
    
          try {
             const data = await cameraRef.current.takePictureAsync();
            //  call to database
             props.navigation.navigate('DayEditView', {imageUri:data.uri})
            
          } catch (err) {
            Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
            return;
          } finally {
          }
        
      };
  
      const onPicture = async ({uri}) => {
          console.log("image uri", uri)

      }


    return (
        <View style={{backgroundColor:"red"}}>
        
    
        <Camera
        ref={cameraRef}
        style={{height:10}}
        captureAudio={false}
        onPictureTaken={onPicture}
    


        type={Camera.Constants.Type.back}
        flashMode={Camera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
        onPress={takePicture}
        >

    <View >
      <TouchableOpacity  onPress={takePicture}>
          <Text> Capture </Text>
          </TouchableOpacity>
          </View>
          </Camera>
          
      </View>
          
    )
}


// import React from 'react'
// import { View, Text } from 'react-native'

// export default function CaptureImage() {
//     return (
//         <View>
//             <Text>CaptureImage</Text>
//         </View>
//     )
// }
