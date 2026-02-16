import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import TodayPage from "../TodayPage";
import { useTodayMatches } from "../../hooks/useTodayMatches";

vi.mock("../../hooks/useTodayMatches", () => ({
  useTodayMatches: vi.fn()
}));

describe("TodayPage", () => {
  it("renders loading state", () => {
    useTodayMatches.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null,
      refetch: vi.fn()
    });

    render(
      <MemoryRouter>
        <TodayPage />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Loading")).toBeInTheDocument();
  });

  it("renders error state", () => {
    useTodayMatches.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
      error: { message: "Request failed" },
      refetch: vi.fn()
    });

    render(
      <MemoryRouter>
        <TodayPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Unable to load today's matches")).toBeInTheDocument();
    expect(screen.getByText("Request failed")).toBeInTheDocument();
  });

  it("renders empty state when no matches exist", () => {
    useTodayMatches.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
      error: null,
      refetch: vi.fn()
    });

    render(
      <MemoryRouter>
        <TodayPage />
      </MemoryRouter>
    );

    expect(screen.getByText("No matches today")).toBeInTheDocument();
  });
});
