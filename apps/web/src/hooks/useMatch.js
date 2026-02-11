import { useQuery } from "@tanstack/react-query";
import { getMatch } from "../services/laligaApi";

export function useMatch(matchId) {
  return useQuery({
    queryKey: ["match", matchId],
    queryFn: () => getMatch(matchId),
    enabled: Boolean(matchId)
  });
}
