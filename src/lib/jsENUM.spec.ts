// tslint:disable:no-expression-statement
import test from 'ava';
import jsENUM from './jsENUM';

test('checking the values and keys from a default enum', t => {
  const direction: any = jsENUM('UP', 'DOWN', 'LEFT', 'RIGHT');

  t.log(JSON.stringify(direction));

  t.is(direction.UP, 0);
  t.is(direction.DOWN, 1);
  t.is(direction.LEFT, 2);
  t.is(direction.RIGHT, 3);
});

test('checking the values and keys from a enum with custom values', t => {
  const direction: any = jsENUM(
    ['UP', 'UP'],
    'DOWN',
    ['LEFT', 'left'],
    'RIGHT'
  );

  t.log(JSON.stringify(direction));

  t.is(direction.UP, 'UP');
  t.is(direction.DOWN, 1);
  t.is(direction.LEFT, 'left');
  t.is(direction.RIGHT, 3);
});

test('invalid schema with numbers', t => {
  const error = t.throws(() => {
    jsENUM(1, 2, 3);
  });

  t.is(error.message, 'Invalid enum schema');
});

test('invalid schema with boolean', t => {
  const error = t.throws(() => {
    jsENUM(true, false, true);
  });

  t.is(error.message, 'Invalid enum schema');
});

test('invalid schema with objects', t => {
  const error = t.throws(() => {
    jsENUM({ hello: 'world' }, {}, { hey: 'me', test: 'this' });
  });

  t.is(error.message, 'Invalid enum schema');
});

test('send an empty enum', t => {
  const direction: any = jsENUM();

  t.log(JSON.stringify(direction));

  t.is(JSON.stringify(direction), JSON.stringify({}));
});
