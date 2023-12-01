import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Injectable()
export class OsgovtsLists {
  periods: SelectItem[] = [
    { label: 'Год', value: 1 },
    { label: '6 месяцев', value: 2 },
    { label: 'Следования к месту регистрации (до 20  дн.)', value: 4 },
  ];

  regions: SelectItem[] = [
    { label: 'г. Ташкент', value: 10 },
    { label: 'Ташкентская область', value: 11 },
    { label: 'Сырдарьинская область', value: 12 },
    { label: 'Джизакская область', value: 13 },
    { label: 'Самаркандская область', value: 14 },
    { label: 'Ферганская область', value: 15 },
    { label: 'Наманганская область', value: 16 },
    { label: 'Андижанская область', value: 17 },
    { label: 'Кашкадарьинская область', value: 18 },
    { label: 'Сурхандарьинская область', value: 19 },
    { label: 'Бухарская область', value: 20 },
    { label: 'Навоийская область', value: 21 },
    { label: 'Хорезмская область', value: 22 },
    { label: 'Республика Каракалпакстан', value: 23 },
  ];
}