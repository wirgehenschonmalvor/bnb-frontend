import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BNBMediaProps, BNBMediaState } from './defines';

class BNBMedia extends Component<BNBMediaProps, BNBMediaState> {
	public static componentName = 'bnb-media';
	public static attributes = [
		'alt',
		'image-url',
		'video-url',
		'audio-url',
		'youtube-id',
		'caption',
		'poster',
		'copyright',
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
		imageUrl: '',
		videoUrl: '',
		audioUrl: '',
		youtubeId: '',
		caption: '',
		poster: '',
		copyright: '',
		controls: false,
		loop: false,
		muted: false,
		autoplay: false,
	};

	protected readonly defaultState: BNBMediaState = {};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state });
	}
}

export default BNBMedia;
