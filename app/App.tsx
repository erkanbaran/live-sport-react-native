import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import * as apiReponse from './api/data.json';
import {ICommentaryResponse} from './models/api/commentary';
import {KeyMoments, LiveCommentary} from './components';

const App = () => {
  const {commentaries, keyMoments} = apiReponse.data as ICommentaryResponse;

  const [isKeyMomentsVisible, setIsKeyMomentsVisible] = useState(false);
  const [highlightItemId, setHighlightItemId] = useState<
    number | null
  >(null);

  const toggleKeyMoments = () => {
    setIsKeyMomentsVisible(!isKeyMomentsVisible);
    setHighlightItemId(null);
  };

  return (
    <SafeAreaView>
      <LiveCommentary
        commentaries={commentaries}
        highlightItemId={highlightItemId}
        isKeyMomentsVisible={isKeyMomentsVisible}
      />
      <KeyMoments
        keyMoments={keyMoments}
        setHighlightItemId={setHighlightItemId}
        toggleKeyMoments={toggleKeyMoments}
        isKeyMomentsVisible={isKeyMomentsVisible}
      />
    </SafeAreaView>
  );
};

export default App;
