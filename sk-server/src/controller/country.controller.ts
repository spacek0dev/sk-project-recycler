import { CountryService } from './../services/country.service';
import { IResponse } from '../interfaces/responses';
import { Controller, Post, Get, Req, Res, HttpStatus, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Country } from 'src/schemas';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiBearerAuth()
@ApiTags('Country')
@Controller('countrys')
export class CountryController {
    constructor(private readonly countryService: CountryService) { }
    // @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Res() response, @Body() country: Country) {
        const document = await this.countryService.create(country);
        return response.status(document.status).json(document)
    }

    @Get()
    async fetchAll(@Res() response) {
        const document = await this.countryService.readAll();
        return response.status(document.status).json(document)
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const document = await this.countryService.readById(id);
        return response.status(document.status).json(document)
    }
    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() country: Country) {
        const document = await this.countryService.update(id, country);
        return response.status(document.status).json(document)
    }
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const document = await this.countryService.delete(id);
        return response.status(document.status).json(document)
    }
}