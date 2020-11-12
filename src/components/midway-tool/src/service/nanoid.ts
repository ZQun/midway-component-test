import { Provide } from '@midwayjs/decorator';
import { nanoid } from 'nanoid'

@Provide()
export class Nanoid {

    // 生成随机id
    public getid(length?: number) {
        const id: string = nanoid()
        return id
    }
}