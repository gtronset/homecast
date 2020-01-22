import requireContext from 'require-context.macro';
import importAll from '../importall';

const images = importAll(
    requireContext(
        '../../images/default_backgrounds/',
        false,
        /\.(png|jpe?g|svg)$/
    )
);

const default_backgrounds = images.map(function(img) {
    return { url: `./images/default_backgrounds/${img}` };
});

export default default_backgrounds;
