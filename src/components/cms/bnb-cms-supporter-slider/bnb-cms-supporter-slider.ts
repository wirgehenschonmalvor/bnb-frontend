import Component, { HTMLFragment } from '@biotope/element';
import BnbHeadline from '../../bnb-headline/bnb-headline';
import BnbSupporterSlide from '../../bnb-supporter-slide/bnb-supporter-slide';
import {
	BnbCmsSupporterSliderProps,
	BnbCmsSupporterSliderMethods,
} from './defines';
import { template } from './template';

class BnbCmsSupporterSlider extends Component<
	BnbCmsSupporterSliderProps,
	BnbCmsSupporterSliderMethods
> {
	public static componentName = 'bnb-cms-supporter-slider';
	public static attributes = [
		'heading',
		{ name: 'index', type: 'number' },
		{ name: 'slidecount', type: 'number' },
	];

	protected readonly defaultProps: BnbCmsSupporterSliderProps = {
		heading: '',
		index: 2,
		slidecount: 0,
	};

	setSlideIndex() {
		let index = 1;
		const slides = document.querySelectorAll('bnb-supporter-slide');
		this.props.slidecount = slides.length;
		slides.forEach(function(slide) {
			slide.classList.add('index_' + index);
			index++;
		});
		console.log(slides);
		document.querySelector('.index_1').classList.add('active');
	}

	resetSlider() {
		const slides = document.querySelectorAll('bnb-supporter-slide');
		slides.forEach(function(slide) {
			slide.setAttribute('hidden', '');
			slide.classList.remove('inactive');
			slide.classList.remove('active');
			slide.removeAttribute('hidden');
		});
	}
	next(resetSlider, index) {
		const slide = document.querySelector('.index_' + index);
		slide.classList.add('active');
		if (index === 1) {
			console.log('index = 1', this.props.index);
			const lastSlide = document.querySelector(
				'.index_' + this.props.slidecount,
			);
			lastSlide.classList.remove('active');
			lastSlide.classList.remove('inactive');
			this.props.index++;
		} else if (index === this.props.slidecount) {
			console.log('index = 4', this.props.index);
			const lastSlide = document.querySelector('.index_' + (index - 1));
			lastSlide.classList.remove('active');
			lastSlide.classList.add('inactive');
			resetSlider();
			this.props.index = 1;
			const slide = document.querySelector('.index_' + index);
			slide.classList.add('active');
		} else {
			console.log('index normal', this.props.index);
			const lastSlide = document.querySelector('.index_' + (index - 1));
			lastSlide.classList.remove('active');
			lastSlide.classList.add('inactive');
			const nextSlide = document.querySelector('.index_' + (index + 1));
			nextSlide.classList.remove('inactive');
			this.props.index++;
		}
	}
	public methods: BnbCmsSupporterSliderMethods = {
		onbuttonclick: () => {
			this.next(this.resetSlider, this.props.index);
		},
	};

	public static dependencies = [
		BnbSupporterSlide as typeof Component,
		BnbHeadline as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.methods });
	}
	public ready() {
		this.setSlideIndex();
		//   this.refereces.next.current.addEventListener('click', function () {
		//     this.methods.next(this.props.index).bind(this);
		//   });
	}
}

export default BnbCmsSupporterSlider;
