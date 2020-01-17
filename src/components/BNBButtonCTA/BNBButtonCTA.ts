import Component, { HTMLFragment } from "@biotope/element";
import { template } from "./template";
import {
	BNBButtonCTAProps,
	BNBButtonCTAState,
	BNBButtonCTAMethods
} from "./defines";

class BNBButtonCTA extends Component<BNBButtonCTAProps, BNBButtonCTAState> {
	public static componentName = "b-n-b-button-c-t-a";
	public static attributes = ["value", "url", "target"];

	protected readonly defaultProps: BNBButtonCTAProps = {
		value: "",
		url: "",
		target: ""
	};

	protected readonly defaultState: BNBButtonCTAState = {};

	public methods: BNBButtonCTAMethods = {};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

export default BNBButtonCTA;
