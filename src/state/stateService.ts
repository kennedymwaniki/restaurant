import { stateTable, TIUser, TSUser } from "../drizzle/schema";
import db from "../drizzle/db";

import { eq } from "drizzle-orm";

export const stateService = async () => {
  return await db.query.stateTable.findMany();
};

//byID
export const getStateService = async (
  id: number
): Promise<TSUser | undefined> => {
  return await db.query.usersTable.findFirst({
    where: eq(stateTable.id, id),
  });
};

export const createStateService = async (user: TIUser) => {
  await db.insert(stateTable).values(user);
  return "state created successfully";
};

export const updateStateService = async (id: number, user: TIUser) => {
  await db.update(stateTable).set(user).where(eq(stateTable.id, id));
  return "state updated successfully";
};

export const deletestateService = async (id: number) => {
  await db.delete(stateTable).where(eq(stateTable.id, id));
  return "state deleted successfully";
};
