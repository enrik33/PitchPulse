import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import StandingsPage from "../StandingsPage";
import { useStandings } from "../../hooks/useStandings";

vi.mock("../../hooks/useStandings", () => ({
  useStandings: vi.fn()
}));

describe("StandingsPage", () => {
  it("renders loading state", () => {
    useStandings.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null,
      refetch: vi.fn()
    });

    render(
      <MemoryRouter>
        <StandingsPage />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Loading standings")).toBeInTheDocument();
  });

  it("renders error state", () => {
    useStandings.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      error: { message: "Standings unavailable" },
      refetch: vi.fn()
    });

    render(
      <MemoryRouter>
        <StandingsPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Unable to load standings")).toBeInTheDocument();
    expect(screen.getByText("Standings unavailable")).toBeInTheDocument();
  });

  it("renders table rows when data exists", () => {
    useStandings.mockReturnValue({
      data: [
        {
          position: 1,
          team: { id: 1, name: "Real Madrid CF", crestUrl: null },
          played: 24,
          gd: 34,
          points: 60
        }
      ],
      isLoading: false,
      isError: false,
      error: null,
      refetch: vi.fn()
    });

    render(
      <MemoryRouter>
        <StandingsPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Standings")).toBeInTheDocument();
    expect(screen.getAllByText("Real Madrid CF").length).toBeGreaterThan(0);
    expect(screen.getAllByText("60").length).toBeGreaterThan(0);
  });
});
