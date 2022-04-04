import { useEffect } from "react";

export const useTitle = (openItem) => {
  //const [title, setTitle] = useState("MrDonald's");

  useEffect(() => {
    let title = "MrDonald's";

    if (openItem) {
      title += ` - ${openItem.name}`;
    }
    document.title = title;
    console.log(openItem);
  }, [openItem]);
};
