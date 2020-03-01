import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

export const template = (): HTMLFragment => {
	return html`
		<bnb-headline level="3">anmelden</bnb-headline>
		<div class="newsletter-form">
			<!-- Begin Mailchimp Signup Form -->
			<form
				action="https://brandnewbundestag.us4.list-manage.com/subscribe/post?u=84c699733b9aa82c84722c5e8&amp;id=d4e718f10b"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				class="validate"
				target="_blank"
				novalidate
			>
				<div>
					<div class="input__wrapper">
						<input
							type="email"
							name="EMAIL"
							class="required email"
							id="mce-EMAIL"
							placeholder="E-Mail*"
							required
						/>
						<label for="mce-EMAIL"
							>Email Address <span class="asterisk">*</span>
						</label>
					</div>
					<div class="input__wrapper">
						<input
							type="text"
							name="FNAME"
							id="mce-FNAME"
							placeholder="Vorname"
						/>
						<label for="mce-FNAME">Vorname</label>
					</div>
					<div class="input__wrapper">
						<input
							type="text"
							value=""
							name="LNAME"
							id="mce-LNAME"
							placeholder="Nachname"
						/>
						<label for="mce-LNAME">Nachname</label>
					</div>
					<div id="mce-responses" class="clear">
						<div
							class="response"
							id="mce-error-response"
							style="display:none"
						></div>
						<div
							class="response"
							id="mce-success-response"
							style="display:none"
						></div>
					</div>
					<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
					<div
						style="position: absolute; left: -5000px;"
						aria-hidden="true"
					>
						<input
							type="text"
							name="b_84c699733b9aa82c84722c5e8_d4e718f10b"
							tabindex="-1"
							value=""
						/>
					</div>
					<div class="clear">
						<input
							type="submit"
							value="Anmelden*"
							name="subscribe"
							id="mc-embedded-subscribe"
							class="button"
						/>
						<bnb-paragraph
							>* mit der Anmeldung zum Newsletter bestätige ich die
							Inkenntnisnahme der
							<bnb-link
								value="Datenschutzbestimmungen."
								url="/datenschutz.html"
								target="_blank"
							></bnb-link
							></bnb-paragraph
						>
					</div>
				</div>
			</form>

			<!--End mc_embed_signup-->
		</div>
		${createStyle(styles)}
	`;
};
