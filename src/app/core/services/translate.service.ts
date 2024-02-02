import { Injectable } from '@angular/core';
import { Language } from '../models/enum/language';
import { Direction } from '../models/enum';

@Injectable({ providedIn: 'root' })
export class DirectionService {
  changeDocumentDirection(lang: string) {
    if (lang === Language.Arabic) {
      document.documentElement.dir = Direction.RTL;
      document.documentElement.lang = Language.Arabic;
    } else {
      document.documentElement.dir = Direction.LTR;
      document.documentElement.lang = Language.English;
    }
  }
}
