import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './Navbar.module.scss';
import { ReactComponent as LogoutIcon } from '../../assets/icons/LogoutIcon.svg';
import { localStorageHelper } from '../../helpers';
import { RoutePath } from '../../constants';

const Navbar: FC = () => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate(RoutePath.LOGIN);
    localStorageHelper.clearLocalStorage();
  };
  const isAuthenticated = localStorageHelper.getFromLocalStorage('accessToken');

  return (
    <div className={styles.navbar__container}>
      {isAuthenticated && <Button styleClass="btn__logout" onClick={logOut} label="Logout" icon={<LogoutIcon />} />}
    </div>
  );
};

export default Navbar;
