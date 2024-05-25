import React, { useEffect } from 'react';

const Clock = () => {
    useEffect(() => {
        const scriptContent = `
            function updateClock() {
                const now = new Date();
                const seconds = now.getSeconds();
                const minutes = now.getMinutes();
                const hours = now.getHours();

                const secondDegrees = ((seconds / 60) * 360) + 90;
                const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
                const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

                document.querySelector('.mz').style.transform = \`rotate(\${secondDegrees}deg)\`;
                document.querySelector('.fz').style.transform = \`rotate(\${minuteDegrees}deg)\`;
                document.querySelector('.sz').style.transform = \`rotate(\${hourDegrees}deg)\`;
            }

            setInterval(updateClock, 1000);
            updateClock();
        `;

        const script = document.createElement('script');
        script.innerHTML = scriptContent;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Clock</title>
                <style>
                    body {
                        background-color: #e0f7fa;
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        flex-direction: column;
                        font-family: Arial, sans-serif;
                    }
            
                    #clock {
                        width: 300px;
                        height: 300px;
                        background-color: white;
                        border: solid 10px #00796b;
                        border-radius: 50%;
                        position: relative;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        margin-top: 20px;
                    }
            
                    #hours {
                        list-style: none;
                        position: absolute;
                        padding: 0;
                        margin: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
            
                    li {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
            
                    li p {
                        margin: 0;
                        width: 20px;
                        text-align: center;
                        transform: translateY(-140px);
                        color: #00796b;
                        font-weight: bold;
                    }
            
                    .shizhen,
                    .fenzhen,
                    .miaozhen {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
            
                    .sz,
                    .fz,
                    .mz {
                        position: absolute;
                        bottom: 50%;
                        transform-origin: bottom;
                    }
            
                    .sz {
                        width: 6px;
                        height: 90px;
                        background-color: #00796b;
                        border-radius: 3px;
                    }
            
                    .fz {
                        width: 4px;
                        height: 120px;
                        background-color: #004d40;
                        border-radius: 2px;
                    }
            
                    .mz {
                        width: 2px;
                        height: 140px;
                        background-color: #d32f2f;
                    }
            
                    .xiaoyuan {
                        position: absolute;
                        width: 15px;
                        height: 15px;
                        background-color: #00796b;
                        border-radius: 50%;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                </style>
            </head>
            
            <body>
                <div id="clock">
                    <ul id="hours">
                        <li style="transform: rotate(30deg);"><p style="transform: rotate(-30deg);">1</p></li>
                        <li style="transform: rotate(60deg);"><p style="transform: rotate(-60deg);">2</p></li>
                        <li style="transform: rotate(90deg);"><p style="transform: rotate(-90deg);">3</p></li>
                        <li style="transform: rotate(120deg);"><p style="transform: rotate(-120deg);">4</p></li>
                        <li style="transform: rotate(150deg);"><p style="transform: rotate(-150deg);">5</p></li>
                        <li style="transform: rotate(180deg);"><p style="transform: rotate(-180deg);">6</p></li>
                        <li style="transform: rotate(210deg);"><p style="transform: rotate(-210deg);">7</p></li>
                        <li style="transform: rotate(240deg);"><p style="transform: rotate(-240deg);">8</p></li>
                        <li style="transform: rotate(270deg);"><p style="transform: rotate(-270deg);">9</p></li>
                        <li style="transform: rotate(300deg);"><p style="transform: rotate(-300deg);">10</p></li>
                        <li style="transform: rotate(330deg);"><p style="transform: rotate(-330deg);">11</p></li>
                        <li style="transform: rotate(0deg);"><p style="transform: rotate(0deg);">12</p></li>
                    </ul>
            
                    <div class="shizhen">
                        <div class="sz"></div>
                    </div>
            
                    <div class="fenzhen">
                        <div class="fz"></div>
                    </div>
            
                    <div class="miaozhen">
                        <div class="mz"></div>
                    </div>
            
                    <div class="xiaoyuan"></div>
                </div>
            </body>
            </html>
        ` }} />
    );
};

export default Clock;
