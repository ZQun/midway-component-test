import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import { Configuration, App } from '@midwayjs/decorator';
import { Application } from 'egg';
import * as tool from 'midway-tool/src'

@Configuration({
    imports: [
        tool
    ]
})
export class AppContainerLifeCycle implements ILifeCycle {

    @App()
    app: Application

    async onReady(content: IMidwayContainer) {

    }
}