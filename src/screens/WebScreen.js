import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


const scriptToRemoveHeader = `
var headEl = document.querySelector('.head');
var bodyEl = document.querySelector('.body');
if (headEl && bodyEl) {
  var title = document.querySelector('.title').textContent;
  window.ReactNativeWebView.postMessage(title);
  headEl.remove();
  bodyEl.style.paddingTop = 0;
}
`;

export default function WebScreen({ navigation, route }) {

    return (
        <WebView
            style={styles.container}
            source={route.params.source}
            startInLoadingState={true}
            injectedJavaScript={scriptToRemoveHeader}
            onMessage={(event) => {
                console.log(event.nativeEvent.data);
                navigation.setParams({ title: event.nativeEvent.data })
            }}
        />
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
