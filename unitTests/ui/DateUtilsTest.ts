import { DateUtils } from '../../src/utils/DateUtils';
import { IDateToStringOptions } from '../../src/utils/DateUtils';
import * as moment from 'moment';
import { l } from '../../src/strings/Strings';

export function DateUtilsTest() {
  describe('DateUtils', () => {
    let options: IDateToStringOptions;
    const containsTime = (result: string) => {
      return /am/i.test(result) || /pm/i.test(result);
    };

    beforeEach(() => {
      options = {
        now: moment('1980-02-11').toDate(),
        predefinedFormat: undefined
      };
      String['locale'] = 'en';
    });

    it('should use the correct locale if the locale is `no`', () => {
      String['locale'] = 'no';
      DateUtils.setLocale();
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate('1980-02-11'), options)).toEqual(l('Today'));
    });

    it('should use the correct locale if the locale is `id`', () => {
      String['locale'] = 'id';
      DateUtils.setLocale();
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate('1980-02-11'), options)).toEqual(l('Today'));
    });

    it('should use the correct locale if the locale is `es-ES`', () => {
      String['locale'] = 'es-ES';
      DateUtils.setLocale();
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate('1980-02-11'), options)).toEqual(l('Today'));
    });

    it('should use the correct locale if the locale is `zh-cn`', () => {
      String['locale'] = 'zh-tw';
      DateUtils.setLocale();
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate('1980-02-11'), options)).toEqual(l('Today'));
    });

    it('should default to `en` if the locale is invalid', () => {
      String['locale'] = 'foobar';
      DateUtils.setLocale();
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate('1980-02-11'), options)).toEqual(l('Today'));
    });

    it('should return an empty string if the date entry is null or undefined', () => {
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate(null), options)).toEqual(l(''));
    });

    it('should expose an alias for convertFromJsonDateIfNeeded for legacy reasons', () => {
      options.predefinedFormat = 'MM/DD/YYYY';
      expect(DateUtils.dateToString(DateUtils.convertFromJsonDateIfNeeded('2017/03/23'), options)).toEqual('03/23/2017');
    });

    it('should display the weekday if the date is this week when useTodayYesterdayAndTomorrow is set to false', () => {
      options.useTodayYesterdayAndTomorrow = false;
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate('1980/02/11'), options)).toEqual('Monday');
    });

    it('should display the correct predefinedFormat if the YYYY is lowercase', () => {
      options.predefinedFormat = 'MM/DD/yyyy';
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate('1980-02-11'), options)).toEqual(l('02/11/1980'));
    });

    it('should return `Invalid Date` if the date input is incorrect', () => {
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate('foobar'), options)).toEqual(l('Invalid date'));
    });

    it('should return `Invalid Date` timestamp is incorrect', () => {
      expect(DateUtils.dateToString(DateUtils.convertToStandardDate('1980-02-11 32:11:54'), options)).toEqual(l('Invalid date'));
    });

    it('should display the name of the month correctly using `monthToString`', () => {
      expect(DateUtils.monthToString(1)).toEqual(l('February'));
    });

    it('should display the right amount of time between two dates using `timeBetween`', () => {
      expect(DateUtils.timeBetween(new Date('2017-03-07T16:17:43'), new Date('2017-03-07T16:45:45'))).toEqual(l('00:28:02'));
    });

    it('dateTimeToString should respect the option to includeTime if set to true', () => {
      const now = new Date();
      const result = DateUtils.dateTimeToString(now, { includeTimeIfToday: true, includeTimeIfThisWeek: true });
      expect(containsTime(result)).toBe(true);
    });

    it('dateTimeToString should respect the option to includeTime if set to false', () => {
      const now = moment(new Date()).toDate();

      const result = DateUtils.dateTimeToString(now, { includeTimeIfToday: false, includeTimeIfThisWeek: false });
      expect(containsTime(result)).toBe(false);
    });

    it('dateTimeToString should respect includeTimeIfToday if the date is not today', () => {
      const notToday = moment(new Date())
        .subtract(2, 'days')
        .toDate();

      const result = DateUtils.dateTimeToString(notToday, { includeTimeIfToday: true, includeTimeIfThisWeek: false });
      expect(containsTime(result)).toBe(false);
    });

    it('dateTimeToString should respect includeTimeIfThisWeek if the date is not this week', () => {
      const notThisWeek = moment(new Date())
        .subtract(2, 'week')
        .toDate();

      const result = DateUtils.dateTimeToString(notThisWeek, { includeTimeIfToday: false, includeTimeIfThisWeek: true });
      expect(containsTime(result)).toBe(false);
    });

    it('dateTimeToString should respect the predefinedFormat without stripping minutes', () => {
      const oneAmInTheMorning = new Date(1512021600000);
      const result = DateUtils.dateTimeToString(oneAmInTheMorning, { predefinedFormat: 'MMMM DD, YYYY [at] h:mm' });
      expect(result).toBe('November 30, 2017 at 1:00');
    });

    it('dateTimeToString should properly return an empty string when the date is null', () => {
      const result = DateUtils.dateTimeToString(null);
      expect(result).toBe('');
    });

    it('dateTimeToString should properly return an empty string when the date is undefined', () => {
      const result = DateUtils.dateTimeToString(undefined);
      expect(result).toBe('');
    });

    it('dateTimeToString should properly return an empty string when passing in an invalid date', () => {
      const result = DateUtils.dateTimeToString(new Date('totally not a date'));
      expect(result).toBe('');
    });
  });
}
