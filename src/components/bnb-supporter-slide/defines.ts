/**
 *  ## DEFINE ALL INTERFACES FOR BnbSupporterSlide
 **/

import { BnbImageProps } from "../bnb-image/defines";

/**
 * Props
 */
interface BnbSupporterSlideProps {
  author: AuthorInfo;
  image: BnbImageProps
}

interface AuthorInfo {
  name: string;
  title?: string;
  company?: string;
}


export {
  BnbSupporterSlideProps
}