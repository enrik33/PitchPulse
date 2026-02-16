import { render, screen } from "@testing-library/react";
import MatchPage from "../MatchPage";
import { useMatch } from "../../hooks/useMatch";

vi.mock("../../hooks/useMatch", () => ({
  useMatch: vi.fn()
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: vi.fn(() => ({ matchId: "544448" }))
  };
});

describe("MatchPage", () => {
  it("renders loading state", () => {
    useMatch.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null,
      refetch: vi.fn()
    });

    render(<MatchPage />);

    expect(screen.getByLabelText("Loading match")).toBeInTheDocument();
  });

  it("renders error state", () => {
    useMatch.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      error: { message: "Match unavailable" },
      refetch: vi.fn()
    });

    render(<MatchPage />);

    expect(screen.getByText("Unable to load match")).toBeInTheDocument();
    expect(screen.getByText("Match unavailable")).toBeInTheDocument();
  });

  it("renders empty state when no match data is returned", () => {
    useMatch.mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
      error: null,
      refetch: vi.fn()
    });

    render(<MatchPage />);

    expect(screen.getByText("Match unavailable")).toBeInTheDocument();
  });

  it("renders key match metadata and score when data exists", () => {
    useMatch.mockReturnValue({
      data: {
        id: 544448,
        status: "LIVE",
        utcDate: "2026-02-16T20:00:00Z",
        venue: null,
        homeTeam: { id: 1, name: "Girona FC", crestUrl: null },
        awayTeam: { id: 2, name: "FC Barcelona", crestUrl: null },
        score: { home: 0, away: 0 }
      },
      isLoading: false,
      isError: false,
      error: null,
      refetch: vi.fn()
    });

    render(<MatchPage />);

    expect(screen.getByText("Match Detail")).toBeInTheDocument();
    expect(screen.getByText("Girona FC")).toBeInTheDocument();
    expect(screen.getByText("FC Barcelona")).toBeInTheDocument();
    expect(screen.getByText("Venue to be confirmed")).toBeInTheDocument();
  });
});
