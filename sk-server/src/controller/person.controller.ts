import { Controller, Res, Body, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { Person } from 'src/schemas';
import { PersonService } from 'src/services/person.service';

@ApiBearerAuth()
@ApiTags('Person')
@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async update(@Res() response, @Param('id') id, @Body() person: Person) {
    const document = await this.personService.update(id, person);
    return response.status(document.status).json(document);
  }
}
