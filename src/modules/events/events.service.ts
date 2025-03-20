import { Event } from "./events.dto";
import { eventsRepository } from "@/database";
import { ListFilterKeys } from "@/types";

export class EventsService {
  public async fetchList(query: ListFilterKeys) {
    return eventsRepository.find({
      withDeleted: query.withDeleted as boolean,
      order: {
        id: "DESC",
      },
    });
  }

  public async fetchById(id: number) {
    const event = eventsRepository.findOneBy({ id });
    return event;
  }

  public async updateById(id: number, data: Event) {
    const event = await eventsRepository.update(id, data);

    if (event.affected) {
      return await this.fetchById(id);
    }

    return null;
  }

  public async deleteById(id: number) {
    const event = eventsRepository.softDelete(id);
    return event;
  }

  public async create(data: Event) {
    const event = eventsRepository.create(data);
    await eventsRepository.save(event);
    return event;
  }
}