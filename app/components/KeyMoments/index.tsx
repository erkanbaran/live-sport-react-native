import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';

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
  const {height} = Dimensions.get('window');
  const keyMomentsHeight = isKeyMomentsVisible ? height / 4 : 100;

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
