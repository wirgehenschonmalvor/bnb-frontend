import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbErrorMessageProps } from './defines';

class BnbErrorMessage extends Component<BnbErrorMessageProps, null> {
	public static componentName = 'bnb-error-message';
	public static attributes = ['message'];

	protected readonly defaultProps: BnbErrorMessageProps = {
		message: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbErrorMessage;
