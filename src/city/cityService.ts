import db from "../drizzle/db";
import { stateTable } from "../drizzle/schema";

export const cityService = async () => {
  return await db.query.stateTable.findMany({});
};
