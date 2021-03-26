import {StyleSheet, ViewStyle} from 'react-native';

interface Styles {
  item: ViewStyle;
  activeItem: ViewStyle;
  minuteSection: ViewStyle;
  minuteContainer: ViewStyle;
  messageContainer: ViewStyle;
  line: ViewStyle;
}

export default StyleSheet.create<Styles>({
  item: {
    flexDirection: 'row',
    minHeight: 34,
  },
  activeItem: {
    backgroundColor: '#D3D3D3',
  },
  minuteSection: {
    width: 70,
    alignItems: 'center',
  },
  minuteContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    marginVertical: 10,
    flex: 1,
    paddingRight: 10,
  },
  line: {
    width: 2,
    backgroundColor: '#333',
    flex: 0.5,
  },
});
