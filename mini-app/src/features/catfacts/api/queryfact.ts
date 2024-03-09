import { useQuery } from "@tanstack/react-query";
import { Result } from "../model/result";

export const useQueryFact = () =>
  useQuery<Result>({
    queryKey: ["catfact"],
    queryFn: () =>
      fetch("https://catfact.ninja/fact").then((res) => res.json()),
    enabled: false
  });
