import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbSupporterSlideProps } from './defines';
import BnbImage from '../bnb-image/bnb-image';
import BnbParagraph from '../bnb-paragraph/bnb-paragraph';
import BnbHeadline from '../bnb-headline/bnb-headline';

class BnbSupporterSlide extends Component<BnbSupporterSlideProps, null> {
	public static componentName = 'bnb-supporter-slide';
	public static attributes = [
		'heading',
		{ name: 'author', type: 'object' },
		{ name: 'image', type: 'object' },
	];

	protected readonly defaultProps: BnbSupporterSlideProps = {
		author: {
			name: '',
		},
		image: {
			srcset: [],
			sizes: [],
			src: '',
			title: '',
		},
	};

	public static dependencies = [
		BnbImage as typeof Component,
		BnbParagraph as typeof Component,
		BnbHeadline as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbSupporterSlide;
