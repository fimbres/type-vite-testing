import { describe, beforeEach, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Users } from "@/components/Users";

describe("Users.tsx", () => {
  beforeEach(() => {
    render(<Users />);
  });

  test("Users is rendering", async () => {
    const users = await screen.findAllByTestId('users');
    expect(users).toBeDefined();
  });

  test("Users is fetching data", async () => {
    const users = await screen.findAllByTestId('user-card');
    const noUsersMessage = await screen.queryByTestId('no-users');

    expect(noUsersMessage).toBeFalsy();
    expect(users.length).toBeGreaterThanOrEqual(4);
  });

  test("UserCards are rendering data as expected", async () => {
    const users = await screen.findAllByTestId('user-card');

    expect(users[0].textContent?.includes('Leanne Graham')).toBeTruthy();
    expect(users[0].textContent?.includes('Kulas Light, Gwenborough')).toBeTruthy();
    expect(users[0].textContent?.includes('Romaguera-Cron')).toBeTruthy();
  });
});
