import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbArticleInfoProps } from './defines';

class BnbArticleInfo extends Component<BnbArticleInfoProps, null> {
	public static componentName = 'bnb-article-info';
	public static attributes = ['name', 'title', 'date', 'image-url'];

	protected readonly defaultProps: BnbArticleInfoProps = {
		name: '',
		title: '',
		date: '',
		imageUrl: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbArticleInfo;
