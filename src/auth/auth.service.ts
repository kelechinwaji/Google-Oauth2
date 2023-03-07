import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/TypeOrm/entities/user";
import { UserDetails } from "src/utils/types";
import { Repository } from "typeorm";

export class AuthService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

     async  validateUser(details: UserDetails){
        console.log('AuthService');
        console.log(details);
        const user = await this.userRepository.findOneBy({email: details.email});
        console.log(user);
        if (user) return user;
        console.log('user not found. creating...');
        const newUser = this.userRepository.create(details);
        return this.userRepository.save(newUser);
        
        
    }

    async findUser(id: number){
         const user = await this.userRepository.findOneBy({id});
         return user;
    }


}