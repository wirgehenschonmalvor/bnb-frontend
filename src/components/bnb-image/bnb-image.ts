import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbImageProps } from './defines';

class BnbImage extends Component<BnbImageProps, null> {
	public static componentName = 'bnb-image';
	public static attributes = [
		{
			name: 'srcset',
			type: 'array',
		},
		{
			name: 'sizes',
			type: 'array',
		},
		'src',
		'title',
		'caption',
		'copyright',
		'object-fit',
		'object-position',
	];
	protected readonly defaultProps: BnbImageProps = {
		srcset: [],
		sizes: [],
		src: '',
		title: '',
		objectFit: 'fill',
		objectPosition: 'unset',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbImage;
