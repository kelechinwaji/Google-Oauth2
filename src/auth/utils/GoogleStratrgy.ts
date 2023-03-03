import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";

export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            clientID: '779234031482-g1rmbd3emgsh8eh1nj13969v51c7ftcr.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3001/api/auth/google/redirect',
            scope: ['profile', 'email'],
        });
    }
}