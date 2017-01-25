# react-native-parent-panresponder-touch

Showing how to use a parent pan responder but only grant it with in certain areas or over certain distances.

This is essentially how React Native Navigation works and limits the response to the edges of the layout of the item.

Blog Article: http://browniefed.com/blog/react-native-maintain-touchable-items-with-a-parent-panresponder/

You can check it out here as it's more elegant.
https://github.com/facebook/react-native/blob/a2fb703bbb988038323c55b29b40e8f5ff52966d/Libraries/CustomComponents/NavigationExperimental/NavigationCardStackPanResponder.js#L97


The key is to use `onMoveShouldSetPanResponder`. If you specify this, you will receive all the `event` and `gestureState` information and when you finally return `true` it will trigger the flow through the `PanResponder` like you'd expect.

If you move in any direction 30 pixels than it will trigger and set the directions you've moved.
If you go inside a color it will also add the color.

![http://i.imgur.com/r1eZgLn.gif](http://i.imgur.com/r1eZgLn.gif)


