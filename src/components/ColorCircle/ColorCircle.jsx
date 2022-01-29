import styles from './ColorCircle.module.scss';
import classNames from 'classnames';

const ColorCircle = ({ color, className }) => (
  <div className={classNames(styles.circle, className)} style={{ backgroundColor: color }} />
);

export default ColorCircle;