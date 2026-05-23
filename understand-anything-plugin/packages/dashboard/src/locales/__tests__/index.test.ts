import { describe, expect, it } from "vitest";
import { resolveLocaleKey } from "../index";

describe("resolveLocaleKey", () => {
  it("defaults to Korean when no output language is configured", () => {
    expect(resolveLocaleKey(undefined)).toBe("ko");
  });

  it("keeps explicit English output supported", () => {
    expect(resolveLocaleKey("en")).toBe("en");
    expect(resolveLocaleKey("english")).toBe("en");
  });
});
