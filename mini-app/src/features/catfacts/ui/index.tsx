import { useRef } from "react";
import CatFactsEntity from "@/entities/catfacts/ui";
import { useQueryFact } from "../api/queryfact";
import { useSetFocus } from "../api/setfocus";

const CatFacts = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { data, isSuccess, refetch, isLoading } = useQueryFact();
  useSetFocus(textAreaRef.current, data);
  return (
    <CatFactsEntity
      refetch={refetch}
      isLoading={isLoading}
      textAreaValue={isSuccess ? data.fact : ""}
      ref={textAreaRef}
    />
  );
};

export default CatFacts;
