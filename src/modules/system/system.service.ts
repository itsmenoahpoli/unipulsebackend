import { UsersService } from "@/modules/users/users.service";

export class SystemService {
  constructor(private readonly usersService: UsersService) {}

  public async createAdminAccount() {
    const adminUser = await this.usersService.createUser({
      firstName: "System",
      lastName: "Admin",
      email: "admin@domain.com",
      password: "admin",
      studentId: "admin",
    });

    return adminUser;
  }
}
