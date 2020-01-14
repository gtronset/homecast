'use strict';

import DefaultBackgrounds from '../src/js/background_lists/default-backgrounds';

test('Variables has all required variables', () => {
    expect(Array.isArray(DefaultBackgrounds)).toBe(true);
});
