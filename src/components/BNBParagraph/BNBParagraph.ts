import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BNBParagraphProps } from './defines';

class BNBParagraph extends Component<BNBParagraphProps> {
  public static componentName = 'bnb-paragraph';
  public static attributes = [
    { name: 'leadtext', type: 'boolean' },
    { name: 'capitalize', type: 'boolean' },
  ];

  protected readonly defaultProps: BNBParagraphProps = {
    leadtext: false,
    capitalize: false,
  };

  public render(): HTMLFragment {
    return template(this.props);
  }
}

export default BNBParagraph;
