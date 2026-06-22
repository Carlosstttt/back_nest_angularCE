import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from 'src/auth/dto/login-auth.dto';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService){}
    login(credenciales: LoginAuthDto){

        let payload={email:"admin@gmail.com", id:1}
        const token= this.jwtService.sign(payload)
        return {token:token}

    }
}
