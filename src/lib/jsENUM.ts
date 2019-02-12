/**
 * Get the key name that will be used to create the ENUM object, this could be the item case the item is a string or the first element of array case the item is a array
 *
 * @param item      The string or array that correspond to the current item
 * @param index     The current index that will be used case the user didn't send a custom value
 * @returns         Return true case the items are valid, or false case there are no items
 */
function getKey(item: string | ReadonlyArray<any>): any {
  return typeof item === 'string' ? item : item[0];
}

/**
 * Get the value that will be used to create the ENUM object, this value could be the index number or a custom value sent in item array
 *
 * @param item      The string or array that correspond to the current item
 * @param index     The current index that will be used case the user didn't send a custom value
 * @returns         Return true case the items are valid, or false case there are no items
 */
function getValue(item: string | ReadonlyArray<string>, index: any): string {
  return typeof item === 'string' ? index : item[1];
}

/**
 * Verify if the received items are valid to create an enum, emits an error case the items schema is invalid
 *
 * @param items     The items that will be addded in enum.
 * @returns         Return true case the items are valid, or false case there are no items
 */
function isValidItems(items: ReadonlyArray<any>): boolean {
  const isValidArray = (item: any) =>
    Array.isArray(item) && item.length === 2 && typeof item[0] === 'string';

  const isStringOrArrayDouble = () =>
    items.every(item => typeof item === 'string' || isValidArray(item));

  // tslint:disable-next-line
  if (!isStringOrArrayDouble()) {
    throw new Error('Invalid enum schema');
  }

  return items.length > 0;
}

/**
 * Creates the enum itself
 *
 * @param items     The items that will be addded in enum.
 * @returns         Returns an object with key and value.
 */
function createEnum(items: []): object {
  return items.reduce(
    (myEnum: object, item: string, index: number) => ({
      ...myEnum,
      [getKey(item)]: getValue(item, index)
    }),
    {}
  );
}

/**
 * An ENUM implementation in JS
 *
 * ### Example (es module)
 * ```js
 * import jsENUM from '@rxluz/js-enum';
 *
 * const direction = jsENUM('UP', 'DOWN', 'LEFT', 'RIGHT');
 * const myDirection = direction.DOWN;
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var jsENUM = require('@rxluz/js-enum').default;
 *
 * const direction = jsENUM('UP', 'DOWN', 'LEFT', 'RIGHT');
 * const myDirection = direction.DOWN;
 * ```
 *
 * @param ...items  The items that will be addded in enum.
 * @returns         Returns an object with key and value.
 * @compability     Works in the browser as well as node.
 */
export default function jsENUM(...items: any): object {
  return isValidItems(items) ? createEnum(items) : {};
}
