import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbTeaserProps } from './defines';
import BnbButtonCTA from '../bnb-button-cta/bnb-button-cta';
import BnbHeadline from '../bnb-headline/bnb-headline';

class BnbTeaser extends Component<BnbTeaserProps, null> {
	public static componentName = 'bnb-teaser';
	public static attributes = ['heading', { name: 'button', type: 'object' }];

	protected readonly defaultProps: BnbTeaserProps = {
		...this.defaultProps,
		heading: '',
  };

  public static dependencies = [
    BnbButtonCTA as typeof Component,
    BnbHeadline as typeof Component,
  ]

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbTeaser;
