import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  title: TextStyle;
  screen: ViewStyle;
}

export default StyleSheet.create<Styles>({
  title: {
    fontSize: 24,
    textAlign:'center'
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
