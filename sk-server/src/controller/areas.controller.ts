import { IResponse } from '../interfaces/responses';
import { Controller, Post, Get, Req, Res, HttpStatus, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Areas } from 'src/schemas';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AreasService } from 'src/services/areas.service';


@ApiBearerAuth()
@ApiTags('Areas')
@Controller('areas')
export class AreasController {
    constructor(private readonly areasService: AreasService) { }
    // @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Res() response, @Body() area: Areas) {
        const document = await this.areasService.create(area);
        return response.status(document.status).json(document)
    }

    @Get()
    async fetchAll(@Res() response) {
        const document = await this.areasService.readAll();
        return response.status(document.status).json(document)
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const document = await this.areasService.readById(id);
        return response.status(document.status).json(document)
    }
    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() area: Areas) {
        const document = await this.areasService.update(id, area);
        return response.status(document.status).json(document)
    }
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const document = await this.areasService.delete(id);
        return response.status(document.status).json(document)
    }

    @Get('/country/:countryId')
    async getAreas(@Res() response, @Param('countryId') countryId) {
        const document = await this.areasService.getAreas(countryId);
        return response.status(document.status).json(document)
    }

}