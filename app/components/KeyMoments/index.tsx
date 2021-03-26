import React, {useRef, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {IKeyMomentItem} from '../../models/api/commentary';
import Item from './Item';
import styles from './styles';

interface IProps {
  keyMoments: IKeyMomentItem[];
  onPressKeyMomentItem(id: number): void;
  toggleKeyMomentsVisibility(): void;
  isKeyMomentsVisible: boolean;
}

export default function KeyMoments({
  keyMoments,
  onPressKeyMomentItem,
  toggleKeyMomentsVisibility,
  isKeyMomentsVisible,
}: IProps) {
  const chevronIcon = isKeyMomentsVisible ? 'v' : '>';

  const keyMomentsHeight = isKeyMomentsVisible ? 180 : 90;

  return (
    <View style={[styles.keyMoments, {height: keyMomentsHeight}]}>
      <Text>Key moments</Text>
      <TouchableOpacity
        onPress={toggleKeyMomentsVisibility}
        style={styles.chevronButton}>
        <Text>{chevronIcon}</Text>
      </TouchableOpacity>
      {isKeyMomentsVisible && (
        <>
          {keyMoments.map((item, index) => (
            <Item
              item={item}
              key={index}
              onPressKeyMomentItem={onPressKeyMomentItem}
            />
          ))}
        </>
      )}
    </View>
  );
}
