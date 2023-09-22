import { BannerProps } from "modules/Newspaper/components/Banner/types.ts"
import styles from "./Banner.module.scss"
import PublicationDate from "modules/Article/components/PublicationDate"
import { IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

const Banner = ({ publisher, publishDate }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <div>
        <div className={styles.border}>
          <h1 className={styles.publisher}>
            {publisher}
          </h1>
        </div>

        <div className={styles.controls}>
          <IconButton>
            <ChevronLeft />
          </IconButton>

          <IconButton>
            <ChevronRight />
          </IconButton>
        </div>
      </div>

      <PublicationDate
        className={styles.date}
        publishDate={publishDate}
      />
    </div>
  )
}

export default Banner