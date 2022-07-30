import { Controller, Post, Get, Req, Res, HttpStatus, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Organization } from 'src/schemas';
import { OrganizationService } from 'src/services/organization.service';


@ApiBearerAuth()
@ApiTags('Organization')
@Controller('organizations')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Res() response, @Body() organization: Organization) {
        const document = await this.organizationService.create(organization);
        return response.status(document.status).json(document)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async fetchAll(@Res() response) {
        const document = await this.organizationService.readAll();
        return response.status(document.status).json(document)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const document = await this.organizationService.readById(id);
        return response.status(document.status).json(document)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() organization: Organization) {
        const document = await this.organizationService.update(id, organization);
        return response.status(document.status).json(document)
    }
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const document = await this.organizationService.delete(id);
        return response.status(document.status).json(document)
    }
}