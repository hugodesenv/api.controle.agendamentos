import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ItemDto } from './dto/item.dto';
import { ItemService } from './item.service';
import { ItemFindDto } from './dto/item-find.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  async create(@Body() itemDto: ItemDto) {
    try {
      const id = await this.itemService.create(itemDto);
      return id;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  async findAll(@Body() dto: ItemFindDto) {
    try {
      const res = await this.itemService.findAll(dto);
      return res;
    } catch (e) {
      throw new HttpException({ detail: e }, HttpStatus.FORBIDDEN);
    }
  }
}
