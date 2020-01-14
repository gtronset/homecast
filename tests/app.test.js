'use strict';

import App from '../src/js/app';

test('_getBackgrounds returns background, "default" by default', () => {
    const _getBackgrounds = App.__get__('_getBackgrounds');

    expect(Array.isArray(_getBackgrounds('custom-backgrounds'))).toBe(true);
});