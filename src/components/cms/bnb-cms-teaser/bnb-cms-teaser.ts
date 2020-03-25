import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsTeaserProps } from './defines';
import BnbTeaser from '../../bnb-teaser/bnb-teaser';

class BnbCmsTeaser extends Component< BnbCmsTeaserProps, null > {
  public static componentName = 'bnb-cms-teaser';
  public static attributes = [
    ...BnbTeaser.attributes,
  ];

  protected readonly defaultProps: BnbCmsTeaserProps = {
    ...this.defaultProps,
  };

  public static dependencies = [
    BnbTeaser as typeof Component
  ]

  public render(): HTMLFragment {
    return template( { ...this.props });
  }
}

export default BnbCmsTeaser;
