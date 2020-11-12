import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { UserService } from '../service/user'
import { Nanoid } from '../components/midway-tool/src'

@Provide()
@Controller('/')
export class HomeController {

  // 组件引入报错
  @Inject('TOOL:nanoid')
  nanoid: Nanoid

  // 应用层service引入正常
  // 如果直接在应用层package.json直接依赖nanoid则正常
  @Inject()
  userService: UserService

  @Get('/')
  async home() {
    let id: string = this.nanoid.getid()
    return 'Hello Midwayjs!' + id;
  }

  @Get('/nanoid')
  async getNanoid() {
    let id: string = this.userService.getid()
    return 'Hello Midwayjs!' + id;
  }
}
