import { useQuery } from "@tanstack/react-query";
import { getTodayMatches } from "../services/laligaApi";

export function useTodayMatches() {
  return useQuery({
    queryKey: ["today-matches"],
    queryFn: getTodayMatches
  });
}
