import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/TypeOrm/entities/user";
import { AuthService } from "../auth.service";


 export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ){
        super();
    }

    serializeUser(user: User, done: Function) {
        done(null, user)
    }
 }