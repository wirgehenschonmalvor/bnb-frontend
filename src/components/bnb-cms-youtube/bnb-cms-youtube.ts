import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsYoutubeProps } from './defines';
import BnbHeadline from '../bnb-headline/bnb-headline';
import BnbYoutube from '../bnb-youtube/bnb-youtube';

class BnbCmsYoutube extends Component<BnbCmsYoutubeProps, null> {
	public static componentName = 'bnb-cms-youtube';
	public static attributes = [
		'heading',
		{ name: 'youtubeinfo', type: 'object' },
	];

	protected readonly defaultProps: BnbCmsYoutubeProps = {
    ...this.defaultProps,
    heading: '',
		youtubeinfo: {
			youtubeId: '',
		},
	};

	public static dependencies = [
		BnbHeadline as typeof Component,
		BnbYoutube as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsYoutube;
