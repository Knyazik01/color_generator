import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.colorsContainer}>
        {/*<ColorCircle className={classNames(styles.colorCircle, styles.RGB)} color={COLORS.HEX.RED} />*/}
        {/*<ColorCircle className={classNames(styles.colorCircle, styles.RGB)} color={COLORS.HEX.GREEN} />*/}
        {/*<ColorCircle className={classNames(styles.colorCircle, styles.RGB)} color={COLORS.HEX.BLUE} />*/}
      </div>
      <div className={styles.colorsContainer}>
        {/*<ColorCircle className={classNames(styles.colorCircle, styles.CMYK)} color={COLORS.HEX.CYAN} />*/}
        {/*<ColorCircle className={classNames(styles.colorCircle, styles.CMYK)} color={COLORS.HEX.MAGENTA} />*/}
        {/*<ColorCircle className={classNames(styles.colorCircle, styles.CMYK)} color={COLORS.HEX.YELLOW} />*/}
        {/*<ColorCircle className={classNames(styles.colorCircle, styles.CMYK)} color={COLORS.HEX.KEY} />*/}
      </div>
    </div>
  );
}

export default App;