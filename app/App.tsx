/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import * as apiReponse from './api/data.json';
import {ICommentaryResponse} from './models/api/commentary';
import {KeyMoments, LiveCommentary} from './components';

const App = () => {
  const {commentaries, keyMoments} = apiReponse.data as ICommentaryResponse;

  const [isKeyMomentsVisible, setIsKeyMomentsVisible] = useState(false);
  const [activeCommentaryItemId, setActiveCommentaryItemId] = useState<
    number | null
  >(null);

  const toggleKeyMomentsVisibility = () => {
    setIsKeyMomentsVisible(!isKeyMomentsVisible);
    setActiveCommentaryItemId(null);
  };

  const onPressKeyMomentItem = (id: number) => {
    // flatListRef?.current?.scrollToIndex({index: id, animated: true});
    setActiveCommentaryItemId(id);
  };

  return (
    <SafeAreaView>
      <LiveCommentary
        commentaries={commentaries}
        activeCommentaryItemId={activeCommentaryItemId}
        isKeyMomentsVisible={isKeyMomentsVisible}
      />
      <KeyMoments
        keyMoments={keyMoments}
        onPressKeyMomentItem={onPressKeyMomentItem}
        toggleKeyMomentsVisibility={toggleKeyMomentsVisibility}
        isKeyMomentsVisible={isKeyMomentsVisible}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
