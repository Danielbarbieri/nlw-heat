declare module "*.svg" {
    import React from 'React';
    import Svg, {SvgProps, SVGProps} from 'react-native-svg';

    const content: React.FC<SvgProps>;

    export default content;
}