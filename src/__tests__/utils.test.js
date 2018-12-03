/* global describe it */
import { isIos, isInStandaloneMode } from '../utils';
import assert from 'assert';

describe('isIos()', () => {
  it('should return true if the platform is iOS', done => {
    navigator.__defineGetter__('userAgent', () => 'iPhone');
    assert.strictEqual(isIos(), true);

    navigator.__defineGetter__('userAgent', () => 'iPad');
    assert.strictEqual(isIos(), true);

    navigator.__defineGetter__('userAgent', () => 'iPod');
    assert.strictEqual(isIos(), true);

    done();
  });

  it('should return false if the platform is not iOS', done => {
    navigator.__defineGetter__('userAgent', () => 'mockedUserAgent');
    assert.strictEqual(isIos(), false);

    done();
  });
});

describe('isInStandaloneMode()', () => {
  it('should return true if the PWA app is in standalone mode', done => {
    navigator.__defineGetter__('standalone', () => true);
    assert.strictEqual(isInStandaloneMode(), true);

    done();
  });

  it('should return false if the PWA app is not in standalone mode', done => {
    navigator.__defineGetter__('standalone', () => false);
    assert.strictEqual(isInStandaloneMode(), false);

    done();
  });
});
