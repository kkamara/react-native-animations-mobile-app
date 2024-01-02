import { useRef } from 'react'
import { 
    StyleSheet,
    Animated,
    View,
    Button,
} from 'react-native'

export default function App() {
    const boxOpacityAnimationValue = useRef(
        new Animated.Value(0)
    ).current

    function handleFadeInBox() {
        Animated.timing(boxOpacityAnimationValue, {
            duration: 1000,
            toValue: 1,
            delay: 200,
            useNativeDriver: true,
        }).start()
    }

    function handleFadeOutBox() {
        Animated.timing(boxOpacityAnimationValue, {
            duration: 500,
            toValue: 0,
            useNativeDriver: true,
        }).start()
    }

    function handleCallback() {
        Animated.timing(boxOpacityAnimationValue, {
            duration: 500,
            toValue: 1,
            useNativeDriver: true,
        }).start(() => {
            // boxOpacityAnimationValue.setValue(0.5)
            Animated.timing(boxOpacityAnimationValue, {
                duration: 500,
                toValue: 0,
                useNativeDriver: true
            }).start()
        })
    }

    const opacityStyle = {
        opacity: boxOpacityAnimationValue
    }

    return (
      <View style={styles.container}>
          <Animated.View style={[styles.box, opacityStyle]}></Animated.View>
          <Button onPress={handleFadeInBox} color="black" title="Fade this red box in" />
          <Button onPress={handleFadeOutBox} color="green" title="Fade this red box out" />
          <Button onPress={handleCallback} color="blue" title="Handle callback of timing method" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
      width: 200,
      height: 200,
      backgroundColor: "red",
      marginBottom: 40,
    },
})
