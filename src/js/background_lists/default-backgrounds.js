import importAll from '../importall';

const images = importAll(
    require.context(
        '../../images/default_backgrounds/',
        false,
        /\.(png|jpe?g|svg)$/
    )
);

const default_backgrounds = images.map(function (img) {
    return { url: `./images/default_backgrounds/${img}` };
});

export default default_backgrounds;
