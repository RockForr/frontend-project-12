import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import error404Img from '../images/error404Img.svg';
import routes from '../routes';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <img
        src={error404Img}
        width={250}
        height={250}
        alt={t('pageNotFound.notFound')}
        className="img-fluid h-20"
      />
      <h1 className="text-muted h4">{t('pageNotFound.notFound')}</h1>
      <p className="text-muted">
        {t('pageNotFound.clickTheLink')}
        <Link to={routes.home()}>{t('pageNotFound.goToHomePage')}</Link>
      </p>
    </div>
  );
};
export default NotFoundPage;