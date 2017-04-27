import path from 'path'

import Generator from 'yeoman-generator'

console.log( "POUET" );

class StarterPackGenerator extends Generator {

  constructor(args, opts) {
    super(args, opts)


    this.argument('appName', {
      type: String,
      defaults: path.basename(process.cwd())
    });
  }

  initializing() {
    this.props = {};
  }

  get prompting() {

    return {

      appName() {

        let done = this.async();

        let prompts = [{
          type: 'input',
          name: 'applicationName',
          message: 'What\'s application name?',
          default: this.appName
        }];

        this.prompt(prompts, function (props) {
          Object.assign(this.props, props);

          done();
        }.bind(this));
      }
    }
  }

  writing() {
    // Write your files
    this.fs.write(this.destinationPath('README.md'), `# The name is: ${ this.props.applicationName }\n`);
    this.config.set('props', this.props);
  }

  default() {
    // Compose here with others Yeoman generator
  }

  installing() {
    // Install dependencies
  }

  end() {
    // End message
    this.log('End of generator-starterpack !');
  }

}

export default StarterPackGenerator