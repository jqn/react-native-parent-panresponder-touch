# react-native-parent-panresponder-touch

Showing how to use a parent pan responder but only grant it with in certain areas or over certain distances.

This is essentially how React Native Navigation works and limits the response to the edges of the layout of the item.

You can check it out here as it's more elegant.
https://github.com/facebook/react-native/blob/a2fb703bbb988038323c55b29b40e8f5ff52966d/Libraries/CustomComponents/NavigationExperimental/NavigationCardStackPanResponder.js#L97

If you move in any direction 30 pixels than it will trigger and set the directions you've moved.
If you go inside a color it will also add the color.

![http://i.imgur.com/r1eZgLn.gif](http://i.imgur.com/r1eZgLn.gif)
