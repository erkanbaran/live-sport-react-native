import React, {useRef, useEffect} from 'react';
import {Dimensions, Text, FlatList} from 'react-native';

import {ICommentaryItem} from '../../models/api/commentary';
import Item from './Item';
import styles from './styles';

interface IProps {
  commentaries: ICommentaryItem[];
  highlightItemId: number | null;
  isKeyMomentsVisible: boolean;
}

export default function LiveCommentary({
  commentaries,
  highlightItemId,
  isKeyMomentsVisible,
}: IProps) {
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    const itemIndex = commentaries.findIndex(
      item => item.id === highlightItemId,
    );
    if (listRef.current !== null && itemIndex !== -1) {
      listRef.current.scrollToIndex({index: itemIndex});
    }
  }, [highlightItemId]);

  const {height} = Dimensions.get('window');

  const keyMomentsHeight = isKeyMomentsVisible ? height / 4 : 100;

  return (
    <>
      <Text style={styles.title}>Live commentary</Text>
      <FlatList
        ref={listRef}
        data={commentaries}
        renderItem={({item, index}) => (
          <Item
            item={item}
            isFirstItem={index === 0}
            isLastItem={index === commentaries.length - 1}
            highlightItemId={highlightItemId}
          />
        )}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{paddingBottom: keyMomentsHeight}}
      />
    </>
  );
}
