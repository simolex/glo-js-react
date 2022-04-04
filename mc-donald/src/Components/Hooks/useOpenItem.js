import { useState, useEffect } from "react";

export function useOpenItem() {
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    let title = "MrDonald's";
    if (openItem) {
      title += ` - ${openItem.name}`;
    }
    document.title = title;
  }, [openItem]);

  return { openItem, setOpenItem };
}
