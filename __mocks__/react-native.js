'use strict';

var React = require('react');
var ReactNative = React;

ReactNative.StyleSheet = {
  create: function(styles) {
    return styles;
  }
};

class View extends React.Component {}
class Text extends React.Component {}
class TouchableHighlight  extends React.Component {}

ReactNative.View = View;
ReactNative.Text = Text;
ReactNative.TouchableHighlight = TouchableHighlight;

module.exports = ReactNative;
