import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BNBMediaProps, BNBMediaState } from './defines';

class BNBMedia extends Component<BNBMediaProps, BNBMediaState> {
	public static componentName = 'b-n-b-media';
	public static attributes = [
		'alt',
		'url',
		'caption',
		'poster',
		'copyright',
		'youtube-id',
		{
			name: 'video',
			type: 'boolean',
		},
		{
			name: 'youtube',
			type: 'boolean',
		},
		{
			name: 'controls',
			type: 'boolean',
		},
		{
			name: 'loop',
			type: 'boolean',
		},
		{
			name: 'autoplay',
			type: 'boolean',
		},
		{
			name: 'muted',
			type: 'boolean',
		},
	];

	protected readonly defaultProps: BNBMediaProps = {
		alt: '',
		url: 'https://dummyimage.com/16:9x1080.png',
		caption: '',
		poster: '',
		copyright: '',
		youtubeId: '',
		video: false,
		youtube: false,
		autoplay: false,
		controls: false,
		loop: false,
		muted: false,
	};

	protected readonly defaultState: BNBMediaState = {};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state });
	}
}

export default BNBMedia;
