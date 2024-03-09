import { useEffect } from "react";
import { Result } from "../model/result";

export const useSetFocus = (
  textAreaElement: HTMLTextAreaElement | null,
  data?: Result
) =>
  useEffect(() => {
    if (data?.fact && textAreaElement !== null) {
      const endOfFirstWord = data.fact.indexOf(" ");
      textAreaElement.focus();
      textAreaElement.setSelectionRange(endOfFirstWord, endOfFirstWord);
    }
  }, [data, textAreaElement]);
