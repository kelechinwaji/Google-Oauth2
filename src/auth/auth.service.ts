import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/TypeOrm/entities/user";
import { UserDetails } from "src/utils/types";
import { Repository } from "typeorm";

export class AuthService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    validateUser(details: UserDetails){
      
        
    }
}