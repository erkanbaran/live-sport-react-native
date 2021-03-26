import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {IKeyMomentItem} from '../../../models/api/commentary';

import styles from './styles';

interface Props {
  item: IKeyMomentItem;
  onPressKeyMomentItem(id: number): void;
}

export default function Item({
  item: {commentary, minute, commentaryId},
  onPressKeyMomentItem,
}: Props) {
  const onPress = () => onPressKeyMomentItem(commentaryId);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.keyMomentsItem}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{minute}</Text>
        </View>
        <Text style={styles.commentary}>{commentary}</Text>
      </View>
    </TouchableOpacity>
  );
}
