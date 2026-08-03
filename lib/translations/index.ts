import en, { Translation } from './en';
import he from './he';
import es from './es';
import fr from './fr';
import de from './de';
import ar from './ar';
import zh from './zh';
import ja from './ja';
import ko from './ko';
import pt from './pt';
import it from './it';
import ru from './ru';
import hi from './hi';
import tr from './tr';
import nl from './nl';
import pl from './pl';
import sv from './sv';
import da from './da';
import no from './no';
import th from './th';

export const languages = [
  { code: 'he', name: 'עברית' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ar', name: 'العربية' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'pt', name: 'Português' },
  { code: 'it', name: 'Italiano' },
  { code: 'ru', name: 'Русский' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'pl', name: 'Polski' },
  { code: 'sv', name: 'Svenska' },
  { code: 'da', name: 'Dansk' },
  { code: 'no', name: 'Norsk' },
  { code: 'th', name: 'ไทย' }
];

export const translations: Record<string, Translation> = {
  en,
  he,
  es,
  fr,
  de,
  ar,
  zh,
  ja,
  ko,
  pt,
  it,
  ru,
  hi,
  tr,
  nl,
  pl,
  sv,
  da,
  no,
  th
};

export default translations;
