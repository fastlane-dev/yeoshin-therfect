import React, { useEffect, useState } from "react";

import { Web } from "@/components/web/Web";
import Mobile from "@/components/mobile/Mobile";

export default function App() {
  const [isWeb, setIsWeb] = useState(true);

  useEffect(() => {
    setIsWeb(window.innerWidth > 1024);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setIsWeb(false);
      } else {
        setIsWeb(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 1024) {
          setIsWeb(false);
        } else {
          setIsWeb(true);
        }
      });
    };
  }, []);
  return isWeb ? <Web /> : <Mobile />;
}
