import { Forum } from "./forums.dto";
import { forumsRepository } from "@/database";
import { ListFilterKeys } from "@/types";

export class ForumsService {
  public async fetchList(query: ListFilterKeys) {
    return forumsRepository.find({
      withDeleted: query.withDeleted as boolean,
      order: {
        id: "DESC",
      },
    });
  }

  public async fetchById(id: number) {
    const forum = forumsRepository.findOneBy({ id });
    return forum;
  }

  public async updateById(id: number, data: Forum) {
    const forum = await forumsRepository.update(id, data);

    if (forum.affected) {
      return await this.fetchById(id);
    }

    return null;
  }

  public async deleteById(id: number) {
    const forum = forumsRepository.softDelete(id);
    return forum;
  }

  public async create(data: Forum) {
    const forum = forumsRepository.create(data);
    await forumsRepository.save(forum);
    return forum;
  }
}