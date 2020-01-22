'use strict';

import Variables from '../src/js/variables';

test('Variables has all required variables', () => {
    expect(Variables).toHaveProperty('weather_api_key');
    expect(Variables).toHaveProperty('cycle_duration');
    expect(Variables).toHaveProperty('default_city');
    expect(Variables).toHaveProperty('backgrounds');
});
