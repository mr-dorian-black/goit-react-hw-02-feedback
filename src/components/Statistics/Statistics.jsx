import { nanoid } from 'nanoid';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const list = [
    { label: 'Good', value: good, type: 'number' },
    { label: 'Neutral', value: neutral, type: 'number' },
    { label: 'Bad', value: bad, type: 'number' },
    { label: 'Total', value: total, type: 'number' },
    { label: 'Positive feedback', value: positivePercentage, type: 'percent' },
  ];
  return (
    <ul className={css['list']}>
      {list.map(({ label, value, type }) => {
        return (
          <li key={nanoid()} className={css['item']}>
            <span>{`${label}: ${value}${type === 'percent' ? '%' : ''}`}</span>
          </li>
        );
      })}
    </ul>
  );
};
