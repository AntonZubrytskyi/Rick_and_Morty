import React, { FC } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './Pagination.module.scss';
import Button from '../UI/Button/Button';

interface IPaginationProps {
  totalPages: number;
  page: number;
  setPage: (page: number) => void
}

const Pagination: FC<IPaginationProps> = ({ totalPages, setPage, page }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div className={styles.pagination}>
      <Button
        styleClass="btn__paginate__double__left"
        onClick={() => setPage(1)}
        disabled={isFirstPage}
        icon={<AiOutlineDoubleLeft size={14} />}
      />
      <Button
        styleClass="btn__paginate__left"
        onClick={() => setPage(page - 1)}
        disabled={isFirstPage}
        icon={<IoIosArrowBack size={14} />}
      />

      <span className={styles.pagination__page}>
        {page}
        {' '}
        /
        {' '}
        {totalPages}
      </span>

      <Button
        styleClass="btn__paginate__right"
        onClick={() => setPage(page + 1)}
        disabled={isLastPage}
        icon={<IoIosArrowForward size={14} />}
      />
      <Button
        styleClass="btn__paginate__double__right"
        onClick={() => setPage(totalPages)}
        disabled={isLastPage}
        icon={<AiOutlineDoubleRight size={14} />}
      />
    </div>
  );
};

export { Pagination };
