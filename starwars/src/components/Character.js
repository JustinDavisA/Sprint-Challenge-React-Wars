import React from 'react';

function Character(props) {
    return (
        <div className="card-list">
            <div className="char-card">
                <h1>{props.char.name}</h1>
                <div className="phys-details">
                    <strong>Gender:</strong> {props.char.gender}
                    <strong>Skin Color:</strong> {props.char.skin_color}
                    <strong>Hair Color:</strong> {props.char.hair_color}
                    <strong>Eye Color:</strong> {props.char.eye_color}
                    <strong>Height:</strong> {props.char.height}
                    <strong>Mass:</strong> {props.char.mass}
                </div>
            </div>
        </div>
    );
}

export default Character;