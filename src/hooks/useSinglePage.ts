import { useState } from "react";

interface singlePageData {
  [key: number]: any;
}

export function useSinglePage(
  value: number,
  max?: number,
  min: number = 0,
  data?: singlePageData,
) {
  const [page, setPage] = useState<number>(value);
  const isMax = max ? page >= max : false;
  const isMin = page <= min;
  const pageData = data?.[page];

  const NextPage = <T>(handler?: () => T): T | undefined => {
    const result = handler ? handler() : undefined;
    setPage((prev) => (max ? (prev >= max ? max : prev + 1) : prev + 1));
    return result;
  };

  const PrevPage = <T>(handler?: () => T): T | undefined => {
    const result = handler ? handler() : undefined;
    setPage((prev) => (prev > min ? prev - 1 : min));
    return result;
  };

  return {
    page,
    setPage,
    NextPage,
    PrevPage,
    isMax,
    isMin,
    pageData,
  };
}
