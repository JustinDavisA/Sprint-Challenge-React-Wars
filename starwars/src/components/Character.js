import React from 'react';

function Character(props) {
    return (
        <div className="char-card">
            <h1>{props.char.name}</h1>
            <p>
                <strong>Eye Color:</strong> {props.char.eye_color}
            </p>
        </div>
    );
}

export default Character;