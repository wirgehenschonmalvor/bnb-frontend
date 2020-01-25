import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbParagraphProps } from './defines';

class BnbParagraph extends Component<BnbParagraphProps> {
	public static componentName = 'bnb-paragraph';
	public static attributes = [
		{ name: 'leadtext', type: 'boolean' },
		{ name: 'capitalize', type: 'boolean' },
	];

	protected readonly defaultProps: BnbParagraphProps = {
		leadtext: false,
		capitalize: false,
	};

	public render(): HTMLFragment {
		return template(this.props);
	}
}

export default BnbParagraph;
