import { Request, Response } from 'express';
import { User, users } from './users'
import * as jtw from 'jsonwebtoken';
import {apiConfig} from './api-config'

export const handleAuthentication = (req: Request, resp: Response) => {
    const user: User = req.body;

    if (isValid(user)) {

        const dbUser = users[user.email];
        const token = jtw.sign({ name: dbUser.name, iss: 'meat-api' }, apiConfig.secret)

        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token })

    } else {
        resp.status(403).json({ message: 'Dados invalidos' });
    }
}

function isValid(user: User): boolean {

    if (!user) {
        return false;
    }
    const dbUser: User = users[user.email]

    console.dir(dbUser);

    return dbUser !== undefined && dbUser.matches(user);
}
