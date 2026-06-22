import { useState, useRef } from "react";

export function RefTasks() {
    const counterRef = useRef(0);

    const handleIncrement = () => {
        counterRef.current += 1;
        console.log("Счётчик без рендеринга:", counterRef.current);
    };

    const showCounterValue = () => {
        alert(`Текущее значение счётчика: ${counterRef.current}`);
    };

/////////////////////////////////////////////

    const divRef = useRef(null);

    const changeDivStyle = () => {
        if (divRef.current) {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            divRef.current.style.backgroundColor = randomColor;
        }
    };

/////////////////////////////////////////////


    const [seconds, setSeconds] = useState(0);
    const timerIdRef = useRef(null);

    const startTimer = () => {
        if (timerIdRef.current) return;
        
        timerIdRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    };

    const stopTimer = () => {
        if (timerIdRef.current) {
            clearInterval(timerIdRef.current);
            timerIdRef.current = null; 
        }
    };

    return (
        <div>

            <div>
                <h3>1. Счётчик без рендеринга</h3>
                <button onClick={handleIncrement}>
                    Увеличить счётчик
                </button>
                <button onClick={showCounterValue}>
                    Показать значение (alert)
                </button>
            </div>

            <div>
                <h3>2. Изменение стиля элемента</h3>
                <div 
                    ref={divRef} 
                    style={{ 
                        width: "100px",
                        height: "100px",
                        backgroundColor: "lightblue",
                        margin: "0 auto"
                    }}
                ></div>
                <button onClick={changeDivStyle}>Изменить цвет div</button>
            </div>

            <div>
                <h3>3. Таймер с возможностью остановки</h3>
                <p>Секунды: {seconds}</p>
                <button onClick={startTimer}>
                    Старт
                </button>
                <button onClick={stopTimer}>
                    Стоп
                </button>
            </div>
            <hr width="700px" />
        </div>
    );
}