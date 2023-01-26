import styles from "./CheckBoxCircle.module.css"

function CheckBoxCircle(props) {
  const {children,text} = props
  return (
    <div className={styles.checkBoxContainer}>
    <button
    {...props}
    className={styles.button}
    >
      <div className={styles.checkBoxItem}>{children}</div>
    </button>
    <span className={text ? `${styles.checkBoxText}` : ''}>
      {text}
    </span>
    </div>
  )
}
export default CheckBoxCircle