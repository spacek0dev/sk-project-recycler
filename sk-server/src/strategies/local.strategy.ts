import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ILogin } from 'src/interfaces/auth';
import { AuthService } from 'src/services/auth.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(auth: ILogin): Promise<any> {
        const user = await this.authService.login(auth);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}