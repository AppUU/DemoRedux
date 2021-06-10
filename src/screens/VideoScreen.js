import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const url = 'https://video.rcycpx.com/8cd975feed1345c28b39e2e3d7e452d6/38e59515279ce1d3b610eaee08948095-fd.m3u8?auth_key=1623308956-55c7d7073ade41cfa5d4d5fb913d12a3-0-ad51fb0b778f0c21a18fac73d0275080'

export default function VideoScreen() {
    return (
        <View style={styles.container}>
            <Video
                paused={false}
                style={styles.videoContainer}
                source={{ uri: url }}
                onLoadStart={e => console.log(e)}
                onLoad={e => console.log(e)}
                onBuffer={e => console.log(e)}
                onError={e => console.log(e)}
                onProgress={e => console.log(e)}
                onVideoProgress={e => console.log(e)}
                onEnd={e => console.log(e)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoContainer: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width * 9 / 16,
        backgroundColor: '#000000',
    }
});