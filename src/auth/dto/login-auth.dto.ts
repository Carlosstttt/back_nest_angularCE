import {User} from '../interfaces/user.interface';

export class LoginAuthDto implements User{
    email!:string;
    password!:string;
}