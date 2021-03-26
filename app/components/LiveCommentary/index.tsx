import React, {useRef, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import {ICommentaryItem} from '../../models/api/commentary';
import Item from './Item';
import styles from './styles';

interface IProps {
  commentaries: ICommentaryItem[];
  activeCommentaryItemId: number | null;
  isKeyMomentsVisible: boolean;
}

export default function LiveCommentary({
  commentaries,
  activeCommentaryItemId,
  isKeyMomentsVisible,
}: IProps) {
  const listRef = useRef<FlatList>(null);

  const keyMomentsHeight = isKeyMomentsVisible ? 180 : 90;

  return (
    <>
      <Text>Live commentary</Text>
      <FlatList
        ref={listRef}
        data={commentaries}
        renderItem={({item, index}) => (
          <Item
            item={item}
            isFirstItem={index === 0}
            isLastItem={index === commentaries.length - 1}
            activeCommentaryItemId={activeCommentaryItemId}
          />
        )}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{paddingBottom: keyMomentsHeight}}
      />
    </>
  );
}
