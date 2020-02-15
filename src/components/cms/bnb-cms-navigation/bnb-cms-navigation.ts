import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsNavigationProps } from './defines';
import BnbIcon from '../../bnb-icon/bnb-icon';
import BnbButtonCTA from '../../bnb-button-cta/bnb-button-cta';
import BnbLink from '../../bnb-link/bnb-link';
import BnbFollow from '../../bnb-follow/bnb-follow';

class BnbCmsNavigation extends Component<BnbCmsNavigationProps, null> {
	public static componentName = 'bnb-cms-navigation';

	public static dependencies = [
		BnbIcon as typeof Component,
		BnbButtonCTA as typeof Component,
		BnbLink as typeof Component,
		BnbFollow as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsNavigation;
