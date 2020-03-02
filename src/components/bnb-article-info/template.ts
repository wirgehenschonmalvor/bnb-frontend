import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbArticleInfoProps } from './defines';

export const template = (data: BnbArticleInfoProps): HTMLFragment => {
	return html`
		${data.imageUrl
			? html`
					<img
						src="${data.imageUrl}"
						alt="avatar"
						aria-label="avatar picture"
					/>
			  `
			: ''}
		<div class="bnb-article-info__info">
			<p class="bnb-article-info__info-name">${data.name}</p>
			<p class="bnb-article-info__info-title">${data.title}</p>
			<p class="bnb-article-info__info-date">${data.date}</p>
		</div>
		${createStyle(styles)}
	`;
};
