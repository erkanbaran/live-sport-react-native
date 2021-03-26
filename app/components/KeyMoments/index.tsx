import React, {useRef, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import {IKeyMomentItem} from '../../models/api/commentary';
import DownArrowIcon from '../icons/downArrow';
import UpArrowIcon from '../icons/upArrow';
import Item from './Item';
import styles from './styles';

interface IProps {
  keyMoments: IKeyMomentItem[];
  setHighlightItemId(id: number): void;
  toggleKeyMoments(): void;
  isKeyMomentsVisible: boolean;
}

export default function KeyMoments({
  keyMoments,
  setHighlightItemId,
  toggleKeyMoments,
  isKeyMomentsVisible,
}: IProps) {
  const keyMomentsHeight = isKeyMomentsVisible ? 180 : 90;

  return (
    <View style={[styles.keyMoments, {height: keyMomentsHeight}]}>
      <Text style={styles.title}>Key moments</Text>
      <TouchableOpacity onPress={toggleKeyMoments} style={styles.chevronButton}>
        {isKeyMomentsVisible ? <DownArrowIcon /> : <UpArrowIcon />}
      </TouchableOpacity>
      {isKeyMomentsVisible && (
        <>
          {keyMoments.map((item, index) => (
            <Item
              item={item}
              key={index}
              onPressKeyMomentItem={() => setHighlightItemId(item.commentaryId)}
            />
          ))}
        </>
      )}
    </View>
  );
}
