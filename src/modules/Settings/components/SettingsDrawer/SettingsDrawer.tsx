import { Drawer } from "@mui/material"
import styles from './SettingsDrawer.module.scss'
import { useTranslation } from "react-i18next"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { SourcesSelector } from "modules/Settings/components/SourcesSelector/SourcesSelector.tsx"
import LanguageControls from "modules/Settings/components/LanguageControls"

const SettingsDrawer = () => {
  const { open, setOpen } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'settings' })

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={() => setOpen(false)}
      classes={{ root: styles.drawer }}
      SlideProps={{ onAnimationEnd: () => setOpen(false) }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>
          {t('title')}
        </h2>

        <div className={styles.section}>
          <p className={styles.heading}>
            {t('font')}
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.heading}>
            {t('language')}
          </p>

          <LanguageControls />
        </div>

        <div className={styles.section}>
          <p className={styles.heading}>
            {t('sources')}
          </p>

          <SourcesSelector />
        </div>
      </div>
    </Drawer>
  )
}

export default SettingsDrawer