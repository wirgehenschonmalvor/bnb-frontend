import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsTextImageProps } from './defines';
import BnbImage from '../../bnb-image/bnb-image';
import BnbHeadline from '../../bnb-headline/bnb-headline';
import BnbParagraph from '../../bnb-paragraph/bnb-paragraph';

class BnbCmsTextImage extends Component<BnbCmsTextImageProps, null> {
	public static componentName = 'bnb-cms-text-image';
	public static attributes = ['heading', { name: 'image', type: 'object' }];

	public static dependencies = [
		BnbImage as typeof Component,
		BnbHeadline as typeof Component,
		BnbParagraph as typeof Component,
	];

	protected readonly defaultProps: BnbCmsTextImageProps = {
		heading: '',
		image: {
			srcset: [],
			sizes: [],
			src: '',
			title: '',
		},
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsTextImage;
