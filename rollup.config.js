import replace from '@rollup/plugin-replace';
import { createFilter } from '@rollup/pluginutils';
import cleanup from 'rollup-plugin-cleanup';
import { version } from './package.json';
import Preprocessor from 'preprocessor';

const execSync = require('child_process').execSync;
const revision = execSync('git rev-parse --short HEAD').toString().trim();

function getBanner(config) {
    return [
        '/**',
        ' * @license',
        ' * v' + version + ' revision ' + revision + config,
        ' */'
    ].join('\n');
}

function spacesToTabs() {
    const filter = createFilter([
        '**/*.js'
    ], []);

    return {
        transform(code, id) {
            if (!filter(id)) return;
            return {
                code: code.replace(/    /g, '\t'), // eslint-disable-line no-regex-spaces
                map: { mappings: '' }
            };
        }
    };
}

function preprocessor(options) {
    const filter = createFilter([
        '**/*.js'
    ], []);

    return {
        transform(code, id) {
            if (!filter(id)) return;
            return {
                code: new Preprocessor(code).process(options),
                map: { mappings: '' }
            };
        }
    };
}

export default [{
    input: 'build/index.js',
    output: {
        banner: getBanner(''),
        file: 'build/__game-scripts.js',
        format: 'iife',
        indent: '\t'
    },
    plugins: [
        preprocessor({
            DEBUG: false,
            RELEASE: true
        }),
        replace({
            __REVISION__: revision,
            __CURRENT_VERSION__: version
        }),
        cleanup({
            comments: 'some'
        }),
        spacesToTabs()
    ]
}, {
    input: 'build/index.js',
    output: {
        banner: getBanner(' (DEBUG)'),
        file: 'build/__game-scripts.dbg.js',
        format: 'iife',
        indent: '\t'
    },
    plugins: [
        preprocessor({
            DEBUG: true,
            RELEASE: false
        }),
        replace({
            __REVISION__: revision,
            __CURRENT_VERSION__: version
        }),
        cleanup({
            comments: 'some'
        }),
        spacesToTabs()
    ]
}];
