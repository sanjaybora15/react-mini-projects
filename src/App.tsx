import React from 'react';
import FolderIndex from './folder-file-app';
import {mockData} from "./folder-file-app/data";

function App() {
  return (
    <div className="App">
      <FolderIndex fileData={mockData}/>
    </div>
  );
}

export default App;
