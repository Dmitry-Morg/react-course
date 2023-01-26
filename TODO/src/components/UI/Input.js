import styles from "./Input.module.css"

function Input(props) {
  const {children, placeholder} = props
  return (
    <input
    {...props}
    className={styles.input}
    placeholder={placeholder}
    >
      {children}
    </input>
  )
}
export default Input