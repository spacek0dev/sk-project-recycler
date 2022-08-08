import { IResponse } from '../interfaces/responses';
import {
  Controller,
  Post,
  Get,
  Req,
  Res,
  HttpStatus,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Role } from 'src/schemas';
import { RoleService } from 'src/services/role.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Role')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  @Post()
  async create(@Res() response, @Body() role: Role) {
    const document = await this.roleService.create(role);
    return response.status(document.status).json(document);
  }
  @Get('/')
  async fetchAll(
    @Res() response,
    @Query('page') page,
    @Query('pageSize') pageSize,
  ) {
    const document = await this.roleService.readAll(page, pageSize);
    return response.status(document.status).json(document);
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const document = await this.roleService.readById(id);
    return response.status(document.status).json(document);
  }
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() role: Role) {
    const document = await this.roleService.update(id, role);
    return response.status(document.status).json(document);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const document = await this.roleService.delete(id);
    return response.status(document.status).json(document);
  }
}
