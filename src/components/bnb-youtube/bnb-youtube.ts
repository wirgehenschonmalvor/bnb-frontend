import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbYoutubeProps } from './defines';

class BnbYoutube extends Component<BnbYoutubeProps, null> {
	public static componentName = 'bnb-youtube';
	public static attributes = ['youtube-id'];

	protected readonly defaultProps: BnbYoutubeProps = {
		youtubeId: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbYoutube;
