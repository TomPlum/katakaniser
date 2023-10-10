import { SettingsSectionProps } from "modules/Settings/components/SettingsSection/types.ts"
import styles from './SettingsSection.module.scss'
import { PropsWithChildren } from "react"
import { IconButton } from "@mui/material"
import { Restore } from "@mui/icons-material"
import classNames from "classnames"

const SettingSection = ({ children, title, description, onReset }: PropsWithChildren<SettingsSectionProps>) => {
  return (
    <div className={styles.section}>
      <p className={classNames(styles.heading, { [styles.noMargin]: description })}>
        <span>{title}</span>

        {onReset && (
          <IconButton onClick={onReset} className={styles.reset}>
            <Restore />
          </IconButton>
        )}
      </p>

      {description && (
        <span className={styles.desc}>
          {description}
        </span>
      )}

      {children}
    </div>
  )
}

export default SettingSection