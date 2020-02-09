import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbMediaProps } from './defines';
import BnbImage from '../bnb-image/bnb-image';
import BnbVideo from '../bnb-video/bnb-video';
import BnbYoutube from '../bnb-youtube/bnb-youtube';

class BnbMedia extends Component<BnbMediaProps, null> {
	public static componentName = 'bnb-media';
	public static attributes = [
		{
			name: 'youtube-info',
			type: 'object',
		},
		{
			name: 'image-info',
			type: 'object',
		},
		{
			name: 'video-info',
			type: 'object',
		},
		'caption',
		'copyright',
	];

	static dependencies = [
		BnbImage as typeof Component,
		BnbVideo as typeof Component,
		BnbYoutube as typeof Component,
	];

	protected readonly defaultProps: BnbMediaProps = {};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbMedia;
