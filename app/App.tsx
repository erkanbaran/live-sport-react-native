import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import * as apiReponse from './api/data.json';
import {ICommentaryResponse} from './models/api/commentary';
import {KeyMoments, LiveCommentary} from './components';

const App = () => {
  // const {commentaries, keyMoments} = apiReponse.data as ICommentaryResponse;

  const [list, setList] = useState<ICommentaryResponse[]>([]);

  const [isKeyMomentsVisible, setIsKeyMomentsVisible] = useState(false);
  const [highlightItemId, setHighlightItemId] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:1337/data')
      .then(response => response.json())
      .then(json => setList(json.data))
      .catch(error => console.error(error));
  }, []);

  const toggleKeyMoments = () => {
    setIsKeyMomentsVisible(!isKeyMomentsVisible);
    setHighlightItemId(null);
  };

  return (
    <SafeAreaView>
      <LiveCommentary
        commentaries={list.commentaries}
        highlightItemId={highlightItemId}
        isKeyMomentsVisible={isKeyMomentsVisible}
      />
      <KeyMoments
        keyMoments={list.keyMoments}
        setHighlightItemId={setHighlightItemId}
        toggleKeyMoments={toggleKeyMoments}
        isKeyMomentsVisible={isKeyMomentsVisible}
      />
    </SafeAreaView>
  );
};

export default App;
