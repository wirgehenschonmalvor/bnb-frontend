import Component, { HTMLFragment } from "@biotope/element";
import { template } from "./template";
import { BnbHeadlineProps } from "./defines";

class BnbHeadline extends Component<BnbHeadlineProps, null> {
	public static componentName = "bnb-headline";
	public static attributes = [
		{
			name: "level",
			type: "number"
		}
	];

	protected readonly defaultProps: BnbHeadlineProps = {
		level: 1
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbHeadline;
