
export default () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>clock</title>
            <style>
                canvas {
                    display: block;
                    margin: 50px auto;
                }
            </style>
        </head>
        
        <body>
            <!-- 增大 canvas 尺寸 -->
            <canvas id="clock" width="400" height="400"></canvas>
        
            <script>
                // 获取 canvas 元素
                var canvas = document.getElementById("clock");
                var ctx = canvas.getContext("2d");
                var radius = canvas.height / 2;
        
                // 将原点移动到 canvas 中心
                ctx.translate(radius, radius);
                radius = radius * 0.9;
        
                // 绘制时钟外圆
                function drawClock() {
                    ctx.beginPath();
                    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
                    ctx.fillStyle = 'white'; 
                    ctx.fill();
                    ctx.strokeStyle = 'black';
                    ctx.stroke();
        
                    
        
                    // 绘制刻度
                    for (var i = 1; i <= 12; i++) {
                        var angle = (i - 3) * Math.PI / 6;
                        var thick = i % 3 === 0 ? 4 : 2;
                        // 加粗刻度线
                        ctx.lineWidth = thick;
                        ctx.beginPath();
                        var x1 = (radius - 10) * Math.cos(angle);
                        var y1 = (radius - 10) * Math.sin(angle);
                        var x2 = (radius - 38) * Math.cos(angle);
                        var y2 = (radius - 38) * Math.sin(angle);
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    }
                }
        
                // 绘制时针、分针和秒针
                function drawTime() {
                    var now = new Date();
                    //获取当前的日期时间
                    var hour = now.getHours();
                    var minute = now.getMinutes();
                    var second = now.getSeconds();
        
                    // 时针
                    hour = hour % 12;
                    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (6 * 60 * 60));//设置指针位置，弧度绘制
                    drawHand(ctx, hour, radius * 0.4, radius * 0.07);
                    // 分针
                    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
                    drawHand(ctx, minute, radius * 0.6, radius * 0.05);
        
                    // 秒针
                    second = (second * Math.PI / 30);
                    drawHand(ctx, second, radius * 0.7, radius * 0.02);
                }
        
                // 绘制指针
                function drawHand(ctx, pos, length, width) {
                    ctx.beginPath();
                    ctx.lineWidth = 4;
        
                    ctx.moveTo(0, 0);
                    ctx.rotate(pos);
                    ctx.lineTo(0, -length);
                    ctx.stroke();
                    ctx.rotate(-pos);
                }
        
                // 每秒更新时钟
                setInterval(function () {
                    ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
                    drawClock();
                    drawTime();
                }, 1000);
        
                // 初始绘制
                drawClock();
                drawTime();
            </script>
        </body>
        
        </html>
        ` }} />
    );
  };
