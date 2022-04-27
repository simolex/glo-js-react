import { useEffect } from "react";

export const useTitle = (openItem) => {
  //const [title, setTitle] = useState("MrYonald's");

  useEffect(() => {
    let title = "MrYonald's";

    if (openItem) {
      title += ` - ${openItem.name}`;
    }
    document.title = title;
  }, [openItem]);
};
