import { User, UserProps } from "src/Inlar/Entities/User";

export abstract class UserRepository {
    abstract createUser(user: User | UserProps): Promise<void>
    abstract getUserById(id: number): Promise<User | undefined>
    abstract getUserByEmail(email: string): Promise<User | undefined>
    abstract loginUser(email: string, password: string): Promise<User | undefined>
}