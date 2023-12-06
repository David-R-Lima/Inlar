import { Injectable } from "@nestjs/common";
import { User } from "src/Inlar/Entities/User";
import { UserRepository } from "../../Repositories/user-repository";
import { Either, left, right } from "src/Base/either";
import { UserNotFoundError } from "../../Errors/User/user-not-found.error";

interface LoginUserUseCaseRequest {
    email: string,
    password: string
}

type LoginUserUseCaseResponse = Either<
  UserNotFoundError,
  {
    user: User
  }
>

@Injectable()
export class LoginUserUseCase {
  constructor(
    private usersRepository: UserRepository,
  ) {}

  async execute({
    email,
    password
  } : LoginUserUseCaseRequest ) : Promise<LoginUserUseCaseResponse> {

    const user = await this.usersRepository.loginUser(email, password)

    if(!user) {
      return left(new UserNotFoundError)
    }

    return right({
      user
    })
  }
}