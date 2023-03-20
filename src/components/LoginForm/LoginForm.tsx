import React, { FC } from 'react';
import styles from './LoginForm.module.scss';
import Button from '../UI/Button/Button';
import { ReactComponent as GoogleIcon } from '../../assets/icons/GoogleIcon.svg';

interface ILoginForm {
  login: () => void
}
const LoginForm: FC<ILoginForm> = ({ login }) => (
  <div className={styles.form__container}>
    <Button styleClass="btn__auth" onClick={login} label="Continue with Google" icon={<GoogleIcon />} />
  </div>
);

export default LoginForm;
