import { AuthService } from '../services/auth.service';
import { Controller, Post, Get, Req, Res, HttpStatus, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { IAuth, IAuthOrganization, ILogin } from 'src/interfaces/auth';
import { RoleService } from 'src/services/role.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly roleService: RoleService,
        private readonly authService: AuthService
    ) { }

    @Post('/login')
    @ApiOperation({ summary: 'User Login' })
    @ApiResponse({ status: 201, description: 'Get token.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async login(@Res() response, @Body() auth: ILogin) {
        let document = await this.authService.login(auth)
        return response.status(document.status).json(document)
    }
    @Post('/register')
    async register(@Res() response, @Body() auth: IAuth) {
        let document = await this.authService.register(auth)
        return response.status(document.status).json(document)
    }
    @Post('/register/organization')
    async registerUserAndOrganization(@Res() response, @Body() auth: IAuthOrganization) {
        let document = await this.authService.registerWithOrganization(auth)
        return response.status(document.status).json(document)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    async getUserInformation(@Req() request: Request, @Res() response) {
        let document = await this.authService.getUserInformation(request.user)
        return response.status(document.status).json(document)
    }

}

