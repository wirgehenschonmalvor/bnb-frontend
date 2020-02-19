import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbVideoProps } from './defines';

class BnbVideo extends Component<BnbVideoProps, null> {
	public static componentName = 'bnb-video';
	public static attributes = [
		'video-url',
		{
			name: 'autoplay',
			type: 'boolean',
		},
		{
			name: 'muted',
			type: 'boolean',
		},
		{
			name: 'loop',
			type: 'boolean',
		},
		{
			name: 'controls',
			type: 'boolean',
		},
	];

	protected readonly defaultProps: BnbVideoProps = {
		videoUrl: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbVideo;
