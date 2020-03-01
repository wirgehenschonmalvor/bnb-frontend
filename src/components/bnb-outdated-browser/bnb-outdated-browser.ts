import Component, { HTMLFragment, createRef } from '@biotope/element';
import { template } from './template';
import { BnbOutdatedBrowserMethods } from './defines';

class BnbOutdatedBrowser extends Component<null> {
	public static componentName = 'bnb-outdated-browser';

	references = {
		warning: createRef<HTMLElement>(),
	};

	public methods: BnbOutdatedBrowserMethods = {
		onCloseClick: (() => {
			this.references.warning.current.parentNode.removeChild(
				this.references.warning.current,
			);
		}).bind(this),
	};

	public render(): HTMLFragment {
		return template({ ...this.methods }, this.references);
	}
}

export default BnbOutdatedBrowser;
