import { Comment } from './components/Comment';
import { useState } from 'react';

import { AppRoutes } from './Routes';

function App() {

  // const [comments, setComment] = useState<string[]>([
  //   'Comment Example',
  // ]); //tipando como string e como uma lista de string

  // function createComment() {
  //   setComment([...comments, 'New Comment']);
  // }
  
  return (
    <AppRoutes />
  )
}

export default App
