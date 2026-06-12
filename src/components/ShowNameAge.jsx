import React from 'react';

export default function ShowNameAge({name = "Unknown", age = 0}) {
    
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
        </div>
    );
}