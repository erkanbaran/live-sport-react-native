import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  title: TextStyle;
  keyMoments: ViewStyle;
  chevronButton: ViewStyle;
}

export default StyleSheet.create<Styles>({
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  keyMoments: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 2,
    borderTopColor: '#333',
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  chevronButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    padding: 8,
    borderColor: '#333',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
