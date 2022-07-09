import React from "react";
import Typewriter from "typewriter-effect";
function TypeRoles() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "React Developer",
            "User Experience Designer",
            "Graphic Designer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
          speed: 60,
        }}
      />
    </div>
  );
}

export default TypeRoles;
