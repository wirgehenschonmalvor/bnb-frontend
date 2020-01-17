import Component, { HTMLFragment } from "@biotope/element";
import { template } from "./template";
import { BNBHeadlineProps } from "./defines";

class BNBHeadline extends Component<BNBHeadlineProps, null> {
	public static componentName = "b-n-b-headline";
	public static attributes = [
		{
			name: "level",
			type: "number"
		}
	];

	protected readonly defaultProps: BNBHeadlineProps = {
		level: 1
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BNBHeadline;
