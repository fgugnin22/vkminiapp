import { useQuery } from "@tanstack/react-query";
import { Result } from "../model/result";

export const useQueryAge = (debounced: string) =>
  useQuery<Result>({
    queryKey: ["agify", debounced],
    queryFn: async () => {
      return await fetch(`https://api.agify.io/?name=${debounced}`).then(
        (res) => res.json()
      );
    },
    enabled: debounced.length > 2
  });
