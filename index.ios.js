/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const zone1 = {
  top: 40,
  left: 0,
  right: 0,
  height: 50,
  position: 'absolute',
  backgroundColor: "red"
}

const zone2 = {
  left: 0,
  right: 0,
  bottom: 0,
  height: 50,
  position: 'absolute',
  backgroundColor: "blue"
}

const getDirectionAndColor = ({ moveX, moveY, dx, dy}) => {
  const draggedDown = dy > 30;
  const draggedUp = dy < -30;
  const draggedLeft = dx < -30;
  const draggedRight = dx > 30;
  const isRed = moveY < 90 && moveY > 40 && moveX > 0 && moveX < width;
  const isBlue = moveY > (height - 50) && moveX > 0 && moveX < width;
  let dragDirection = '';

  if (draggedDown || draggedUp) {
    if (draggedDown) dragDirection += 'dragged down '
    if (draggedUp) dragDirection +=  'dragged up ';
  }

  if (draggedLeft || draggedRight) {
    if (draggedLeft) dragDirection += 'dragged left '
    if (draggedRight) dragDirection +=  'dragged right ';
  }

  if (isRed) return `red ${dragDirection}`
  if (isBlue) return `blue ${dragDirection}`
  if (dragDirection) return dragDirection;
}

class panreject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zone: "Still Touchable"
    }

    this.onPress = this.onPress.bind(this);
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({

      // Ask to be the responder:
      // onStartShouldSetPanResponder: (evt, gestureState) => true,
      // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder:(evt, gestureState) => {
        return !!getDirectionAndColor(gestureState);
      },

      onPanResponderGrant: (evt, gestureState) => {
   
      },
      onPanResponderMove: (evt, gestureState) => {
        const drag = getDirectionAndColor(gestureState);
        this.setState({
          zone: drag,
        })
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  onPress() {
    this.setState({
      zone: "I got touched with a parent pan responder"
    })
  }

  render() {
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
        <View style={styles.zone1} />
        <View style={styles.center}>
          <TouchableOpacity onPress={this.onPress}>
            <Text>{this.state.zone}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.zone2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center" 
  },
  zone1,
  zone2,
});

AppRegistry.registerComponent('panreject', () => panreject);
