import { Forum } from "./forums.dto";
import { forumsRepository, forumPostsRepository } from "@/database";
import { ListFilterKeys } from "@/types";
import { ForumPost } from "@/database/entities/forum-post.entity";

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

  // New methods for forum posts
  public async createForumPost(forumId: number, data: any) {
    const forum = await this.fetchById(forumId);
    if (!forum) return null;

    const post = forumPostsRepository.create({
      ...data,
      forumId,
    });

    await forumPostsRepository.save(post);
    return post;
  }

  public async fetchForumPosts(forumId: number) {
    return forumPostsRepository.find({
      where: { forumId },
      relations: ["user"],
      order: {
        createdAt: "DESC",
      },
    });
  }
}
