import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) {
        return <div>Select a Song</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: <strong>{song.title}</strong>
                <br />
                Duration: <strong>{song.duration}</strong>
            </p>
        </div>
    )
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);