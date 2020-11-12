import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { nanoid } from 'nanoid'

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  // 应用层service直接引入没有问题！
  public getid() {
    let id: string = nanoid()
    return id
  }
}
