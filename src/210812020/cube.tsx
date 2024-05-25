import React, { useEffect } from 'react';

const Cube: React.FC = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            * {
                margin: 0;
                padding: 0;
            }

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

            .parent {
                position: relative;
                height: 200px; /* 缩小高度 */
                width: 50%; /* 缩小宽度 */
                margin-left: 25%; /* 居中 */
                transform-style: preserve-3d;
                animation: rotateCube 4s linear infinite;
            }

            .box {
                position: absolute;
                left: 50%;
                top: 50%;
                margin-top: -50px; /* 调整以匹配新的高度 */
                margin-left: -50px; /* 调整以匹配新的宽度 */
                width: 100px; /* 缩小宽度 */
                height: 100px; /* 缩小高度 */
                color: #FFFFFF;
                font-size: 20px; /* 调整字体大小 */
                font-weight: 700;
                line-height: 100px; /* 调整行高 */
                text-align: center;
                opacity: 0.9;
            }

            .box1 {
                background: #ff6666;
                transform: rotateY(90deg) translateZ(-50px);
            }

            .box2 {
                background: #ffcc66;
                transform: rotateY(90deg) translateZ(50px);
            }

            .box3 {
                background: #66ff66;
                transform: rotateX(90deg) translateZ(-50px);
            }

            .box4 {
                background: #66ccff;
                transform: rotateX(90deg) translateZ(50px);
            }

            .box5 {
                background: #cc66ff;
                transform: translateZ(-50px);
            }

            .box6 {
                background: #ff66cc;
                transform: translateZ(50px);
            }

            @keyframes rotateCube {
                0% {
                    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
                }
                100% {
                    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="parent" id="css3d">
            <div className="box box1">1</div>
            <div className="box box2">2</div>
            <div className="box box3">3</div>
            <div className="box box4">4</div>
            <div className="box box5">5</div>
            <div className="box box6">6</div>
        </div>
    );
};

export default Cube;
