import styles from './AnkiTitle.module.scss'
import { useTranslation } from "react-i18next"
import { ReactComponent as AnkiStar } from 'assets/anki.svg'
import { AnkiTitleProps } from "modules/Newspaper/components/AnkiTitle/types.ts"

const AnkiTitle = ({ button, disabled, onClick }: AnkiTitleProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.article.anki.title' })

  return (
    <div className={styles.wrapper}>
      <div className={styles.outer}>
        <div className={styles.left}>
          <p>{t('left')}</p>
        </div>

        <div className={styles.inner}>
          <p className={styles.main}>
            {t('main')}
          </p>
        </div>

        <div className={styles.right}>
          <p>{t('right')}</p>
        </div>
      </div>

      <button className={styles.button} title={t('button')} onClick={onClick} disabled={disabled}>
        <AnkiStar className={styles.ankiLogo} />
        <span>{button ?? t('button')}</span>
      </button>
    </div>
  )
}

export default AnkiTitle