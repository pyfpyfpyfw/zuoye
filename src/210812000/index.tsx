import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812000 举个例子的作业内容</h1>
      <button
        onClick={() => {
          setTask('clock');
        }}
      >
        查看canvas钟表
      </button>

      <button
        onClick={() => {
          setTask('cube');
        }}
      >
        查看canvas cube
      </button>
      <a href='github地址' target='_blank'>
        three.js 模型加载作业
      </a>
      <a href='https://github.com/MoveLikeRabbit/3DScene' target='_blank'>
        游戏场景大作业
      </a>
      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
    </div>
  );
};
