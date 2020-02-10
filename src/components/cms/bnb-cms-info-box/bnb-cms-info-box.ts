import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsInfoBoxProps } from './defines';

class BnbCmsInfoBox extends Component<BnbCmsInfoBoxProps, null> {
	public static componentName = 'bnb-cms-info-box';
	public static attributes = [];

	protected readonly defaultProps: BnbCmsInfoBoxProps = {};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsInfoBox;
