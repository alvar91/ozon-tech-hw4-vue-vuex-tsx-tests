import { usersService } from "@/api/service";
import { mockUsersArr } from "../../mock/mockUser";

describe("usersService", () => {
  it("should return correct users data", async () => {
    const data = await usersService.getUsers();
    expect(data).toMatchObject(mockUsersArr);
  });
});
