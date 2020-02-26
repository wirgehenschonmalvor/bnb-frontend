import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import BnbIcon from '../bnb-icon/bnb-icon';

class BnbFollow extends Component<null, null> {
	public static componentName = 'bnb-follow';
	public static attributes = [];

	public static dependencies = [BnbIcon as typeof Component];
	public render(): HTMLFragment {
		return template();
	}
}

export default BnbFollow;
