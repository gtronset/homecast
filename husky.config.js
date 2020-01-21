/* eslint-env node */

const runNPMLock = 'npm install --from-lock-file';

module.exports = {
    'hooks': {
        'pre-commit': 'lint-staged',
        'post-rebase': 'npm install',
        'post-checkout': `if [[ $HUSKY_GIT_PARAMS =~ 1$ ]]; then ${runNPMLock}; fi`,
        'post-merge': runNPMLock
    }
};