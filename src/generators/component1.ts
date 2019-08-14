// tslint:disable no-floating-promises
// tslint:disable no-console

import * as _ from 'lodash'
import * as path from 'path'
//let git = require('simple-git')
import * as Generator from 'yeoman-generator'
let inquirer = require('inquirer')

import {Options} from '../commands/generate/component1'

class Component1Generator extends Generator {

  pjson!: any

  answers!: {
    blade: string,
    app: string,
    area: string
  }

  constructor(args: any, public options: Options) {
    super(args, options)
  }

  async prompting() {

    // https://yeoman.io/authoring/user-interactions.html

    // https://www.npmjs.com/package/inquirer

    if (this.options.title)
      return;

    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "color",
        message: "Your component color",
        default: this.options.color
      },
    ]);

    this.options.color = answers.color
  }

  end() {
    // done
  }

  writing() {

    this.sourceRoot(path.join(__dirname, '../../templates'))

    const opts = {pascalCase: this.pascalCase, camelCase: this.camelCase, options: this.options}

    const path1 = `www/partials/${this.options.title}.html`
    this.fs.copyTpl(this.templatePath('html/component1.html'), this.destinationPath(path1), opts)

    const path2 = `www/scripts/${this.options.title}.ts`
    this.fs.copyTpl(this.templatePath('typescript/component1.ts'), this.destinationPath(path2), opts)

    //this.gitAdd('www', [path1, path2])
  }

  // private async gitAdd(repo: string, filesToAdd: Array<string>) {
  //   if (!repo || !filesToAdd) return
  //   let g = git(repo)
  //   for (let fileToAdd of filesToAdd) {
  //     g.add(fileToAdd)
  //   }
  // }

  private pascalCase(s: string) {
    return _.upperFirst(_.camelCase(s))
  }

  private camelCase(s: string) {
    return _.camelCase(s)
  }
}

export = Component1Generator
