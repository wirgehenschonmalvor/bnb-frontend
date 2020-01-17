import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BNBErrorMessageProps } from './defines';

class BNBErrorMessage extends Component<BNBErrorMessageProps, null> {
	public static componentName = 'b-n-b-error-message';
	public static attributes = ['message'];

	protected readonly defaultProps: BNBErrorMessageProps = {
		message: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BNBErrorMessage;
