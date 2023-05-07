import { GfxDesigns } from "@/Shared/Data";
import Image from "next/image";

import styles from "@/styles/Gfx.module.scss";
import { Carousel } from "@mantine/carousel";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Gfx() {
  return (
    <div className={styles.gfxContainer} id="gfx">
      <h1>Graphic Designs</h1>

      <div className={styles.gfxWorks}>
        <Carousel withIndicators loop withControls={false} height={600}>
          {GfxDesigns.map((design) => {
            return (
              <Carousel.Slide key={design.id} alt="gfx" align="center">
                <Image src={design.path} alt="gfx" height={560} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
