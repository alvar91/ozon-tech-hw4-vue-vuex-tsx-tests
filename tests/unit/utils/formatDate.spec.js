import { formatDate } from "@/utils/formatDate";
import { mockDate, correctFormatedMockDate } from "../../mock/mockDate";

describe("formatDate", () => {
  it("should return correct string date", () => {
    const date = formatDate(mockDate);
    expect(date).toEqual(correctFormatedMockDate);
  });
});
