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
	public static attributes = ['heading', { name: 'index', type: 'number' }];

	protected readonly defaultProps: BnbCmsSupporterSliderProps = {
		heading: '',
		index: 0,
	};

	next(index) {
    const slides = document.querySelectorAll('bnb-supporter-slide');
    slides.forEach(function (slide) {
      slide.setAttribute('index', index);
      index++;
    })
		console.log(slides);
		// if (index <= 3) {
		// 	console.log(slides[index]);

		// 	// slides.forEach(slide => slide.classList.remove('active'));
    //   slides[index].classList.remove('active');

		// 	slides[index - 1].setAttribute('index', );
		// 	slides[index].classList.add('active');
		// 	// i++;
		// 	console.log(index);
		// }
	}
	public methods: BnbCmsSupporterSliderMethods = {
		onbuttonclick: () => {
			this.next(this.props.index);
		},
	};

	public static dependencies = [
		BnbSupporterSlide as typeof Component,
		BnbHeadline as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.methods });
	}
	// public ready() {
	//   this.refereces.next.current.addEventListener('click', function () {
	//     this.methods.next(this.props.index).bind(this);
	//   });
	// }
}

export default BnbCmsSupporterSlider;
