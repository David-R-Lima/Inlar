import { Injectable } from "@nestjs/common";
import { User } from "src/Inlar/Entities/User";
import { UserRepository } from "../../Repositories/user-repository";
import { Either, left, right } from "src/Base/either";
import { UserNotFoundError } from "../../Errors/User/user-not-found.error";

interface GetUserByIdUseCaseRequest {
    id_user: number
}

type GetUserByIdUseCaseResponse = Either<
  UserNotFoundError,
  {
    user: User
  }
>

@Injectable()
export class GetUserByIdUseCase {
  constructor(
    private usersRepository: UserRepository,
  ) {}

  async execute({
    id_user
  } : GetUserByIdUseCaseRequest) : Promise<GetUserByIdUseCaseResponse> {

    const user = await this.usersRepository.getUserById(id_user)

    if(!user) {
      return left(new UserNotFoundError)
    }

    return right({
      user
    })
  }
}