import React , {useEffect, useRef}  from 'react'

import { View, Text, Platform, TouchableOpacity, Alert } from 'react-native'
import {RNCamera as Camera}  from 'react-native-camera';


export default function CaptureImage() {

    const cameraRef = useRef();
   const takePicture = async () => {
       console.log("from take picture")
        // if (this.camera && !this.state.takingPic) {
    
          let options = {
            quality: 0.85,
            fixOrientation: true,
            forceUpOrientation: true,
          };
    
        //   this.setState({takingPic: true});
    
          try {
             const data = await cameraRef.current.takePictureAsync(options);
             console.log("dataaaaaaaaaaaaa", data)
             Alert.alert('Success', JSON.stringify(data));
          } catch (err) {
            Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
            return;
          } finally {
            // this.setState({takingPic: false});
          }
        // }
      };

//    const takePicture=()=> {
//         camera.capture()
//           .then((data) => {
//             console.log(data);
//             // this.setState({ path: data.path })
//           })
//           .catch(err => console.error(err));
//       }



    //   const  renderCamera=()=> {
    //       console.log("from render camera")
    //     return (
    //       <Camera
    //         ref={(cam) => {
    //           this.camera = cam;
    //         }}
    //         // style={styles.preview}
    //         aspect={Camera.constants.Aspect.fill}
    //         captureTarget={Camera.constants.CaptureTarget.disk}
    //       >
    //         <TouchableHighlight
    //         //   style={styles.capture}
    //           onPress={this.takePicture.bind(this)}
    //           underlayColor="rgba(255, 255, 255, 0.5)"
    //         >
    //           <View />
    //         </TouchableHighlight>
    //       </Camera>
    //     );
    //   }



    //   const  renderImage=()=> {
    //     return (
    //       <View>
    //         <Image
    //         //   source={{ uri: this.state.path }}
    //         //   style={styles.preview}
    //         />
    //         <Text
    //         //   style={styles.cancel}
    //         //   onPress={() => this.setState({ path: null })}
    //         >Cancel
    //         </Text>
    //       </View>
    //     );
    //   }

    //   useEffect(() => {
    //     renderCamera();

         
    //   }, [])

  


    return (
        <View style={{backgroundColor:"red"}}>
        
    
        <Camera
        ref={cameraRef}
        style={{height:10}}
        captureAudio={false}
    


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

    <View style={{height:100, backgroundColor:"red"}}>
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
