const request = require("supertest");
const { app } = require("../src/app");

describe("GET /api/health", () => {
  it("returns healthy status with metadata", async () => {
    const response = await request(app).get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      status: "ok",
      service: "pitchpulse-api"
    });
    expect(typeof response.body.requestId).toBe("string");
    expect(response.body.requestId.length).toBeGreaterThan(0);
    expect(Number.isNaN(Date.parse(response.body.timestamp))).toBe(false);
  });
});
