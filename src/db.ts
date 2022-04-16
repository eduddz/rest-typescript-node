import { Pool } from "pg";

const connectionString = "postgres://ytecsuuj:YxFp039QTDiNrkYtQt5kTrVxk8bh94-K@kesavan.db.elephantsql.com/ytecsuuj";

export const db = new Pool({ connectionString });

