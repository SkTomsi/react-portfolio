import React from "react";
import { GfxDesigns } from "../../Shared/Data";
const Gfx = () => {
  return (
    <div>
      <h1>Graphic Designs</h1>
      {GfxDesigns.map((design) => {
        return <img key={design.id} src={design.path} alt="gfx" />;
      })}
    </div>
  );
};

export default Gfx;
