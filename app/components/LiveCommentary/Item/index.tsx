import React from 'react';
import {View, Text} from 'react-native';

import {ICommentaryItem} from '../../../models/api/commentary';

import styles from './styles';

interface IProps {
  item: ICommentaryItem;
  isFirstItem: boolean;
  isLastItem: boolean;
  highlightItemId: number | null;
}

export default function Item({
  item: {minute, commentary, id},
  isFirstItem,
  isLastItem,
  highlightItemId,
}: IProps) {
  const isActive = id === highlightItemId;
  return (
    <View style={[styles.item, isActive && styles.activeItem]}>
      <View style={styles.minuteSection}>
        {!isFirstItem && <View style={styles.line} />}
        <View style={styles.minuteContainer}>
          <Text>{minute}</Text>
        </View>
        {!isLastItem && <View style={styles.line} />}
      </View>
      <View style={styles.messageContainer}>
        <Text>{commentary}</Text>
      </View>
    </View>
  );
}
