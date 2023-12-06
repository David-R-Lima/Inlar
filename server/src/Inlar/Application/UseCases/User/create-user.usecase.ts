import { Injectable } from "@nestjs/common";
import { User, UserProps } from "src/Inlar/Entities/User";
import { UserRepository } from "../../Repositories/user-repository";
import { Either, left, right } from "src/Base/either";
import { UserAlreadyExistsError } from "../../Errors/User/user-already-exists.error";

interface CreateUserUseCaseRequest {
    userProps: User | UserProps
}

type CreateUserUseCaseResponse = Either<
    UserAlreadyExistsError, 
    {
      null: null
    }
>

@Injectable()
export class CreateUserUseCase {
  constructor(
    private usersRepository: UserRepository,
  ) {}

  async execute({
    userProps
  } : CreateUserUseCaseRequest) : Promise<CreateUserUseCaseResponse> {

    const user = await this.usersRepository.getUserByEmail(userProps.email)

    if(user) {
      return left(new UserAlreadyExistsError)
    }

    await this.usersRepository.createUser(userProps)

    return right(null)
  }
}