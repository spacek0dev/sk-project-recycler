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
import { Partners as Schema } from 'src/schemas';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PartnersService as Service } from 'src/services/partners.service';

@ApiBearerAuth()
@ApiTags('Partners')
@Controller('partners')
export class PartnersController {
  constructor(private readonly service: Service) {}
  @Post()
  async create(@Res() response, @Body() schema: Schema) {
    const document = await this.service.create(schema);
    return response.status(document.status).json(document);
  }

  @Get()
  async fetchAll(
    @Res() response,
    @Query('page') page,
    @Query('pageSize') pageSize,
    @Query('organizationId') organizationId,
  ) {
    const document = await this.service.readAll(page, pageSize, organizationId);
    return response.status(document.status).json(document);
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const document = await this.service.readById(id);
    return response.status(document.status).json(document);
  }
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() schema: Schema) {
    const document = await this.service.update(id, schema);
    return response.status(document.status).json(document);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const document = await this.service.delete(id);
    return response.status(document.status).json(document);
  }
}
