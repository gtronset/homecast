/*global require*/

function _importAll(r) {
    return r.keys().map(r);
}

const images = _importAll(
    require.context(
        '../../images/default_backgrounds/',
        false,
        /\.(png|jpe?g|svg)$/
    )
);

const default_backgrounds = images.map(function(img) {
    return { url: img.default };
});

export default default_backgrounds;
