import { db } from "../db";
import { IUser } from "../models/user.model";


class UserRepository {
    async findAllUser(): Promise<IUser[]> {
        const query = `
            SELECT uuid, username FROM application_user
        `;

        const { rows } = await db.query<IUser>(query);
    
        return rows || [];
    }

    async findById(uuid: string): Promise<IUser> {
        const query = `
            SELECT uuid, username FROM application_user WHERE uuid = $1
        `;
        const values = [uuid];

        const { rows } = await db.query<IUser>(query, values);
        const [ user ] = rows;

        return user;
    }

    async create(user: IUser): Promise<string> {
        const query = `
            INSERT INTO application_user (username, password) VALUES ($1, crypt($2, '123456'))
            RETURNING uuid
        `;
        const values = [user.username, user.password];

        const { rows } = await db.query<{ uuid: string }>(query, values);
        const [newUser] = rows;

        return newUser.uuid;
    }

    async update(user: IUser): Promise<void> {
        const query = `
            UPDATE application_user 
            SET 
                username = $1, 
                password = crypt($2, '123456') 
            WHERE uuid = $3
        `;
        const values = [user.username, user.password, user.uuid];

        await db.query<{ uuid: string }>(query, values);
    } 

    async remove(uuid: string): Promise<void> {
        const query = `
            DELETE
            FROM application_user
            WHERE uuid = $1
        `;
        const values = [uuid];

        await db.query(query, values);
    }
}

export default new UserRepository();