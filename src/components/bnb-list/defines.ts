/**
 *  ## DEFINE ALL INTERFACES FOR BnbList
 **/

/**
 * Props
 */
interface BnbListProps {
	counterStart?: number;
	counterPrefix?: number;
}

interface BnbListMethods {
	setCounterPrefix: Function;
	setCounterStart: Function;
}

export { BnbListProps, BnbListMethods };
