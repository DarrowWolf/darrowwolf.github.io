import { useEffect } from "react";

interface MetaHeadProps {
  title: string;
}

function MetaHead({ title }: MetaHeadProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}

export default MetaHead;