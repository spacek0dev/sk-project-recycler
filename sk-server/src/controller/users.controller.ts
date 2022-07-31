import { Controller, Res, Body, Param, UseGuards, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Person } from 'src/schemas';
import { PersonService } from 'src/services/person.service';
import { UsersService } from 'src/services/users.service';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  async update(@Res() response) {
    const document = await this.usersService.getAllUsers();
    return response.status(document.status).json(document);
  }
}
