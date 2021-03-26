import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {IKeyMomentItem} from '../../../models/api/commentary';

import styles from './styles';

interface Props {
  item: IKeyMomentItem;
  onPressKeyMomentItem(id: number): void;
}

export default function Item({
  item: {commentary, minute, id},
  onPressKeyMomentItem,
}: Props) {
  const onPress = () => onPressKeyMomentItem(id);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.keyMomentsItem}>
        <View style={styles.timeContainer}>
          <Text>{minute}</Text>
        </View>
        <Text>{commentary}</Text>
      </View>
    </TouchableOpacity>
  );
}
