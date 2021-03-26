import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Styles {
  keyMomentsItem: ViewStyle;
  timeContainer: ViewStyle;
  time: TextStyle;
  commentary: TextStyle;
}

export default StyleSheet.create<Styles>({
  keyMomentsItem: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 8,
  },
  timeContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  time: {
    fontSize: 18,
    fontWeight: '500',
  },
  commentary: {
    fontSize: 16,
  },
});
