import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbLoadingSpinnerProps } from './defines';

class BnbLoadingSpinner extends Component<BnbLoadingSpinnerProps, null> {
	public static componentName = 'bnb-loading-spinner';
	public static attributes = [
		{
			name: 'size',
			type: 'number',
		},
		{
			name: 'thickness',
			type: 'number',
		},
		{
			name: 'speed',
			type: 'number',
		},
		'color',
  ];

	protected readonly defaultProps: BnbLoadingSpinnerProps = {
		size: 50,
		color: '#000',
		thickness: 5,
		speed: 1,
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbLoadingSpinner;
