import EmailOctopusForm from "./components/EmailOctopusForm/EmailOctopusForm";

import logo from "./assets/interzone-logo.jpg";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.landing}>
      <div>
        <img className={styles.logo} src={logo} alt="Interzone logo" />
        <EmailOctopusForm />
      </div>
    </div>
  );
};

export default App;
