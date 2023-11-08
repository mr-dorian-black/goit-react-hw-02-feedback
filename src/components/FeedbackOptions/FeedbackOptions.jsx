import css from './FeedbackOptions.module.css';
import { nanoid } from "nanoid";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
     return <div className={css['container']}>
          {options.map(option => (
               <button className={css['button']} key={nanoid()} type="button" onClick={() => onLeaveFeedback(`${option}`)}>{option}</button>
          ))}
     </div>
}
