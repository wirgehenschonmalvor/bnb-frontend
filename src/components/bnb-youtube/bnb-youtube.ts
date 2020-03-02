import Component, { HTMLFragment, createRef } from '@biotope/element';
import { template } from './template';
import { BnbYoutubeProps, BnBYoutubeMethods } from './defines';
import BnbIcon from '../bnb-icon/bnb-icon';

class BnbYoutube extends Component<BnbYoutubeProps, BnBYoutubeMethods> {
	public static componentName = 'bnb-youtube';
	public static attributes = [
		'youtube-id',
		{
			name: 'thumbnail',
			type: 'object',
		},
	];

	protected readonly defaultProps: BnbYoutubeProps = {
		...this.defaultProps,
		youtubeId: '',
	};

	public static dependencies = [BnbIcon as typeof Component];

	references = {
		video: createRef<HTMLIFrameElement>(),
		thumbnail: createRef<HTMLImageElement>(),
		button: createRef<HTMLButtonElement>(),
	};

	hideThumbnail() {
		this.references.thumbnail.current.classList.add('hidden');
		this.references.button.current.classList.add('hidden');
	}

	playVideo() {
		let src = this.references.video.current.getAttribute('src');
		let newSrc = src + '&autoplay=1';
		this.references.video.current.setAttribute('src', newSrc);
	}

	public methods: BnBYoutubeMethods = {
		onButtonClick: () => {
			this.playVideo();
			this.hideThumbnail();
		},
	};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.methods }, this.references);
	}
}

export default BnbYoutube;
