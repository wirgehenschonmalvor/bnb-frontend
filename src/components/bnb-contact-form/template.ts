import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbContactFormProps, BnbContactFormMethods } from './defines';


export const template = ( data: BnbContactFormProps & BnbContactFormMethods ): HTMLFragment => {
  return html`
  <script src="https://cdnjs.cloudflare.com/ajax/libs/punycode/1.4.1/punycode.min.js"></script>
<script src="https://cdn.jotfor.ms/static/prototype.forms.js" type="text/javascript"></script>
<script src="https://cdn.jotfor.ms/static/jotform.forms.js?3.3.15953" type="text/javascript"></script>
<script type="text/javascript">
	JotForm.init(function(){
      setTimeout(function() {
          $('input_4').hint('E-Mail');
       }, 20);
if (window.JotForm && JotForm.accessible) $('input_6').setAttribute('tabindex',0);
      JotForm.setCustomHint( 'input_6', 'Meine Nachricht' );
	JotForm.newDefaultTheme = false;
      JotForm.alterTexts({"alphabetic":"Dieses Feld darf nur Buchstaben enthalten","alphanumeric":"Dieses Feld darf nur Buchstaben und Zahlen enthalten.","ccInvalidCVC":"CVC-Nummer ist ungültig.","ccInvalidExpireDate":"Ablaufdatum ungültig ist.","ccInvalidNumber":"Ungültige Kontodaten","ccMissingDetails":"Bitte füllen Sie die Kreditkartenangaben aus.","ccMissingDonation":"Bitte geben Sie numerische Werte für Spendenbetrag.","ccMissingProduct":"Bitte wählen Sie mindestens ein Produkt","characterLimitError":"Zu viele Zeichen. Die Grenze ist erreicht.","characterMinLimitError":"Zu wenige Zeichen. Das Minimum ist noch nicht erreicht.","confirmClearForm":"Sind Sie sicher, dass Sie das Formular leeren wollen?","confirmEmail":"E-Mail ist nicht korrekt","currency":"Diese Feld darf nur Währungswerte enthalten.","cyrillic":"Dieses Feld kann nur kyrillische Zeichen enthalten","dateInvalid":"Dieses Datum ist ung&amp;Atilde;&amp;frac14;ltig. Das Datumsformat ist wie folgt:","dateInvalidSeparate":"Dieses Datum ist nicht gültig. Geben Sie eine gültige {element}.","dateLimited":"Dieses Datum ist nicht verf&amp;Atilde;&amp;frac14;gbar.","disallowDecimals":"Bitte geben Sie eine ganze Zahl.","email":"Geben Sie eine gültige E-Mail Adresse ein","fillMask":"Der Feldwert muss die Maske ausfüllen","freeEmailError":"Kostenlose E-Mail-Konten sind nicht erlaubt","generalError":"In Ihrem Formular sind Fehler. Bitte beheben Sie diese bevor Sie fortfahren.","generalPageError":"Es existieren Fehler auf dieser Seite. Bitte beseitigen Sie sie bevor Sie fortfahren.","gradingScoreError":"Gesamtbewertung sollte nur weniger als oder gleich sein zu","incompleteFields":"Es gibt unvollständige Pflichtfelder. Bitte füllen Sie diese aus. ","inputCarretErrorB":"Die Eingabe sollte nicht größer sein als der Maximalwert:","lessThan":"Ihre Bewertung sollte geringer als oder gleich sein wie","maxDigitsError":"Die maximal erlaubten Ziffern sind","multipleFileUploads_emptyError":"{file} ist leer, bitte wählen Sie wieder Dateien ohne es.","multipleFileUploads_fileLimitError":"Nur {fileLimit} Dateiuploads sind erlaub!","multipleFileUploads_minSizeError":"{file} ist zu klein, minimale Dateigröße ist {minSizeLimit}.","multipleFileUploads_onLeave":"Die Dateien werden gerade hochgeladen. Wenn Sie die Seite jetzt verlassen, wird der Upload abgebrochen.","multipleFileUploads_sizeError":"{file} ist zu groß, die maximale Dateigröße ist {sizeLimit}.","multipleFileUploads_typeError":"{file} hat einen ungültigen Erweiterung. Nur {extensions} sind erlaubt.","nextButtonText":"Weiter","numeric":"Dieses Feld darf nur numerische Werte enthalten","pastDatesDisallowed":"Datum darf nicht in der Vergangenheit liegen.","pleaseWait":"Bitte warten Sie...","prevButtonText":"Zurück","required":"Dies ist ein Pflichtfeld.","requireEveryCell":"Jede Zelle ist erforderlich.","requireEveryRow":"Jede Zeile benötigt.","requireOne":"Mindestens ein Feld ist erforderlich.","seeAllText":"Alle anzeigen","submissionLimit":"Es tut uns leid. Es ist nur ein Eintrag erlaubt. Mehrfacheinträge sind in diesem Formular deaktiviert.","submitButtonText":"Absenden","uploadExtensions":"Sie k&amp;ouml;nnen nur folgende Dateien hochladen:","uploadFilesize":"Die Dateigröße kann nicht größer sein als:","uploadFilesizemin":"Die Dateigröße darf nicht tiefer sein als:","url":"Dieses Feld kann nur eine gültige URL enthalten","wordLimitError":"Zu viele Worte. Die Grenze ist erreicht.","wordMinLimitError":"Zu wenige Worte. Das Minimum ist noch nicht erreicht."});
	JotForm.clearFieldOnHide="disable";
	JotForm.submitError="jumpToFirstError";
    /*INIT-END*/
	});

   JotForm.prepareCalculationsOnTheFly([null,{"name":"heading","qid":"1","text":null,"type":"control_head"},{"name":"submit2","qid":"2","text":"Absenden","type":"control_button"},{"description":"","name":"name","qid":"3","text":"Name","type":"control_fullname"},{"description":"","name":"email","qid":"4","subLabel":"example@example.com","text":"Email","type":"control_email"},{"description":"","name":"telefonnummer","qid":"5","text":"Telefonnummer","type":"control_phone"},{"description":"","name":"meineNachricht","qid":"6","subLabel":"","text":"Meine Nachricht","type":"control_textarea"},{"description":"","name":"sicherheitsabfrage","qid":"7","text":"Sicherheitsabfrage","type":"control_captcha"}]);
   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,{"name":"heading","qid":"1","text":null,"type":"control_head"},{"name":"submit2","qid":"2","text":"Absenden","type":"control_button"},{"description":"","name":"name","qid":"3","text":"Name","type":"control_fullname"},{"description":"","name":"email","qid":"4","subLabel":"example@example.com","text":"Email","type":"control_email"},{"description":"","name":"telefonnummer","qid":"5","text":"Telefonnummer","type":"control_phone"},{"description":"","name":"meineNachricht","qid":"6","subLabel":"","text":"Meine Nachricht","type":"control_textarea"},{"description":"","name":"sicherheitsabfrage","qid":"7","text":"Sicherheitsabfrage","type":"control_captcha"}]);}, 20);
</script>
<!-- <link href="https://cdn.jotfor.ms/static/formCss.css?3.3.15953" rel="stylesheet" type="text/css" /> -->
<link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/nova.css?3.3.15953" />
<link type="text/css" media="print" rel="stylesheet" href="https://cdn.jotfor.ms/css/printForm.css?3.3.15953" />
<link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/themes/CSS/566a91c2977cdfcd478b4567.css?"/>
    <form class="jotform-form" action="https://submit.jotformeu.com/submit/200645110551037/" method="post" name="form_200645110551037" id="200645110551037" accept-charset="utf-8" autocomplete="on">
  <input type="hidden" name="formID" value="200645110551037" />
  <input type="hidden" id="JWTContainer" value="" />
  <input type="hidden" id="cardinalOrderNumber" value="" />
  <div role="main" class="form-all">
    <ul class="form-section page-section">
      <li class="form-line" data-type="control_fullname" id="id_3" data-compound-hint="Vorname,Nachname">
        <label class="form-label form-label-top form-label-auto" id="label_3" for="first_3"> Name </label>
        <div id="cid_3" class="form-input-wide">
          <div data-wrapper-react="true">
            <span class="form-sub-label-container " style="vertical-align:top" data-input-type="first">
              <input type="text" id="first_3" name="q3_name[first]" class="form-textbox" size="10" value="" placeholder="Vorname" data-component="first" aria-labelledby="label_3 sublabel_3_first" />
              <label class="form-sub-label" for="first_3" id="sublabel_3_first" style="min-height:13px" aria-hidden="false"> Vorname </label>
            </span>
            <span class="form-sub-label-container " style="vertical-align:top" data-input-type="last">
              <input type="text" id="last_3" name="q3_name[last]" class="form-textbox" size="15" value="" placeholder="Nachname" data-component="last" aria-labelledby="label_3 sublabel_3_last" />
              <label class="form-sub-label" for="last_3" id="sublabel_3_last" style="min-height:13px" aria-hidden="false"> Nachname </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_email" id="id_4">
        <label class="form-label form-label-top form-label-auto" id="label_4" for="input_4">
          Email
          <span class="form-required">
            *
          </span>
        </label>
        <div id="cid_4" class="form-input-wide jf-required">
          <span class="form-sub-label-container " style="vertical-align:top">
            <input type="email" id="input_4" name="q4_email" class="form-textbox validate[required, Email]" size="30" value="" placeholder="E-Mail*" data-component="email" aria-labelledby="label_4 sublabel_input_4" required="" />
            <label class="form-sub-label" for="input_4" id="sublabel_input_4" style="min-height:13px" aria-hidden="false"> example@example.com </label>
          </span>
        </div>
      </li>
      <li class="form-line" data-type="control_phone" id="id_5" data-compound-hint="+49175,12345678">
        <label class="form-label form-label-top form-label-auto" id="label_5" for="input_5_area"> Telefonnummer </label>
        <div id="cid_5" class="form-input-wide">
          <div data-wrapper-react="true">
            <span class="form-sub-label-container " style="vertical-align:top" data-input-type="areaCode">
              <input type="tel" id="input_5_area" name="q5_telefonnummer[area]" class="form-textbox" size="6" value="" placeholder="+49175" data-component="areaCode" aria-labelledby="label_5 sublabel_5_area" />
              <span class="phone-separate" aria-hidden="true">
                 -
              </span>
              <label class="form-sub-label" for="input_5_area" id="sublabel_5_area" style="min-height:13px" aria-hidden="false"> Vorwahl </label>
            </span>
            <span class="form-sub-label-container " style="vertical-align:top" data-input-type="phone">
              <input type="tel" id="input_5_phone" name="q5_telefonnummer[phone]" class="form-textbox" size="12" value="" placeholder="12345678" data-component="phone" aria-labelledby="label_5 sublabel_5_phone" />
              <label class="form-sub-label" for="input_5_phone" id="sublabel_5_phone" style="min-height:13px" aria-hidden="false"> Telefonnummer </label>
            </span>
          </div>
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_textarea" id="id_6">
        <label class="form-label form-label-top form-label-auto" id="label_6" for="input_6">
          Meine Nachricht
          <span class="form-required">
            *
          </span>
        </label>
        <div id="cid_6" class="form-input-wide jf-required">
          <textarea placeholder="Meine Nachricht*" id="input_6" class="form-textarea validate[required]" name="q6_meineNachricht" cols="40" rows="6" data-component="textarea" required="" aria-labelledby="label_6"></textarea>
        </div>
      </li>
      <li class="form-line">
        Mit * gekennzeichnete Felder sind Pflichtfelder.
      </li>
      <li class="form-line jf-required" data-type="control_captcha" id="id_7">
        <label class="form-label form-label-top form-label-auto" id="label_7" for="input_7">
          Sicherheitsabfrage
          <span class="form-required">
            *
          </span>
        </label>
        <div id="cid_7" class="form-input-wide jf-required">
          <section data-wrapper-react="true">
            <div id="recaptcha_input_7" data-component="recaptcha" data-callback="recaptchaCallbackinput_7" data-expired-callback="recaptchaExpiredCallbackinput_7">
            </div>
            <input type="hidden" id="input_7" class="hidden validate[required]" name="recaptcha_visible" required="" />
            <script type="text/javascript" src="https://www.google.com/recaptcha/api.js?render=explicit&amp;onload=recaptchaLoadedinput_7"></script>
            <script type="text/javascript">
                    var recaptchaLoadedinput_7 = function()
          {
            window.grecaptcha.render($("recaptcha_input_7"), {
              sitekey: '6LdU3CgUAAAAAB0nnFM3M3T0sy707slYYU51RroJ',
            });
            var grecaptchaBadge = document.querySelector('.grecaptcha-badge');
            if (grecaptchaBadge)
            {
              grecaptchaBadge.style.boxShadow = 'gray 0px 0px 2px';
            }
          };

        /**
         * Called when the reCaptcha verifies the user is human
         * For invisible reCaptcha;
         *   Submit event is stopped after validations and recaptcha is executed.
         *   If a challenge is not displayed, this will be called right after grecaptcha.execute()
         *   If a challenge is displayed, this will be called when the challenge is solved successfully
         *   Submit is triggered to actually submit the form since it is stopped before.
         */
        var recaptchaCallbackinput_7 = function()
          {
            var isInvisibleReCaptcha = false;
            var hiddenInput = $("input_7");
            hiddenInput.setValue(1);
            if (!isInvisibleReCaptcha)
            {
              if (hiddenInput.validateInput)
              {
                hiddenInput.validateInput();
              }
            }
            else
            {
              triggerSubmit(hiddenInput.form)
            }

            function triggerSubmit(formElement)
            {
              var button = formElement.ownerDocument.createElement('input');
              button.style.display = 'none';
              button.type = 'submit';
              formElement.appendChild(button).click();
              formElement.removeChild(button);
            }
          }

          // not really required for invisible recaptcha
        var recaptchaExpiredCallbackinput_7 = function()
          {
            var hiddenInput = $("input_7");
            hiddenInput.writeAttribute("value", false);
            if (hiddenInput.validateInput)
            {
              hiddenInput.validateInput();
            }
          }
            </script>
          </section>
        </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_2">
        <div id="cid_2" class="form-input-wide">
          <div style="margin-left:156px" data-align="auto" class="form-buttons-wrapper  ">
            <button id="input_2" type="submit" class="form-submit-button" data-component="button" data-content="">
              Absenden
            </button>
          </div>
        </div>
      </li>
      <li style="display:none">
        Should be Empty:
        <input type="text" name="website" value="" />
      </li>
    </ul>
  </div>
  <input type="hidden" id="simple_spc" name="simple_spc" value="200645110551037" />
  <script type="text/javascript">
  document.getElementById("si" + "mple" + "_spc").value = "200645110551037-200645110551037";
  </script>
</form>
<script type="text/javascript">JotForm.forwardToEu=true;</script>
    ${createStyle(styles)}
  `;
}
