import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ){
        super({
            clientID: '779234031482-g1rmbd3emgsh8eh1nj13969v51c7ftcr.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3001/api/auth/google/redirect',
            scope: ['profile', 'email'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile){
        console.log(accessToken, 'access');
        console.log(refreshToken, 'Refresh');
        console.log(profile, 'profillle');
        const user = await this.authService.validateUser({
            email: profile.emails[0].value,
            displayName: profile.displayName
        })
        console.log('validate');
        console.log(user);
    
        return user || null;
         
    }
}