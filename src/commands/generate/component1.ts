//import {flags} from '@oclif/command'
import Base from '../../command-base'

export interface Options {
  title: string
  color: string
  force?: boolean
}

export class Component1 extends Base {

  static description = 'Generate Component 1'

  // static flags = {
  //   force: flags.boolean({description: 'overwrite existing files'}),
  // }
  static args = [
    {name: 'title', description: 'name of component', required: true},
    {name: 'color', description: 'color of component', required: true},
  ]

  async run() {
    //const {flags, args} = this.parse(Component1)
    const {args} = this.parse(Component1)
    await super.generate('component1', {
      title: args.title,
      color: args.color,
      //force: flags.force
    } as Options)
  }
}
