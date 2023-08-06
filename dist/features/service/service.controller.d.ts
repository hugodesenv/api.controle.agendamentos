import { CreateServiceDto } from './dto/create-service.dto';
import { ServiceService } from './service.service';
export declare class ServiceController {
    private readonly service;
    constructor(service: ServiceService);
    create(dto: CreateServiceDto): Promise<{
        id: number;
    }>;
}
