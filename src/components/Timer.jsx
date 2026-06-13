import { useState, useEffect } from 'react';

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
            console.log('Компонент размонтирован, интервал очищен'); 
        };
    }, []); 

    return (
        <h3>Таймер (счётчик): {seconds} сек.</h3>
    );
};