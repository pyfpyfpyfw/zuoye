import { useState } from 'react';
import Clock from './clock';
import Cube from './cube';
import './index.css';
import Birds from './birds';

export default () => {
  const [task, setTask] = useState<any>(null);
  return (
    <div>
      <h1>210812020 的个人作业内容</h1>
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
      <button
        onClick={() => {
          setTask('birds');
        }}
      >
        查看Three.js模型
      </button>
      <a href='https://github.com/MoveLikeRabbit/3DScene' target='_blank'>
        游戏场景大作业
      </a>
      {task === 'clock' && <Clock />}
      {task === 'cube' && <Cube />}
      {task === 'birds'&& <Birds />}
    </div>
  );
};
