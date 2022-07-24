import React from "react";
import { GfxDesigns } from "../../Shared/Data";

import "./gfx.styles.scss";

const Gfx = () => {
  return (
    <div className="gfx-container" id="gfx">
      <h1>Graphic Designs</h1>
      {GfxDesigns.map((design) => {
        return <img key={design.id} src={design.path} alt="gfx" />;
      })}
    </div>
  );
};

export default Gfx;
