import React from 'react';
//import actions from '../actions'; // as it is not mentioned which file to import from actions folder, 
                                // so webpack (in-built library) automatically looks for and imports index.js file
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;