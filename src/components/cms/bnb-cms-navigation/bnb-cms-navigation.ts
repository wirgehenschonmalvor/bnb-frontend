import Component, { HTMLFragment, createRef } from '@biotope/element';
import { template } from './template';
import { BnbCmsNavigationProps } from './defines';
import BnbIcon from '../../bnb-icon/bnb-icon';
import BnbButtonCTA from '../../bnb-button-cta/bnb-button-cta';
import BnbLink from '../../bnb-link/bnb-link';
import BnbFollow from '../../bnb-follow/bnb-follow';
import debounce from '../../../resources/ts/debounce';

class BnbCmsNavigation extends Component<BnbCmsNavigationProps, null> {
	public static componentName = 'bnb-cms-navigation';

	public static dependencies = [
		BnbIcon as typeof Component,
		BnbButtonCTA as typeof Component,
		BnbLink as typeof Component,
		BnbFollow as typeof Component,
	];

	references = {
		menu: createRef<HTMLElement>(),
		menuToggle: createRef<HTMLInputElement>(),
	};

	setMenuSize() {
		window.innerWidth < 768 ? this.references.menu.current.style.width = window.innerWidth + 'px' : this.references.menu.current.style.width = 325 + 'px';
	}

	shrinkMenu() {
		window.scrollY > 65 ? this.setAttribute('scrolled', '') : this.removeAttribute('scrolled');
	}

	closeMenu() {
	this.references.menuToggle.current.scroll ? this.references.menuToggle.current.checked = false : '';
	}

	public render(): HTMLFragment {
		return template({ ...this.props }, this.references);
	}

	public rendered() {
		this.setMenuSize();

		if (window.innerWidth < 768) {
			window.addEventListener('scroll', debounce(this.shrinkMenu.bind(this), 10));
			window.addEventListener('resize', debounce(this.setMenuSize.bind(this), 250));
			window.addEventListener('scroll', this.closeMenu.bind(this));
		}
	}
}

export default BnbCmsNavigation;
