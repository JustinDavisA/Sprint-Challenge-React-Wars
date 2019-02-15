import React from 'react';

function Character(props) {
    return (
        <div className="char-card">
            <h1>{props.char.name}</h1>
            <div>
                <strong>Race:</strong> {props.char.race}
                <strong>Skin Color:</strong> {props.char.skin_color}
                <strong>Hair Color:</strong> {props.char.hair_color}
                <strong>Eye Color:</strong> {props.char.eye_color}
                <strong>Height:</strong> {props.char.height}
            </div>
        </div>
    );
}

export default Character;