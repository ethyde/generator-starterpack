'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StarterPackGenerator extends _yeomanGenerator2.default {

  constructor(args, opts) {
    super(args, opts);

    this.argument('appName', {
      type: String,
      defaults: _path2.default.basename(process.cwd())
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
    };
  }

  writing() {
    // Write your files
    this.fs.write(this.destinationPath('README.md'), `# The name is: ${this.props.applicationName}\n`);
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

exports.default = StarterPackGenerator;
