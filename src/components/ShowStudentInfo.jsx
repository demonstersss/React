import React from 'react';

export default function ShowStudentInfo({name = "Unknown", age = 0, group = "Unknown"}) {
    
    return (
        <div>
            <h1>Выполнил: {name}</h1>
            <h2>{age} лет</h2>
            <h3>Группа: {group}</h3>
            <hr />
        </div>
    );
}