
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Cart_Items
 * 
 */
export type Cart_Items = $Result.DefaultSelection<Prisma.$Cart_ItemsPayload>
/**
 * Model Carts
 * 
 */
export type Carts = $Result.DefaultSelection<Prisma.$CartsPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Wishlists
 * 
 */
export type Wishlists = $Result.DefaultSelection<Prisma.$WishlistsPayload>
/**
 * Model Coupons
 * 
 */
export type Coupons = $Result.DefaultSelection<Prisma.$CouponsPayload>
/**
 * Model User_Coupons
 * 
 */
export type User_Coupons = $Result.DefaultSelection<Prisma.$User_CouponsPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  customer: 'customer',
  admin: 'admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart_Items`: Exposes CRUD operations for the **Cart_Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cart_Items
    * const cart_Items = await prisma.cart_Items.findMany()
    * ```
    */
  get cart_Items(): Prisma.Cart_ItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **Carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.CartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishlists`: Exposes CRUD operations for the **Wishlists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishlists
    * const wishlists = await prisma.wishlists.findMany()
    * ```
    */
  get wishlists(): Prisma.WishlistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupons`: Exposes CRUD operations for the **Coupons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupons.findMany()
    * ```
    */
  get coupons(): Prisma.CouponsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_Coupons`: Exposes CRUD operations for the **User_Coupons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Coupons
    * const user_Coupons = await prisma.user_Coupons.findMany()
    * ```
    */
  get user_Coupons(): Prisma.User_CouponsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Products: 'Products',
    Cart_Items: 'Cart_Items',
    Carts: 'Carts',
    Categories: 'Categories',
    Payments: 'Payments',
    Orders: 'Orders',
    Reviews: 'Reviews',
    Wishlists: 'Wishlists',
    Coupons: 'Coupons',
    User_Coupons: 'User_Coupons',
    Image: 'Image'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "products" | "cart_Items" | "carts" | "categories" | "payments" | "orders" | "reviews" | "wishlists" | "coupons" | "user_Coupons" | "image"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Cart_Items: {
        payload: Prisma.$Cart_ItemsPayload<ExtArgs>
        fields: Prisma.Cart_ItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Cart_ItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Cart_ItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload>
          }
          findFirst: {
            args: Prisma.Cart_ItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Cart_ItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload>
          }
          findMany: {
            args: Prisma.Cart_ItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload>[]
          }
          create: {
            args: Prisma.Cart_ItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload>
          }
          createMany: {
            args: Prisma.Cart_ItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Cart_ItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload>[]
          }
          delete: {
            args: Prisma.Cart_ItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload>
          }
          update: {
            args: Prisma.Cart_ItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload>
          }
          deleteMany: {
            args: Prisma.Cart_ItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Cart_ItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Cart_ItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload>[]
          }
          upsert: {
            args: Prisma.Cart_ItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cart_ItemsPayload>
          }
          aggregate: {
            args: Prisma.Cart_ItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart_Items>
          }
          groupBy: {
            args: Prisma.Cart_ItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cart_ItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Cart_ItemsCountArgs<ExtArgs>
            result: $Utils.Optional<Cart_ItemsCountAggregateOutputType> | number
          }
        }
      }
      Carts: {
        payload: Prisma.$CartsPayload<ExtArgs>
        fields: Prisma.CartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findFirst: {
            args: Prisma.CartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findMany: {
            args: Prisma.CartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          create: {
            args: Prisma.CartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          createMany: {
            args: Prisma.CartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          delete: {
            args: Prisma.CartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          update: {
            args: Prisma.CartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          deleteMany: {
            args: Prisma.CartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          upsert: {
            args: Prisma.CartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.CartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Wishlists: {
        payload: Prisma.$WishlistsPayload<ExtArgs>
        fields: Prisma.WishlistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishlistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishlistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload>
          }
          findFirst: {
            args: Prisma.WishlistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishlistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload>
          }
          findMany: {
            args: Prisma.WishlistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload>[]
          }
          create: {
            args: Prisma.WishlistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload>
          }
          createMany: {
            args: Prisma.WishlistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WishlistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload>[]
          }
          delete: {
            args: Prisma.WishlistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload>
          }
          update: {
            args: Prisma.WishlistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload>
          }
          deleteMany: {
            args: Prisma.WishlistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishlistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WishlistsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload>[]
          }
          upsert: {
            args: Prisma.WishlistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishlistsPayload>
          }
          aggregate: {
            args: Prisma.WishlistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlists>
          }
          groupBy: {
            args: Prisma.WishlistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishlistsCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistsCountAggregateOutputType> | number
          }
        }
      }
      Coupons: {
        payload: Prisma.$CouponsPayload<ExtArgs>
        fields: Prisma.CouponsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload>
          }
          findFirst: {
            args: Prisma.CouponsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload>
          }
          findMany: {
            args: Prisma.CouponsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload>[]
          }
          create: {
            args: Prisma.CouponsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload>
          }
          createMany: {
            args: Prisma.CouponsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload>[]
          }
          delete: {
            args: Prisma.CouponsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload>
          }
          update: {
            args: Prisma.CouponsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload>
          }
          deleteMany: {
            args: Prisma.CouponsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CouponsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload>[]
          }
          upsert: {
            args: Prisma.CouponsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponsPayload>
          }
          aggregate: {
            args: Prisma.CouponsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupons>
          }
          groupBy: {
            args: Prisma.CouponsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponsCountArgs<ExtArgs>
            result: $Utils.Optional<CouponsCountAggregateOutputType> | number
          }
        }
      }
      User_Coupons: {
        payload: Prisma.$User_CouponsPayload<ExtArgs>
        fields: Prisma.User_CouponsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_CouponsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_CouponsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload>
          }
          findFirst: {
            args: Prisma.User_CouponsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_CouponsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload>
          }
          findMany: {
            args: Prisma.User_CouponsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload>[]
          }
          create: {
            args: Prisma.User_CouponsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload>
          }
          createMany: {
            args: Prisma.User_CouponsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User_CouponsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload>[]
          }
          delete: {
            args: Prisma.User_CouponsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload>
          }
          update: {
            args: Prisma.User_CouponsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload>
          }
          deleteMany: {
            args: Prisma.User_CouponsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User_CouponsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User_CouponsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload>[]
          }
          upsert: {
            args: Prisma.User_CouponsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User_CouponsPayload>
          }
          aggregate: {
            args: Prisma.User_CouponsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_Coupons>
          }
          groupBy: {
            args: Prisma.User_CouponsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_CouponsGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_CouponsCountArgs<ExtArgs>
            result: $Utils.Optional<User_CouponsCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    products?: ProductsOmit
    cart_Items?: Cart_ItemsOmit
    carts?: CartsOmit
    categories?: CategoriesOmit
    payments?: PaymentsOmit
    orders?: OrdersOmit
    reviews?: ReviewsOmit
    wishlists?: WishlistsOmit
    coupons?: CouponsOmit
    user_Coupons?: User_CouponsOmit
    image?: ImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Carts: number
    Reviews: number
    Orders: number
    Wishlists: number
    User_Coupons: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carts?: boolean | UsersCountOutputTypeCountCartsArgs
    Reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    Orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    Wishlists?: boolean | UsersCountOutputTypeCountWishlistsArgs
    User_Coupons?: boolean | UsersCountOutputTypeCountUser_CouponsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWishlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_CouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_CouponsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    Cart_Items: number
    Reviews: number
    Wishlists: number
    images: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cart_Items?: boolean | ProductsCountOutputTypeCountCart_ItemsArgs
    Reviews?: boolean | ProductsCountOutputTypeCountReviewsArgs
    Wishlists?: boolean | ProductsCountOutputTypeCountWishlistsArgs
    images?: boolean | ProductsCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCart_ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Cart_ItemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountWishlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    Cart_Items: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cart_Items?: boolean | CartsCountOutputTypeCountCart_ItemsArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Cart_ItemsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    Children: number
    Products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Children?: boolean | CategoriesCountOutputTypeCountChildrenArgs
    Products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    Reviews: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reviews?: boolean | OrdersCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type CouponsCountOutputType
   */

  export type CouponsCountOutputType = {
    User_Coupons: number
  }

  export type CouponsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User_Coupons?: boolean | CouponsCountOutputTypeCountUser_CouponsArgs
  }

  // Custom InputTypes
  /**
   * CouponsCountOutputType without action
   */
  export type CouponsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CouponsCountOutputType
     */
    select?: CouponsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CouponsCountOutputType without action
   */
  export type CouponsCountOutputTypeCountUser_CouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_CouponsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
    role: $Enums.UserRole | null
    provider: string | null
    provider_id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
    role: $Enums.UserRole | null
    provider: string | null
    provider_id: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password: number
    phone: number
    address: number
    created_at: number
    updated_at: number
    role: number
    provider: number
    provider_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    created_at?: true
    updated_at?: true
    role?: true
    provider?: true
    provider_id?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    created_at?: true
    updated_at?: true
    role?: true
    provider?: true
    provider_id?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    address?: true
    created_at?: true
    updated_at?: true
    role?: true
    provider?: true
    provider_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    name: string
    email: string
    password: string
    phone: string | null
    address: string | null
    created_at: Date
    updated_at: Date
    role: $Enums.UserRole
    provider: string | null
    provider_id: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    provider?: boolean
    provider_id?: boolean
    Carts?: boolean | Users$CartsArgs<ExtArgs>
    Reviews?: boolean | Users$ReviewsArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    Wishlists?: boolean | Users$WishlistsArgs<ExtArgs>
    User_Coupons?: boolean | Users$User_CouponsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    provider?: boolean
    provider_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    provider?: boolean
    provider_id?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean
    provider?: boolean
    provider_id?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "password" | "phone" | "address" | "created_at" | "updated_at" | "role" | "provider" | "provider_id", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carts?: boolean | Users$CartsArgs<ExtArgs>
    Reviews?: boolean | Users$ReviewsArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    Wishlists?: boolean | Users$WishlistsArgs<ExtArgs>
    User_Coupons?: boolean | Users$User_CouponsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Carts: Prisma.$CartsPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      Wishlists: Prisma.$WishlistsPayload<ExtArgs>[]
      User_Coupons: Prisma.$User_CouponsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      email: string
      password: string
      phone: string | null
      address: string | null
      created_at: Date
      updated_at: Date
      role: $Enums.UserRole
      provider: string | null
      provider_id: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Carts<T extends Users$CartsArgs<ExtArgs> = {}>(args?: Subset<T, Users$CartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reviews<T extends Users$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends Users$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Users$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Wishlists<T extends Users$WishlistsArgs<ExtArgs> = {}>(args?: Subset<T, Users$WishlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User_Coupons<T extends Users$User_CouponsArgs<ExtArgs> = {}>(args?: Subset<T, Users$User_CouponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly address: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
    readonly role: FieldRef<"Users", 'UserRole'>
    readonly provider: FieldRef<"Users", 'String'>
    readonly provider_id: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Carts
   */
  export type Users$CartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    cursor?: CartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Users.Reviews
   */
  export type Users$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Users.Orders
   */
  export type Users$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users.Wishlists
   */
  export type Users$WishlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    where?: WishlistsWhereInput
    orderBy?: WishlistsOrderByWithRelationInput | WishlistsOrderByWithRelationInput[]
    cursor?: WishlistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistsScalarFieldEnum | WishlistsScalarFieldEnum[]
  }

  /**
   * Users.User_Coupons
   */
  export type Users$User_CouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    where?: User_CouponsWhereInput
    orderBy?: User_CouponsOrderByWithRelationInput | User_CouponsOrderByWithRelationInput[]
    cursor?: User_CouponsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_CouponsScalarFieldEnum | User_CouponsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    product_id: number | null
    price: Decimal | null
    stock: number | null
    category_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    product_id: number | null
    price: Decimal | null
    stock: number | null
    category_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    category_id: number | null
    created_at: Date | null
    products_option: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    stock: number | null
    category_id: number | null
    created_at: Date | null
    products_option: string | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    name: number
    description: number
    price: number
    stock: number
    category_id: number
    created_at: number
    products_option: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    product_id?: true
    price?: true
    stock?: true
    category_id?: true
  }

  export type ProductsSumAggregateInputType = {
    product_id?: true
    price?: true
    stock?: true
    category_id?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    category_id?: true
    created_at?: true
    products_option?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    category_id?: true
    created_at?: true
    products_option?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    name?: true
    description?: true
    price?: true
    stock?: true
    category_id?: true
    created_at?: true
    products_option?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    product_id: number
    name: string
    description: string | null
    price: Decimal
    stock: number
    category_id: number
    created_at: Date
    products_option: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    category_id?: boolean
    created_at?: boolean
    products_option?: boolean
    Category?: boolean | CategoriesDefaultArgs<ExtArgs>
    Cart_Items?: boolean | Products$Cart_ItemsArgs<ExtArgs>
    Reviews?: boolean | Products$ReviewsArgs<ExtArgs>
    Wishlists?: boolean | Products$WishlistsArgs<ExtArgs>
    images?: boolean | Products$imagesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    category_id?: boolean
    created_at?: boolean
    products_option?: boolean
    Category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    category_id?: boolean
    created_at?: boolean
    products_option?: boolean
    Category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    product_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    category_id?: boolean
    created_at?: boolean
    products_option?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "name" | "description" | "price" | "stock" | "category_id" | "created_at" | "products_option", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoriesDefaultArgs<ExtArgs>
    Cart_Items?: boolean | Products$Cart_ItemsArgs<ExtArgs>
    Reviews?: boolean | Products$ReviewsArgs<ExtArgs>
    Wishlists?: boolean | Products$WishlistsArgs<ExtArgs>
    images?: boolean | Products$imagesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      Category: Prisma.$CategoriesPayload<ExtArgs>
      Cart_Items: Prisma.$Cart_ItemsPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      Wishlists: Prisma.$WishlistsPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      name: string
      description: string | null
      price: Prisma.Decimal
      stock: number
      category_id: number
      created_at: Date
      products_option: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Cart_Items<T extends Products$Cart_ItemsArgs<ExtArgs> = {}>(args?: Subset<T, Products$Cart_ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reviews<T extends Products$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Products$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Wishlists<T extends Products$WishlistsArgs<ExtArgs> = {}>(args?: Subset<T, Products$WishlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Products$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Products$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly product_id: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Decimal'>
    readonly stock: FieldRef<"Products", 'Int'>
    readonly category_id: FieldRef<"Products", 'Int'>
    readonly created_at: FieldRef<"Products", 'DateTime'>
    readonly products_option: FieldRef<"Products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.Cart_Items
   */
  export type Products$Cart_ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    where?: Cart_ItemsWhereInput
    orderBy?: Cart_ItemsOrderByWithRelationInput | Cart_ItemsOrderByWithRelationInput[]
    cursor?: Cart_ItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_ItemsScalarFieldEnum | Cart_ItemsScalarFieldEnum[]
  }

  /**
   * Products.Reviews
   */
  export type Products$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Products.Wishlists
   */
  export type Products$WishlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    where?: WishlistsWhereInput
    orderBy?: WishlistsOrderByWithRelationInput | WishlistsOrderByWithRelationInput[]
    cursor?: WishlistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistsScalarFieldEnum | WishlistsScalarFieldEnum[]
  }

  /**
   * Products.images
   */
  export type Products$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Cart_Items
   */

  export type AggregateCart_Items = {
    _count: Cart_ItemsCountAggregateOutputType | null
    _avg: Cart_ItemsAvgAggregateOutputType | null
    _sum: Cart_ItemsSumAggregateOutputType | null
    _min: Cart_ItemsMinAggregateOutputType | null
    _max: Cart_ItemsMaxAggregateOutputType | null
  }

  export type Cart_ItemsAvgAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_ItemsSumAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_ItemsMinAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_ItemsMaxAggregateOutputType = {
    cart_item_id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_ItemsCountAggregateOutputType = {
    cart_item_id: number
    cart_id: number
    product_id: number
    quantity: number
    _all: number
  }


  export type Cart_ItemsAvgAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_ItemsSumAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_ItemsMinAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_ItemsMaxAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_ItemsCountAggregateInputType = {
    cart_item_id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    _all?: true
  }

  export type Cart_ItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart_Items to aggregate.
     */
    where?: Cart_ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cart_Items to fetch.
     */
    orderBy?: Cart_ItemsOrderByWithRelationInput | Cart_ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Cart_ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cart_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cart_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cart_Items
    **/
    _count?: true | Cart_ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cart_ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cart_ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cart_ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cart_ItemsMaxAggregateInputType
  }

  export type GetCart_ItemsAggregateType<T extends Cart_ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCart_Items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart_Items[P]>
      : GetScalarType<T[P], AggregateCart_Items[P]>
  }




  export type Cart_ItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Cart_ItemsWhereInput
    orderBy?: Cart_ItemsOrderByWithAggregationInput | Cart_ItemsOrderByWithAggregationInput[]
    by: Cart_ItemsScalarFieldEnum[] | Cart_ItemsScalarFieldEnum
    having?: Cart_ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cart_ItemsCountAggregateInputType | true
    _avg?: Cart_ItemsAvgAggregateInputType
    _sum?: Cart_ItemsSumAggregateInputType
    _min?: Cart_ItemsMinAggregateInputType
    _max?: Cart_ItemsMaxAggregateInputType
  }

  export type Cart_ItemsGroupByOutputType = {
    cart_item_id: number
    cart_id: number
    product_id: number
    quantity: number
    _count: Cart_ItemsCountAggregateOutputType | null
    _avg: Cart_ItemsAvgAggregateOutputType | null
    _sum: Cart_ItemsSumAggregateOutputType | null
    _min: Cart_ItemsMinAggregateOutputType | null
    _max: Cart_ItemsMaxAggregateOutputType | null
  }

  type GetCart_ItemsGroupByPayload<T extends Cart_ItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cart_ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cart_ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cart_ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], Cart_ItemsGroupByOutputType[P]>
        }
      >
    >


  export type Cart_ItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    Cart?: boolean | CartsDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_Items"]>

  export type Cart_ItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    Cart?: boolean | CartsDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_Items"]>

  export type Cart_ItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    Cart?: boolean | CartsDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_Items"]>

  export type Cart_ItemsSelectScalar = {
    cart_item_id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
  }

  export type Cart_ItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_item_id" | "cart_id" | "product_id" | "quantity", ExtArgs["result"]["cart_Items"]>
  export type Cart_ItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cart?: boolean | CartsDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type Cart_ItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cart?: boolean | CartsDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type Cart_ItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cart?: boolean | CartsDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $Cart_ItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart_Items"
    objects: {
      Cart: Prisma.$CartsPayload<ExtArgs>
      Product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_item_id: number
      cart_id: number
      product_id: number
      quantity: number
    }, ExtArgs["result"]["cart_Items"]>
    composites: {}
  }

  type Cart_ItemsGetPayload<S extends boolean | null | undefined | Cart_ItemsDefaultArgs> = $Result.GetResult<Prisma.$Cart_ItemsPayload, S>

  type Cart_ItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Cart_ItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cart_ItemsCountAggregateInputType | true
    }

  export interface Cart_ItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart_Items'], meta: { name: 'Cart_Items' } }
    /**
     * Find zero or one Cart_Items that matches the filter.
     * @param {Cart_ItemsFindUniqueArgs} args - Arguments to find a Cart_Items
     * @example
     * // Get one Cart_Items
     * const cart_Items = await prisma.cart_Items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Cart_ItemsFindUniqueArgs>(args: SelectSubset<T, Cart_ItemsFindUniqueArgs<ExtArgs>>): Prisma__Cart_ItemsClient<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart_Items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Cart_ItemsFindUniqueOrThrowArgs} args - Arguments to find a Cart_Items
     * @example
     * // Get one Cart_Items
     * const cart_Items = await prisma.cart_Items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Cart_ItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, Cart_ItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Cart_ItemsClient<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_ItemsFindFirstArgs} args - Arguments to find a Cart_Items
     * @example
     * // Get one Cart_Items
     * const cart_Items = await prisma.cart_Items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Cart_ItemsFindFirstArgs>(args?: SelectSubset<T, Cart_ItemsFindFirstArgs<ExtArgs>>): Prisma__Cart_ItemsClient<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_Items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_ItemsFindFirstOrThrowArgs} args - Arguments to find a Cart_Items
     * @example
     * // Get one Cart_Items
     * const cart_Items = await prisma.cart_Items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Cart_ItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, Cart_ItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Cart_ItemsClient<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cart_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_ItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cart_Items
     * const cart_Items = await prisma.cart_Items.findMany()
     * 
     * // Get first 10 Cart_Items
     * const cart_Items = await prisma.cart_Items.findMany({ take: 10 })
     * 
     * // Only select the `cart_item_id`
     * const cart_ItemsWithCart_item_idOnly = await prisma.cart_Items.findMany({ select: { cart_item_id: true } })
     * 
     */
    findMany<T extends Cart_ItemsFindManyArgs>(args?: SelectSubset<T, Cart_ItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart_Items.
     * @param {Cart_ItemsCreateArgs} args - Arguments to create a Cart_Items.
     * @example
     * // Create one Cart_Items
     * const Cart_Items = await prisma.cart_Items.create({
     *   data: {
     *     // ... data to create a Cart_Items
     *   }
     * })
     * 
     */
    create<T extends Cart_ItemsCreateArgs>(args: SelectSubset<T, Cart_ItemsCreateArgs<ExtArgs>>): Prisma__Cart_ItemsClient<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cart_Items.
     * @param {Cart_ItemsCreateManyArgs} args - Arguments to create many Cart_Items.
     * @example
     * // Create many Cart_Items
     * const cart_Items = await prisma.cart_Items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Cart_ItemsCreateManyArgs>(args?: SelectSubset<T, Cart_ItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cart_Items and returns the data saved in the database.
     * @param {Cart_ItemsCreateManyAndReturnArgs} args - Arguments to create many Cart_Items.
     * @example
     * // Create many Cart_Items
     * const cart_Items = await prisma.cart_Items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cart_Items and only return the `cart_item_id`
     * const cart_ItemsWithCart_item_idOnly = await prisma.cart_Items.createManyAndReturn({
     *   select: { cart_item_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Cart_ItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, Cart_ItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart_Items.
     * @param {Cart_ItemsDeleteArgs} args - Arguments to delete one Cart_Items.
     * @example
     * // Delete one Cart_Items
     * const Cart_Items = await prisma.cart_Items.delete({
     *   where: {
     *     // ... filter to delete one Cart_Items
     *   }
     * })
     * 
     */
    delete<T extends Cart_ItemsDeleteArgs>(args: SelectSubset<T, Cart_ItemsDeleteArgs<ExtArgs>>): Prisma__Cart_ItemsClient<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart_Items.
     * @param {Cart_ItemsUpdateArgs} args - Arguments to update one Cart_Items.
     * @example
     * // Update one Cart_Items
     * const cart_Items = await prisma.cart_Items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Cart_ItemsUpdateArgs>(args: SelectSubset<T, Cart_ItemsUpdateArgs<ExtArgs>>): Prisma__Cart_ItemsClient<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cart_Items.
     * @param {Cart_ItemsDeleteManyArgs} args - Arguments to filter Cart_Items to delete.
     * @example
     * // Delete a few Cart_Items
     * const { count } = await prisma.cart_Items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Cart_ItemsDeleteManyArgs>(args?: SelectSubset<T, Cart_ItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cart_Items
     * const cart_Items = await prisma.cart_Items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Cart_ItemsUpdateManyArgs>(args: SelectSubset<T, Cart_ItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_Items and returns the data updated in the database.
     * @param {Cart_ItemsUpdateManyAndReturnArgs} args - Arguments to update many Cart_Items.
     * @example
     * // Update many Cart_Items
     * const cart_Items = await prisma.cart_Items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cart_Items and only return the `cart_item_id`
     * const cart_ItemsWithCart_item_idOnly = await prisma.cart_Items.updateManyAndReturn({
     *   select: { cart_item_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Cart_ItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, Cart_ItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart_Items.
     * @param {Cart_ItemsUpsertArgs} args - Arguments to update or create a Cart_Items.
     * @example
     * // Update or create a Cart_Items
     * const cart_Items = await prisma.cart_Items.upsert({
     *   create: {
     *     // ... data to create a Cart_Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart_Items we want to update
     *   }
     * })
     */
    upsert<T extends Cart_ItemsUpsertArgs>(args: SelectSubset<T, Cart_ItemsUpsertArgs<ExtArgs>>): Prisma__Cart_ItemsClient<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cart_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_ItemsCountArgs} args - Arguments to filter Cart_Items to count.
     * @example
     * // Count the number of Cart_Items
     * const count = await prisma.cart_Items.count({
     *   where: {
     *     // ... the filter for the Cart_Items we want to count
     *   }
     * })
    **/
    count<T extends Cart_ItemsCountArgs>(
      args?: Subset<T, Cart_ItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cart_ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cart_ItemsAggregateArgs>(args: Subset<T, Cart_ItemsAggregateArgs>): Prisma.PrismaPromise<GetCart_ItemsAggregateType<T>>

    /**
     * Group by Cart_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_ItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Cart_ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Cart_ItemsGroupByArgs['orderBy'] }
        : { orderBy?: Cart_ItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Cart_ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_ItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart_Items model
   */
  readonly fields: Cart_ItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart_Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Cart_ItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cart<T extends CartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartsDefaultArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart_Items model
   */
  interface Cart_ItemsFieldRefs {
    readonly cart_item_id: FieldRef<"Cart_Items", 'Int'>
    readonly cart_id: FieldRef<"Cart_Items", 'Int'>
    readonly product_id: FieldRef<"Cart_Items", 'Int'>
    readonly quantity: FieldRef<"Cart_Items", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cart_Items findUnique
   */
  export type Cart_ItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Cart_Items to fetch.
     */
    where: Cart_ItemsWhereUniqueInput
  }

  /**
   * Cart_Items findUniqueOrThrow
   */
  export type Cart_ItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Cart_Items to fetch.
     */
    where: Cart_ItemsWhereUniqueInput
  }

  /**
   * Cart_Items findFirst
   */
  export type Cart_ItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Cart_Items to fetch.
     */
    where?: Cart_ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cart_Items to fetch.
     */
    orderBy?: Cart_ItemsOrderByWithRelationInput | Cart_ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cart_Items.
     */
    cursor?: Cart_ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cart_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cart_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cart_Items.
     */
    distinct?: Cart_ItemsScalarFieldEnum | Cart_ItemsScalarFieldEnum[]
  }

  /**
   * Cart_Items findFirstOrThrow
   */
  export type Cart_ItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Cart_Items to fetch.
     */
    where?: Cart_ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cart_Items to fetch.
     */
    orderBy?: Cart_ItemsOrderByWithRelationInput | Cart_ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cart_Items.
     */
    cursor?: Cart_ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cart_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cart_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cart_Items.
     */
    distinct?: Cart_ItemsScalarFieldEnum | Cart_ItemsScalarFieldEnum[]
  }

  /**
   * Cart_Items findMany
   */
  export type Cart_ItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    /**
     * Filter, which Cart_Items to fetch.
     */
    where?: Cart_ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cart_Items to fetch.
     */
    orderBy?: Cart_ItemsOrderByWithRelationInput | Cart_ItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cart_Items.
     */
    cursor?: Cart_ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cart_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cart_Items.
     */
    skip?: number
    distinct?: Cart_ItemsScalarFieldEnum | Cart_ItemsScalarFieldEnum[]
  }

  /**
   * Cart_Items create
   */
  export type Cart_ItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart_Items.
     */
    data: XOR<Cart_ItemsCreateInput, Cart_ItemsUncheckedCreateInput>
  }

  /**
   * Cart_Items createMany
   */
  export type Cart_ItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cart_Items.
     */
    data: Cart_ItemsCreateManyInput | Cart_ItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart_Items createManyAndReturn
   */
  export type Cart_ItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * The data used to create many Cart_Items.
     */
    data: Cart_ItemsCreateManyInput | Cart_ItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart_Items update
   */
  export type Cart_ItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart_Items.
     */
    data: XOR<Cart_ItemsUpdateInput, Cart_ItemsUncheckedUpdateInput>
    /**
     * Choose, which Cart_Items to update.
     */
    where: Cart_ItemsWhereUniqueInput
  }

  /**
   * Cart_Items updateMany
   */
  export type Cart_ItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cart_Items.
     */
    data: XOR<Cart_ItemsUpdateManyMutationInput, Cart_ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Cart_Items to update
     */
    where?: Cart_ItemsWhereInput
    /**
     * Limit how many Cart_Items to update.
     */
    limit?: number
  }

  /**
   * Cart_Items updateManyAndReturn
   */
  export type Cart_ItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * The data used to update Cart_Items.
     */
    data: XOR<Cart_ItemsUpdateManyMutationInput, Cart_ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Cart_Items to update
     */
    where?: Cart_ItemsWhereInput
    /**
     * Limit how many Cart_Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart_Items upsert
   */
  export type Cart_ItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart_Items to update in case it exists.
     */
    where: Cart_ItemsWhereUniqueInput
    /**
     * In case the Cart_Items found by the `where` argument doesn't exist, create a new Cart_Items with this data.
     */
    create: XOR<Cart_ItemsCreateInput, Cart_ItemsUncheckedCreateInput>
    /**
     * In case the Cart_Items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Cart_ItemsUpdateInput, Cart_ItemsUncheckedUpdateInput>
  }

  /**
   * Cart_Items delete
   */
  export type Cart_ItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    /**
     * Filter which Cart_Items to delete.
     */
    where: Cart_ItemsWhereUniqueInput
  }

  /**
   * Cart_Items deleteMany
   */
  export type Cart_ItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart_Items to delete
     */
    where?: Cart_ItemsWhereInput
    /**
     * Limit how many Cart_Items to delete.
     */
    limit?: number
  }

  /**
   * Cart_Items without action
   */
  export type Cart_ItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
  }


  /**
   * Model Carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsAvgAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
  }

  export type CartsSumAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
  }

  export type CartsMinAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
  }

  export type CartsMaxAggregateOutputType = {
    cart_id: number | null
    user_id: number | null
  }

  export type CartsCountAggregateOutputType = {
    cart_id: number
    user_id: number
    _all: number
  }


  export type CartsAvgAggregateInputType = {
    cart_id?: true
    user_id?: true
  }

  export type CartsSumAggregateInputType = {
    cart_id?: true
    user_id?: true
  }

  export type CartsMinAggregateInputType = {
    cart_id?: true
    user_id?: true
  }

  export type CartsMaxAggregateInputType = {
    cart_id?: true
    user_id?: true
  }

  export type CartsCountAggregateInputType = {
    cart_id?: true
    user_id?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to aggregate.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type CartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithAggregationInput | CartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: CartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _avg?: CartsAvgAggregateInputType
    _sum?: CartsSumAggregateInputType
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    cart_id: number
    user_id: number
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends CartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type CartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    user_id?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Cart_Items?: boolean | Carts$Cart_ItemsArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    user_id?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cart_id?: boolean
    user_id?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectScalar = {
    cart_id?: boolean
    user_id?: boolean
  }

  export type CartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cart_id" | "user_id", ExtArgs["result"]["carts"]>
  export type CartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Cart_Items?: boolean | Carts$Cart_ItemsArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carts"
    objects: {
      User: Prisma.$UsersPayload<ExtArgs>
      Cart_Items: Prisma.$Cart_ItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cart_id: number
      user_id: number
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type CartsGetPayload<S extends boolean | null | undefined | CartsDefaultArgs> = $Result.GetResult<Prisma.$CartsPayload, S>

  type CartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface CartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carts'], meta: { name: 'Carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {CartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartsFindUniqueArgs>(args: SelectSubset<T, CartsFindUniqueArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartsFindFirstArgs>(args?: SelectSubset<T, CartsFindFirstArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `cart_id`
     * const cartsWithCart_idOnly = await prisma.carts.findMany({ select: { cart_id: true } })
     * 
     */
    findMany<T extends CartsFindManyArgs>(args?: SelectSubset<T, CartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {CartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends CartsCreateArgs>(args: SelectSubset<T, CartsCreateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartsCreateManyArgs>(args?: SelectSubset<T, CartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `cart_id`
     * const cartsWithCart_idOnly = await prisma.carts.createManyAndReturn({
     *   select: { cart_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartsCreateManyAndReturnArgs>(args?: SelectSubset<T, CartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {CartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends CartsDeleteArgs>(args: SelectSubset<T, CartsDeleteArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {CartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartsUpdateArgs>(args: SelectSubset<T, CartsUpdateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartsDeleteManyArgs>(args?: SelectSubset<T, CartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartsUpdateManyArgs>(args: SelectSubset<T, CartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `cart_id`
     * const cartsWithCart_idOnly = await prisma.carts.updateManyAndReturn({
     *   select: { cart_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartsUpdateManyAndReturnArgs>(args: SelectSubset<T, CartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {CartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends CartsUpsertArgs>(args: SelectSubset<T, CartsUpsertArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartsCountArgs>(
      args?: Subset<T, CartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartsGroupByArgs['orderBy'] }
        : { orderBy?: CartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carts model
   */
  readonly fields: CartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Cart_Items<T extends Carts$Cart_ItemsArgs<ExtArgs> = {}>(args?: Subset<T, Carts$Cart_ItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cart_ItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carts model
   */
  interface CartsFieldRefs {
    readonly cart_id: FieldRef<"Carts", 'Int'>
    readonly user_id: FieldRef<"Carts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Carts findUnique
   */
  export type CartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findUniqueOrThrow
   */
  export type CartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findFirst
   */
  export type CartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findFirstOrThrow
   */
  export type CartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findMany
   */
  export type CartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts create
   */
  export type CartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to create a Carts.
     */
    data: XOR<CartsCreateInput, CartsUncheckedCreateInput>
  }

  /**
   * Carts createMany
   */
  export type CartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carts createManyAndReturn
   */
  export type CartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts update
   */
  export type CartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to update a Carts.
     */
    data: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
    /**
     * Choose, which Carts to update.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts updateMany
   */
  export type CartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Carts updateManyAndReturn
   */
  export type CartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts upsert
   */
  export type CartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The filter to search for the Carts to update in case it exists.
     */
    where: CartsWhereUniqueInput
    /**
     * In case the Carts found by the `where` argument doesn't exist, create a new Carts with this data.
     */
    create: XOR<CartsCreateInput, CartsUncheckedCreateInput>
    /**
     * In case the Carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
  }

  /**
   * Carts delete
   */
  export type CartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter which Carts to delete.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts deleteMany
   */
  export type CartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Carts.Cart_Items
   */
  export type Carts$Cart_ItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Items
     */
    select?: Cart_ItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart_Items
     */
    omit?: Cart_ItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cart_ItemsInclude<ExtArgs> | null
    where?: Cart_ItemsWhereInput
    orderBy?: Cart_ItemsOrderByWithRelationInput | Cart_ItemsOrderByWithRelationInput[]
    cursor?: Cart_ItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_ItemsScalarFieldEnum | Cart_ItemsScalarFieldEnum[]
  }

  /**
   * Carts without action
   */
  export type CartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    category_id: number | null
    parent_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    category_id: number | null
    parent_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    category_id: number | null
    name: string | null
    parent_id: number | null
  }

  export type CategoriesMaxAggregateOutputType = {
    category_id: number | null
    name: string | null
    parent_id: number | null
  }

  export type CategoriesCountAggregateOutputType = {
    category_id: number
    name: number
    parent_id: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    category_id?: true
    parent_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    category_id?: true
    parent_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    category_id?: true
    name?: true
    parent_id?: true
  }

  export type CategoriesMaxAggregateInputType = {
    category_id?: true
    name?: true
    parent_id?: true
  }

  export type CategoriesCountAggregateInputType = {
    category_id?: true
    name?: true
    parent_id?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    category_id: number
    name: string
    parent_id: number | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    parent_id?: boolean
    Parent?: boolean | Categories$ParentArgs<ExtArgs>
    Children?: boolean | Categories$ChildrenArgs<ExtArgs>
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    parent_id?: boolean
    Parent?: boolean | Categories$ParentArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    name?: boolean
    parent_id?: boolean
    Parent?: boolean | Categories$ParentArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    category_id?: boolean
    name?: boolean
    parent_id?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "name" | "parent_id", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | Categories$ParentArgs<ExtArgs>
    Children?: boolean | Categories$ChildrenArgs<ExtArgs>
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | Categories$ParentArgs<ExtArgs>
  }
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Parent?: boolean | Categories$ParentArgs<ExtArgs>
  }

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      Parent: Prisma.$CategoriesPayload<ExtArgs> | null
      Children: Prisma.$CategoriesPayload<ExtArgs>[]
      Products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      name: string
      parent_id: number | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Parent<T extends Categories$ParentArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ParentArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Children<T extends Categories$ChildrenArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ChildrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Products<T extends Categories$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly category_id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly parent_id: FieldRef<"Categories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.Parent
   */
  export type Categories$ParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
  }

  /**
   * Categories.Children
   */
  export type Categories$ChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    cursor?: CategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories.Products
   */
  export type Categories$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    payment_id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    payment_id: number | null
    order_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    payment_id: number | null
    order_id: number | null
    method: string | null
    amount: Decimal | null
    paid_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    payment_id: number | null
    order_id: number | null
    method: string | null
    amount: Decimal | null
    paid_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    payment_id: number
    order_id: number
    method: number
    amount: number
    paid_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    payment_id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    payment_id?: true
    order_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    payment_id?: true
    order_id?: true
    method?: true
    amount?: true
    paid_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    payment_id?: true
    order_id?: true
    method?: true
    amount?: true
    paid_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    payment_id?: true
    order_id?: true
    method?: true
    amount?: true
    paid_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    payment_id: number
    order_id: number
    method: string
    amount: Decimal
    paid_at: Date | null
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    paid_at?: boolean
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    paid_at?: boolean
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    paid_at?: boolean
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type PaymentsSelectScalar = {
    payment_id?: boolean
    order_id?: boolean
    method?: boolean
    amount?: boolean
    paid_at?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "order_id" | "method" | "amount" | "paid_at", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      Order: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      order_id: number
      method: string
      amount: Prisma.Decimal
      paid_at: Date | null
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentsWithPayment_idOnly = await prisma.payments.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `payment_id`
     * const paymentsWithPayment_idOnly = await prisma.payments.createManyAndReturn({
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `payment_id`
     * const paymentsWithPayment_idOnly = await prisma.payments.updateManyAndReturn({
     *   select: { payment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly payment_id: FieldRef<"Payments", 'Int'>
    readonly order_id: FieldRef<"Payments", 'Int'>
    readonly method: FieldRef<"Payments", 'String'>
    readonly amount: FieldRef<"Payments", 'Decimal'>
    readonly paid_at: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments createManyAndReturn
   */
  export type PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments updateManyAndReturn
   */
  export type PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    total_price: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    total_price: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    status: string | null
    total_price: Decimal | null
    created_at: Date | null
    payment_state: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    status: string | null
    total_price: Decimal | null
    created_at: Date | null
    payment_state: string | null
  }

  export type OrdersCountAggregateOutputType = {
    order_id: number
    user_id: number
    status: number
    total_price: number
    created_at: number
    payment_state: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    order_id?: true
    user_id?: true
    total_price?: true
  }

  export type OrdersSumAggregateInputType = {
    order_id?: true
    user_id?: true
    total_price?: true
  }

  export type OrdersMinAggregateInputType = {
    order_id?: true
    user_id?: true
    status?: true
    total_price?: true
    created_at?: true
    payment_state?: true
  }

  export type OrdersMaxAggregateInputType = {
    order_id?: true
    user_id?: true
    status?: true
    total_price?: true
    created_at?: true
    payment_state?: true
  }

  export type OrdersCountAggregateInputType = {
    order_id?: true
    user_id?: true
    status?: true
    total_price?: true
    created_at?: true
    payment_state?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    order_id: number
    user_id: number
    status: string
    total_price: Decimal
    created_at: Date
    payment_state: string | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    status?: boolean
    total_price?: boolean
    created_at?: boolean
    payment_state?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Payment?: boolean | Orders$PaymentArgs<ExtArgs>
    Reviews?: boolean | Orders$ReviewsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    status?: boolean
    total_price?: boolean
    created_at?: boolean
    payment_state?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    status?: boolean
    total_price?: boolean
    created_at?: boolean
    payment_state?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    order_id?: boolean
    user_id?: boolean
    status?: boolean
    total_price?: boolean
    created_at?: boolean
    payment_state?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "user_id" | "status" | "total_price" | "created_at" | "payment_state", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Payment?: boolean | Orders$PaymentArgs<ExtArgs>
    Reviews?: boolean | Orders$ReviewsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      User: Prisma.$UsersPayload<ExtArgs>
      Payment: Prisma.$PaymentsPayload<ExtArgs> | null
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      user_id: number
      status: string
      total_price: Prisma.Decimal
      created_at: Date
      payment_state: string | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.updateManyAndReturn({
     *   select: { order_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Payment<T extends Orders$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Orders$PaymentArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Reviews<T extends Orders$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly order_id: FieldRef<"Orders", 'Int'>
    readonly user_id: FieldRef<"Orders", 'Int'>
    readonly status: FieldRef<"Orders", 'String'>
    readonly total_price: FieldRef<"Orders", 'Decimal'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
    readonly payment_state: FieldRef<"Orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.Payment
   */
  export type Orders$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
  }

  /**
   * Orders.Reviews
   */
  export type Orders$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    order_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    order_id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    order_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    product_id: number | null
    order_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    review_id: number
    user_id: number
    product_id: number
    order_id: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    order_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    order_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    order_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewsMaxAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    order_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewsCountAggregateInputType = {
    review_id?: true
    user_id?: true
    product_id?: true
    order_id?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    review_id: number
    user_id: number
    product_id: number
    order_id: number | null
    rating: number
    comment: string | null
    created_at: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    order_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
    Order?: boolean | Reviews$OrderArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    order_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
    Order?: boolean | Reviews$OrderArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    order_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
    Order?: boolean | Reviews$OrderArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    review_id?: boolean
    user_id?: boolean
    product_id?: boolean
    order_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "user_id" | "product_id" | "order_id" | "rating" | "comment" | "created_at", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
    Order?: boolean | Reviews$OrderArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
    Order?: boolean | Reviews$OrderArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
    Order?: boolean | Reviews$OrderArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      User: Prisma.$UsersPayload<ExtArgs>
      Product: Prisma.$ProductsPayload<ExtArgs>
      Order: Prisma.$OrdersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      user_id: number
      product_id: number
      order_id: number | null
      rating: number
      comment: string | null
      created_at: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { review_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Order<T extends Reviews$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Reviews$OrderArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly review_id: FieldRef<"Reviews", 'Int'>
    readonly user_id: FieldRef<"Reviews", 'Int'>
    readonly product_id: FieldRef<"Reviews", 'Int'>
    readonly order_id: FieldRef<"Reviews", 'Int'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly created_at: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews.Order
   */
  export type Reviews$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Wishlists
   */

  export type AggregateWishlists = {
    _count: WishlistsCountAggregateOutputType | null
    _avg: WishlistsAvgAggregateOutputType | null
    _sum: WishlistsSumAggregateOutputType | null
    _min: WishlistsMinAggregateOutputType | null
    _max: WishlistsMaxAggregateOutputType | null
  }

  export type WishlistsAvgAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type WishlistsSumAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    product_id: number | null
  }

  export type WishlistsMinAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    product_id: number | null
    created_at: Date | null
  }

  export type WishlistsMaxAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    product_id: number | null
    created_at: Date | null
  }

  export type WishlistsCountAggregateOutputType = {
    wishlist_id: number
    user_id: number
    product_id: number
    created_at: number
    _all: number
  }


  export type WishlistsAvgAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
  }

  export type WishlistsSumAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
  }

  export type WishlistsMinAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
    created_at?: true
  }

  export type WishlistsMaxAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
    created_at?: true
  }

  export type WishlistsCountAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    product_id?: true
    created_at?: true
    _all?: true
  }

  export type WishlistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlists to aggregate.
     */
    where?: WishlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistsOrderByWithRelationInput | WishlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wishlists
    **/
    _count?: true | WishlistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishlistsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishlistsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistsMaxAggregateInputType
  }

  export type GetWishlistsAggregateType<T extends WishlistsAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlists[P]>
      : GetScalarType<T[P], AggregateWishlists[P]>
  }




  export type WishlistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishlistsWhereInput
    orderBy?: WishlistsOrderByWithAggregationInput | WishlistsOrderByWithAggregationInput[]
    by: WishlistsScalarFieldEnum[] | WishlistsScalarFieldEnum
    having?: WishlistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistsCountAggregateInputType | true
    _avg?: WishlistsAvgAggregateInputType
    _sum?: WishlistsSumAggregateInputType
    _min?: WishlistsMinAggregateInputType
    _max?: WishlistsMaxAggregateInputType
  }

  export type WishlistsGroupByOutputType = {
    wishlist_id: number
    user_id: number
    product_id: number
    created_at: Date
    _count: WishlistsCountAggregateOutputType | null
    _avg: WishlistsAvgAggregateOutputType | null
    _sum: WishlistsSumAggregateOutputType | null
    _min: WishlistsMinAggregateOutputType | null
    _max: WishlistsMaxAggregateOutputType | null
  }

  type GetWishlistsGroupByPayload<T extends WishlistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistsGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistsGroupByOutputType[P]>
        }
      >
    >


  export type WishlistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wishlist_id?: boolean
    user_id?: boolean
    product_id?: boolean
    created_at?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlists"]>

  export type WishlistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wishlist_id?: boolean
    user_id?: boolean
    product_id?: boolean
    created_at?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlists"]>

  export type WishlistsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wishlist_id?: boolean
    user_id?: boolean
    product_id?: boolean
    created_at?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlists"]>

  export type WishlistsSelectScalar = {
    wishlist_id?: boolean
    user_id?: boolean
    product_id?: boolean
    created_at?: boolean
  }

  export type WishlistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wishlist_id" | "user_id" | "product_id" | "created_at", ExtArgs["result"]["wishlists"]>
  export type WishlistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type WishlistsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type WishlistsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $WishlistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wishlists"
    objects: {
      User: Prisma.$UsersPayload<ExtArgs>
      Product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      wishlist_id: number
      user_id: number
      product_id: number
      created_at: Date
    }, ExtArgs["result"]["wishlists"]>
    composites: {}
  }

  type WishlistsGetPayload<S extends boolean | null | undefined | WishlistsDefaultArgs> = $Result.GetResult<Prisma.$WishlistsPayload, S>

  type WishlistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishlistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishlistsCountAggregateInputType | true
    }

  export interface WishlistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wishlists'], meta: { name: 'Wishlists' } }
    /**
     * Find zero or one Wishlists that matches the filter.
     * @param {WishlistsFindUniqueArgs} args - Arguments to find a Wishlists
     * @example
     * // Get one Wishlists
     * const wishlists = await prisma.wishlists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishlistsFindUniqueArgs>(args: SelectSubset<T, WishlistsFindUniqueArgs<ExtArgs>>): Prisma__WishlistsClient<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wishlists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishlistsFindUniqueOrThrowArgs} args - Arguments to find a Wishlists
     * @example
     * // Get one Wishlists
     * const wishlists = await prisma.wishlists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishlistsFindUniqueOrThrowArgs>(args: SelectSubset<T, WishlistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishlistsClient<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistsFindFirstArgs} args - Arguments to find a Wishlists
     * @example
     * // Get one Wishlists
     * const wishlists = await prisma.wishlists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishlistsFindFirstArgs>(args?: SelectSubset<T, WishlistsFindFirstArgs<ExtArgs>>): Prisma__WishlistsClient<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistsFindFirstOrThrowArgs} args - Arguments to find a Wishlists
     * @example
     * // Get one Wishlists
     * const wishlists = await prisma.wishlists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishlistsFindFirstOrThrowArgs>(args?: SelectSubset<T, WishlistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishlistsClient<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlists
     * const wishlists = await prisma.wishlists.findMany()
     * 
     * // Get first 10 Wishlists
     * const wishlists = await prisma.wishlists.findMany({ take: 10 })
     * 
     * // Only select the `wishlist_id`
     * const wishlistsWithWishlist_idOnly = await prisma.wishlists.findMany({ select: { wishlist_id: true } })
     * 
     */
    findMany<T extends WishlistsFindManyArgs>(args?: SelectSubset<T, WishlistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wishlists.
     * @param {WishlistsCreateArgs} args - Arguments to create a Wishlists.
     * @example
     * // Create one Wishlists
     * const Wishlists = await prisma.wishlists.create({
     *   data: {
     *     // ... data to create a Wishlists
     *   }
     * })
     * 
     */
    create<T extends WishlistsCreateArgs>(args: SelectSubset<T, WishlistsCreateArgs<ExtArgs>>): Prisma__WishlistsClient<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wishlists.
     * @param {WishlistsCreateManyArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlists = await prisma.wishlists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishlistsCreateManyArgs>(args?: SelectSubset<T, WishlistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wishlists and returns the data saved in the database.
     * @param {WishlistsCreateManyAndReturnArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlists = await prisma.wishlists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wishlists and only return the `wishlist_id`
     * const wishlistsWithWishlist_idOnly = await prisma.wishlists.createManyAndReturn({
     *   select: { wishlist_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WishlistsCreateManyAndReturnArgs>(args?: SelectSubset<T, WishlistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wishlists.
     * @param {WishlistsDeleteArgs} args - Arguments to delete one Wishlists.
     * @example
     * // Delete one Wishlists
     * const Wishlists = await prisma.wishlists.delete({
     *   where: {
     *     // ... filter to delete one Wishlists
     *   }
     * })
     * 
     */
    delete<T extends WishlistsDeleteArgs>(args: SelectSubset<T, WishlistsDeleteArgs<ExtArgs>>): Prisma__WishlistsClient<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wishlists.
     * @param {WishlistsUpdateArgs} args - Arguments to update one Wishlists.
     * @example
     * // Update one Wishlists
     * const wishlists = await prisma.wishlists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishlistsUpdateArgs>(args: SelectSubset<T, WishlistsUpdateArgs<ExtArgs>>): Prisma__WishlistsClient<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wishlists.
     * @param {WishlistsDeleteManyArgs} args - Arguments to filter Wishlists to delete.
     * @example
     * // Delete a few Wishlists
     * const { count } = await prisma.wishlists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishlistsDeleteManyArgs>(args?: SelectSubset<T, WishlistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlists
     * const wishlists = await prisma.wishlists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishlistsUpdateManyArgs>(args: SelectSubset<T, WishlistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists and returns the data updated in the database.
     * @param {WishlistsUpdateManyAndReturnArgs} args - Arguments to update many Wishlists.
     * @example
     * // Update many Wishlists
     * const wishlists = await prisma.wishlists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wishlists and only return the `wishlist_id`
     * const wishlistsWithWishlist_idOnly = await prisma.wishlists.updateManyAndReturn({
     *   select: { wishlist_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WishlistsUpdateManyAndReturnArgs>(args: SelectSubset<T, WishlistsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wishlists.
     * @param {WishlistsUpsertArgs} args - Arguments to update or create a Wishlists.
     * @example
     * // Update or create a Wishlists
     * const wishlists = await prisma.wishlists.upsert({
     *   create: {
     *     // ... data to create a Wishlists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlists we want to update
     *   }
     * })
     */
    upsert<T extends WishlistsUpsertArgs>(args: SelectSubset<T, WishlistsUpsertArgs<ExtArgs>>): Prisma__WishlistsClient<$Result.GetResult<Prisma.$WishlistsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistsCountArgs} args - Arguments to filter Wishlists to count.
     * @example
     * // Count the number of Wishlists
     * const count = await prisma.wishlists.count({
     *   where: {
     *     // ... the filter for the Wishlists we want to count
     *   }
     * })
    **/
    count<T extends WishlistsCountArgs>(
      args?: Subset<T, WishlistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WishlistsAggregateArgs>(args: Subset<T, WishlistsAggregateArgs>): Prisma.PrismaPromise<GetWishlistsAggregateType<T>>

    /**
     * Group by Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WishlistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishlistsGroupByArgs['orderBy'] }
        : { orderBy?: WishlistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WishlistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wishlists model
   */
  readonly fields: WishlistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wishlists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishlistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wishlists model
   */
  interface WishlistsFieldRefs {
    readonly wishlist_id: FieldRef<"Wishlists", 'Int'>
    readonly user_id: FieldRef<"Wishlists", 'Int'>
    readonly product_id: FieldRef<"Wishlists", 'Int'>
    readonly created_at: FieldRef<"Wishlists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wishlists findUnique
   */
  export type WishlistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    /**
     * Filter, which Wishlists to fetch.
     */
    where: WishlistsWhereUniqueInput
  }

  /**
   * Wishlists findUniqueOrThrow
   */
  export type WishlistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    /**
     * Filter, which Wishlists to fetch.
     */
    where: WishlistsWhereUniqueInput
  }

  /**
   * Wishlists findFirst
   */
  export type WishlistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    /**
     * Filter, which Wishlists to fetch.
     */
    where?: WishlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistsOrderByWithRelationInput | WishlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistsScalarFieldEnum | WishlistsScalarFieldEnum[]
  }

  /**
   * Wishlists findFirstOrThrow
   */
  export type WishlistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    /**
     * Filter, which Wishlists to fetch.
     */
    where?: WishlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistsOrderByWithRelationInput | WishlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishlists.
     */
    cursor?: WishlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishlists.
     */
    distinct?: WishlistsScalarFieldEnum | WishlistsScalarFieldEnum[]
  }

  /**
   * Wishlists findMany
   */
  export type WishlistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    /**
     * Filter, which Wishlists to fetch.
     */
    where?: WishlistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishlists to fetch.
     */
    orderBy?: WishlistsOrderByWithRelationInput | WishlistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wishlists.
     */
    cursor?: WishlistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishlists.
     */
    skip?: number
    distinct?: WishlistsScalarFieldEnum | WishlistsScalarFieldEnum[]
  }

  /**
   * Wishlists create
   */
  export type WishlistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    /**
     * The data needed to create a Wishlists.
     */
    data: XOR<WishlistsCreateInput, WishlistsUncheckedCreateInput>
  }

  /**
   * Wishlists createMany
   */
  export type WishlistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wishlists.
     */
    data: WishlistsCreateManyInput | WishlistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wishlists createManyAndReturn
   */
  export type WishlistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * The data used to create many Wishlists.
     */
    data: WishlistsCreateManyInput | WishlistsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wishlists update
   */
  export type WishlistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    /**
     * The data needed to update a Wishlists.
     */
    data: XOR<WishlistsUpdateInput, WishlistsUncheckedUpdateInput>
    /**
     * Choose, which Wishlists to update.
     */
    where: WishlistsWhereUniqueInput
  }

  /**
   * Wishlists updateMany
   */
  export type WishlistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wishlists.
     */
    data: XOR<WishlistsUpdateManyMutationInput, WishlistsUncheckedUpdateManyInput>
    /**
     * Filter which Wishlists to update
     */
    where?: WishlistsWhereInput
    /**
     * Limit how many Wishlists to update.
     */
    limit?: number
  }

  /**
   * Wishlists updateManyAndReturn
   */
  export type WishlistsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * The data used to update Wishlists.
     */
    data: XOR<WishlistsUpdateManyMutationInput, WishlistsUncheckedUpdateManyInput>
    /**
     * Filter which Wishlists to update
     */
    where?: WishlistsWhereInput
    /**
     * Limit how many Wishlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wishlists upsert
   */
  export type WishlistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    /**
     * The filter to search for the Wishlists to update in case it exists.
     */
    where: WishlistsWhereUniqueInput
    /**
     * In case the Wishlists found by the `where` argument doesn't exist, create a new Wishlists with this data.
     */
    create: XOR<WishlistsCreateInput, WishlistsUncheckedCreateInput>
    /**
     * In case the Wishlists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishlistsUpdateInput, WishlistsUncheckedUpdateInput>
  }

  /**
   * Wishlists delete
   */
  export type WishlistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
    /**
     * Filter which Wishlists to delete.
     */
    where: WishlistsWhereUniqueInput
  }

  /**
   * Wishlists deleteMany
   */
  export type WishlistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishlists to delete
     */
    where?: WishlistsWhereInput
    /**
     * Limit how many Wishlists to delete.
     */
    limit?: number
  }

  /**
   * Wishlists without action
   */
  export type WishlistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlists
     */
    select?: WishlistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wishlists
     */
    omit?: WishlistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishlistsInclude<ExtArgs> | null
  }


  /**
   * Model Coupons
   */

  export type AggregateCoupons = {
    _count: CouponsCountAggregateOutputType | null
    _avg: CouponsAvgAggregateOutputType | null
    _sum: CouponsSumAggregateOutputType | null
    _min: CouponsMinAggregateOutputType | null
    _max: CouponsMaxAggregateOutputType | null
  }

  export type CouponsAvgAggregateOutputType = {
    coupon_id: number | null
    discount: Decimal | null
    usage_limit: number | null
  }

  export type CouponsSumAggregateOutputType = {
    coupon_id: number | null
    discount: Decimal | null
    usage_limit: number | null
  }

  export type CouponsMinAggregateOutputType = {
    coupon_id: number | null
    code: string | null
    discount: Decimal | null
    type: string | null
    valid_from: Date | null
    valid_to: Date | null
    usage_limit: number | null
  }

  export type CouponsMaxAggregateOutputType = {
    coupon_id: number | null
    code: string | null
    discount: Decimal | null
    type: string | null
    valid_from: Date | null
    valid_to: Date | null
    usage_limit: number | null
  }

  export type CouponsCountAggregateOutputType = {
    coupon_id: number
    code: number
    discount: number
    type: number
    valid_from: number
    valid_to: number
    usage_limit: number
    _all: number
  }


  export type CouponsAvgAggregateInputType = {
    coupon_id?: true
    discount?: true
    usage_limit?: true
  }

  export type CouponsSumAggregateInputType = {
    coupon_id?: true
    discount?: true
    usage_limit?: true
  }

  export type CouponsMinAggregateInputType = {
    coupon_id?: true
    code?: true
    discount?: true
    type?: true
    valid_from?: true
    valid_to?: true
    usage_limit?: true
  }

  export type CouponsMaxAggregateInputType = {
    coupon_id?: true
    code?: true
    discount?: true
    type?: true
    valid_from?: true
    valid_to?: true
    usage_limit?: true
  }

  export type CouponsCountAggregateInputType = {
    coupon_id?: true
    code?: true
    discount?: true
    type?: true
    valid_from?: true
    valid_to?: true
    usage_limit?: true
    _all?: true
  }

  export type CouponsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to aggregate.
     */
    where?: CouponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponsOrderByWithRelationInput | CouponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponsMaxAggregateInputType
  }

  export type GetCouponsAggregateType<T extends CouponsAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupons[P]>
      : GetScalarType<T[P], AggregateCoupons[P]>
  }




  export type CouponsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponsWhereInput
    orderBy?: CouponsOrderByWithAggregationInput | CouponsOrderByWithAggregationInput[]
    by: CouponsScalarFieldEnum[] | CouponsScalarFieldEnum
    having?: CouponsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponsCountAggregateInputType | true
    _avg?: CouponsAvgAggregateInputType
    _sum?: CouponsSumAggregateInputType
    _min?: CouponsMinAggregateInputType
    _max?: CouponsMaxAggregateInputType
  }

  export type CouponsGroupByOutputType = {
    coupon_id: number
    code: string
    discount: Decimal
    type: string
    valid_from: Date
    valid_to: Date
    usage_limit: number
    _count: CouponsCountAggregateOutputType | null
    _avg: CouponsAvgAggregateOutputType | null
    _sum: CouponsSumAggregateOutputType | null
    _min: CouponsMinAggregateOutputType | null
    _max: CouponsMaxAggregateOutputType | null
  }

  type GetCouponsGroupByPayload<T extends CouponsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponsGroupByOutputType[P]>
            : GetScalarType<T[P], CouponsGroupByOutputType[P]>
        }
      >
    >


  export type CouponsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    coupon_id?: boolean
    code?: boolean
    discount?: boolean
    type?: boolean
    valid_from?: boolean
    valid_to?: boolean
    usage_limit?: boolean
    User_Coupons?: boolean | Coupons$User_CouponsArgs<ExtArgs>
    _count?: boolean | CouponsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coupons"]>

  export type CouponsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    coupon_id?: boolean
    code?: boolean
    discount?: boolean
    type?: boolean
    valid_from?: boolean
    valid_to?: boolean
    usage_limit?: boolean
  }, ExtArgs["result"]["coupons"]>

  export type CouponsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    coupon_id?: boolean
    code?: boolean
    discount?: boolean
    type?: boolean
    valid_from?: boolean
    valid_to?: boolean
    usage_limit?: boolean
  }, ExtArgs["result"]["coupons"]>

  export type CouponsSelectScalar = {
    coupon_id?: boolean
    code?: boolean
    discount?: boolean
    type?: boolean
    valid_from?: boolean
    valid_to?: boolean
    usage_limit?: boolean
  }

  export type CouponsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"coupon_id" | "code" | "discount" | "type" | "valid_from" | "valid_to" | "usage_limit", ExtArgs["result"]["coupons"]>
  export type CouponsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User_Coupons?: boolean | Coupons$User_CouponsArgs<ExtArgs>
    _count?: boolean | CouponsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CouponsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CouponsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CouponsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupons"
    objects: {
      User_Coupons: Prisma.$User_CouponsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      coupon_id: number
      code: string
      discount: Prisma.Decimal
      type: string
      valid_from: Date
      valid_to: Date
      usage_limit: number
    }, ExtArgs["result"]["coupons"]>
    composites: {}
  }

  type CouponsGetPayload<S extends boolean | null | undefined | CouponsDefaultArgs> = $Result.GetResult<Prisma.$CouponsPayload, S>

  type CouponsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponsCountAggregateInputType | true
    }

  export interface CouponsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupons'], meta: { name: 'Coupons' } }
    /**
     * Find zero or one Coupons that matches the filter.
     * @param {CouponsFindUniqueArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponsFindUniqueArgs>(args: SelectSubset<T, CouponsFindUniqueArgs<ExtArgs>>): Prisma__CouponsClient<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponsFindUniqueOrThrowArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponsFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponsClient<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsFindFirstArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponsFindFirstArgs>(args?: SelectSubset<T, CouponsFindFirstArgs<ExtArgs>>): Prisma__CouponsClient<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsFindFirstOrThrowArgs} args - Arguments to find a Coupons
     * @example
     * // Get one Coupons
     * const coupons = await prisma.coupons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponsFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponsClient<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupons.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupons.findMany({ take: 10 })
     * 
     * // Only select the `coupon_id`
     * const couponsWithCoupon_idOnly = await prisma.coupons.findMany({ select: { coupon_id: true } })
     * 
     */
    findMany<T extends CouponsFindManyArgs>(args?: SelectSubset<T, CouponsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupons.
     * @param {CouponsCreateArgs} args - Arguments to create a Coupons.
     * @example
     * // Create one Coupons
     * const Coupons = await prisma.coupons.create({
     *   data: {
     *     // ... data to create a Coupons
     *   }
     * })
     * 
     */
    create<T extends CouponsCreateArgs>(args: SelectSubset<T, CouponsCreateArgs<ExtArgs>>): Prisma__CouponsClient<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponsCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupons = await prisma.coupons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponsCreateManyArgs>(args?: SelectSubset<T, CouponsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {CouponsCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupons = await prisma.coupons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `coupon_id`
     * const couponsWithCoupon_idOnly = await prisma.coupons.createManyAndReturn({
     *   select: { coupon_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponsCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coupons.
     * @param {CouponsDeleteArgs} args - Arguments to delete one Coupons.
     * @example
     * // Delete one Coupons
     * const Coupons = await prisma.coupons.delete({
     *   where: {
     *     // ... filter to delete one Coupons
     *   }
     * })
     * 
     */
    delete<T extends CouponsDeleteArgs>(args: SelectSubset<T, CouponsDeleteArgs<ExtArgs>>): Prisma__CouponsClient<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupons.
     * @param {CouponsUpdateArgs} args - Arguments to update one Coupons.
     * @example
     * // Update one Coupons
     * const coupons = await prisma.coupons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponsUpdateArgs>(args: SelectSubset<T, CouponsUpdateArgs<ExtArgs>>): Prisma__CouponsClient<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponsDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponsDeleteManyArgs>(args?: SelectSubset<T, CouponsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupons = await prisma.coupons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponsUpdateManyArgs>(args: SelectSubset<T, CouponsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons and returns the data updated in the database.
     * @param {CouponsUpdateManyAndReturnArgs} args - Arguments to update many Coupons.
     * @example
     * // Update many Coupons
     * const coupons = await prisma.coupons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coupons and only return the `coupon_id`
     * const couponsWithCoupon_idOnly = await prisma.coupons.updateManyAndReturn({
     *   select: { coupon_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CouponsUpdateManyAndReturnArgs>(args: SelectSubset<T, CouponsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coupons.
     * @param {CouponsUpsertArgs} args - Arguments to update or create a Coupons.
     * @example
     * // Update or create a Coupons
     * const coupons = await prisma.coupons.upsert({
     *   create: {
     *     // ... data to create a Coupons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupons we want to update
     *   }
     * })
     */
    upsert<T extends CouponsUpsertArgs>(args: SelectSubset<T, CouponsUpsertArgs<ExtArgs>>): Prisma__CouponsClient<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupons.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponsCountArgs>(
      args?: Subset<T, CouponsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponsAggregateArgs>(args: Subset<T, CouponsAggregateArgs>): Prisma.PrismaPromise<GetCouponsAggregateType<T>>

    /**
     * Group by Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponsGroupByArgs['orderBy'] }
        : { orderBy?: CouponsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupons model
   */
  readonly fields: CouponsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User_Coupons<T extends Coupons$User_CouponsArgs<ExtArgs> = {}>(args?: Subset<T, Coupons$User_CouponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coupons model
   */
  interface CouponsFieldRefs {
    readonly coupon_id: FieldRef<"Coupons", 'Int'>
    readonly code: FieldRef<"Coupons", 'String'>
    readonly discount: FieldRef<"Coupons", 'Decimal'>
    readonly type: FieldRef<"Coupons", 'String'>
    readonly valid_from: FieldRef<"Coupons", 'DateTime'>
    readonly valid_to: FieldRef<"Coupons", 'DateTime'>
    readonly usage_limit: FieldRef<"Coupons", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Coupons findUnique
   */
  export type CouponsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where: CouponsWhereUniqueInput
  }

  /**
   * Coupons findUniqueOrThrow
   */
  export type CouponsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where: CouponsWhereUniqueInput
  }

  /**
   * Coupons findFirst
   */
  export type CouponsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponsOrderByWithRelationInput | CouponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * Coupons findFirstOrThrow
   */
  export type CouponsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponsOrderByWithRelationInput | CouponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * Coupons findMany
   */
  export type CouponsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponsOrderByWithRelationInput | CouponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponsScalarFieldEnum | CouponsScalarFieldEnum[]
  }

  /**
   * Coupons create
   */
  export type CouponsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupons.
     */
    data: XOR<CouponsCreateInput, CouponsUncheckedCreateInput>
  }

  /**
   * Coupons createMany
   */
  export type CouponsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponsCreateManyInput | CouponsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupons createManyAndReturn
   */
  export type CouponsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * The data used to create many Coupons.
     */
    data: CouponsCreateManyInput | CouponsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupons update
   */
  export type CouponsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupons.
     */
    data: XOR<CouponsUpdateInput, CouponsUncheckedUpdateInput>
    /**
     * Choose, which Coupons to update.
     */
    where: CouponsWhereUniqueInput
  }

  /**
   * Coupons updateMany
   */
  export type CouponsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponsUpdateManyMutationInput, CouponsUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponsWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupons updateManyAndReturn
   */
  export type CouponsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponsUpdateManyMutationInput, CouponsUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponsWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupons upsert
   */
  export type CouponsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupons to update in case it exists.
     */
    where: CouponsWhereUniqueInput
    /**
     * In case the Coupons found by the `where` argument doesn't exist, create a new Coupons with this data.
     */
    create: XOR<CouponsCreateInput, CouponsUncheckedCreateInput>
    /**
     * In case the Coupons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponsUpdateInput, CouponsUncheckedUpdateInput>
  }

  /**
   * Coupons delete
   */
  export type CouponsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
    /**
     * Filter which Coupons to delete.
     */
    where: CouponsWhereUniqueInput
  }

  /**
   * Coupons deleteMany
   */
  export type CouponsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponsWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupons.User_Coupons
   */
  export type Coupons$User_CouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    where?: User_CouponsWhereInput
    orderBy?: User_CouponsOrderByWithRelationInput | User_CouponsOrderByWithRelationInput[]
    cursor?: User_CouponsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_CouponsScalarFieldEnum | User_CouponsScalarFieldEnum[]
  }

  /**
   * Coupons without action
   */
  export type CouponsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupons
     */
    select?: CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupons
     */
    omit?: CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponsInclude<ExtArgs> | null
  }


  /**
   * Model User_Coupons
   */

  export type AggregateUser_Coupons = {
    _count: User_CouponsCountAggregateOutputType | null
    _avg: User_CouponsAvgAggregateOutputType | null
    _sum: User_CouponsSumAggregateOutputType | null
    _min: User_CouponsMinAggregateOutputType | null
    _max: User_CouponsMaxAggregateOutputType | null
  }

  export type User_CouponsAvgAggregateOutputType = {
    user_coupon_id: number | null
    user_id: number | null
    coupon_id: number | null
  }

  export type User_CouponsSumAggregateOutputType = {
    user_coupon_id: number | null
    user_id: number | null
    coupon_id: number | null
  }

  export type User_CouponsMinAggregateOutputType = {
    user_coupon_id: number | null
    user_id: number | null
    coupon_id: number | null
    used_at: Date | null
  }

  export type User_CouponsMaxAggregateOutputType = {
    user_coupon_id: number | null
    user_id: number | null
    coupon_id: number | null
    used_at: Date | null
  }

  export type User_CouponsCountAggregateOutputType = {
    user_coupon_id: number
    user_id: number
    coupon_id: number
    used_at: number
    _all: number
  }


  export type User_CouponsAvgAggregateInputType = {
    user_coupon_id?: true
    user_id?: true
    coupon_id?: true
  }

  export type User_CouponsSumAggregateInputType = {
    user_coupon_id?: true
    user_id?: true
    coupon_id?: true
  }

  export type User_CouponsMinAggregateInputType = {
    user_coupon_id?: true
    user_id?: true
    coupon_id?: true
    used_at?: true
  }

  export type User_CouponsMaxAggregateInputType = {
    user_coupon_id?: true
    user_id?: true
    coupon_id?: true
    used_at?: true
  }

  export type User_CouponsCountAggregateInputType = {
    user_coupon_id?: true
    user_id?: true
    coupon_id?: true
    used_at?: true
    _all?: true
  }

  export type User_CouponsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Coupons to aggregate.
     */
    where?: User_CouponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Coupons to fetch.
     */
    orderBy?: User_CouponsOrderByWithRelationInput | User_CouponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_CouponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Coupons
    **/
    _count?: true | User_CouponsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_CouponsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_CouponsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_CouponsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_CouponsMaxAggregateInputType
  }

  export type GetUser_CouponsAggregateType<T extends User_CouponsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Coupons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Coupons[P]>
      : GetScalarType<T[P], AggregateUser_Coupons[P]>
  }




  export type User_CouponsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User_CouponsWhereInput
    orderBy?: User_CouponsOrderByWithAggregationInput | User_CouponsOrderByWithAggregationInput[]
    by: User_CouponsScalarFieldEnum[] | User_CouponsScalarFieldEnum
    having?: User_CouponsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_CouponsCountAggregateInputType | true
    _avg?: User_CouponsAvgAggregateInputType
    _sum?: User_CouponsSumAggregateInputType
    _min?: User_CouponsMinAggregateInputType
    _max?: User_CouponsMaxAggregateInputType
  }

  export type User_CouponsGroupByOutputType = {
    user_coupon_id: number
    user_id: number
    coupon_id: number
    used_at: Date | null
    _count: User_CouponsCountAggregateOutputType | null
    _avg: User_CouponsAvgAggregateOutputType | null
    _sum: User_CouponsSumAggregateOutputType | null
    _min: User_CouponsMinAggregateOutputType | null
    _max: User_CouponsMaxAggregateOutputType | null
  }

  type GetUser_CouponsGroupByPayload<T extends User_CouponsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_CouponsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_CouponsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_CouponsGroupByOutputType[P]>
            : GetScalarType<T[P], User_CouponsGroupByOutputType[P]>
        }
      >
    >


  export type User_CouponsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_coupon_id?: boolean
    user_id?: boolean
    coupon_id?: boolean
    used_at?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Coupon?: boolean | CouponsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Coupons"]>

  export type User_CouponsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_coupon_id?: boolean
    user_id?: boolean
    coupon_id?: boolean
    used_at?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Coupon?: boolean | CouponsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Coupons"]>

  export type User_CouponsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_coupon_id?: boolean
    user_id?: boolean
    coupon_id?: boolean
    used_at?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Coupon?: boolean | CouponsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Coupons"]>

  export type User_CouponsSelectScalar = {
    user_coupon_id?: boolean
    user_id?: boolean
    coupon_id?: boolean
    used_at?: boolean
  }

  export type User_CouponsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_coupon_id" | "user_id" | "coupon_id" | "used_at", ExtArgs["result"]["user_Coupons"]>
  export type User_CouponsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Coupon?: boolean | CouponsDefaultArgs<ExtArgs>
  }
  export type User_CouponsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Coupon?: boolean | CouponsDefaultArgs<ExtArgs>
  }
  export type User_CouponsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    Coupon?: boolean | CouponsDefaultArgs<ExtArgs>
  }

  export type $User_CouponsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User_Coupons"
    objects: {
      User: Prisma.$UsersPayload<ExtArgs>
      Coupon: Prisma.$CouponsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_coupon_id: number
      user_id: number
      coupon_id: number
      used_at: Date | null
    }, ExtArgs["result"]["user_Coupons"]>
    composites: {}
  }

  type User_CouponsGetPayload<S extends boolean | null | undefined | User_CouponsDefaultArgs> = $Result.GetResult<Prisma.$User_CouponsPayload, S>

  type User_CouponsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User_CouponsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_CouponsCountAggregateInputType | true
    }

  export interface User_CouponsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Coupons'], meta: { name: 'User_Coupons' } }
    /**
     * Find zero or one User_Coupons that matches the filter.
     * @param {User_CouponsFindUniqueArgs} args - Arguments to find a User_Coupons
     * @example
     * // Get one User_Coupons
     * const user_Coupons = await prisma.user_Coupons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User_CouponsFindUniqueArgs>(args: SelectSubset<T, User_CouponsFindUniqueArgs<ExtArgs>>): Prisma__User_CouponsClient<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_Coupons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User_CouponsFindUniqueOrThrowArgs} args - Arguments to find a User_Coupons
     * @example
     * // Get one User_Coupons
     * const user_Coupons = await prisma.user_Coupons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User_CouponsFindUniqueOrThrowArgs>(args: SelectSubset<T, User_CouponsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__User_CouponsClient<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponsFindFirstArgs} args - Arguments to find a User_Coupons
     * @example
     * // Get one User_Coupons
     * const user_Coupons = await prisma.user_Coupons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User_CouponsFindFirstArgs>(args?: SelectSubset<T, User_CouponsFindFirstArgs<ExtArgs>>): Prisma__User_CouponsClient<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_Coupons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponsFindFirstOrThrowArgs} args - Arguments to find a User_Coupons
     * @example
     * // Get one User_Coupons
     * const user_Coupons = await prisma.user_Coupons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User_CouponsFindFirstOrThrowArgs>(args?: SelectSubset<T, User_CouponsFindFirstOrThrowArgs<ExtArgs>>): Prisma__User_CouponsClient<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Coupons
     * const user_Coupons = await prisma.user_Coupons.findMany()
     * 
     * // Get first 10 User_Coupons
     * const user_Coupons = await prisma.user_Coupons.findMany({ take: 10 })
     * 
     * // Only select the `user_coupon_id`
     * const user_CouponsWithUser_coupon_idOnly = await prisma.user_Coupons.findMany({ select: { user_coupon_id: true } })
     * 
     */
    findMany<T extends User_CouponsFindManyArgs>(args?: SelectSubset<T, User_CouponsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_Coupons.
     * @param {User_CouponsCreateArgs} args - Arguments to create a User_Coupons.
     * @example
     * // Create one User_Coupons
     * const User_Coupons = await prisma.user_Coupons.create({
     *   data: {
     *     // ... data to create a User_Coupons
     *   }
     * })
     * 
     */
    create<T extends User_CouponsCreateArgs>(args: SelectSubset<T, User_CouponsCreateArgs<ExtArgs>>): Prisma__User_CouponsClient<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_Coupons.
     * @param {User_CouponsCreateManyArgs} args - Arguments to create many User_Coupons.
     * @example
     * // Create many User_Coupons
     * const user_Coupons = await prisma.user_Coupons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User_CouponsCreateManyArgs>(args?: SelectSubset<T, User_CouponsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_Coupons and returns the data saved in the database.
     * @param {User_CouponsCreateManyAndReturnArgs} args - Arguments to create many User_Coupons.
     * @example
     * // Create many User_Coupons
     * const user_Coupons = await prisma.user_Coupons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_Coupons and only return the `user_coupon_id`
     * const user_CouponsWithUser_coupon_idOnly = await prisma.user_Coupons.createManyAndReturn({
     *   select: { user_coupon_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User_CouponsCreateManyAndReturnArgs>(args?: SelectSubset<T, User_CouponsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_Coupons.
     * @param {User_CouponsDeleteArgs} args - Arguments to delete one User_Coupons.
     * @example
     * // Delete one User_Coupons
     * const User_Coupons = await prisma.user_Coupons.delete({
     *   where: {
     *     // ... filter to delete one User_Coupons
     *   }
     * })
     * 
     */
    delete<T extends User_CouponsDeleteArgs>(args: SelectSubset<T, User_CouponsDeleteArgs<ExtArgs>>): Prisma__User_CouponsClient<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_Coupons.
     * @param {User_CouponsUpdateArgs} args - Arguments to update one User_Coupons.
     * @example
     * // Update one User_Coupons
     * const user_Coupons = await prisma.user_Coupons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User_CouponsUpdateArgs>(args: SelectSubset<T, User_CouponsUpdateArgs<ExtArgs>>): Prisma__User_CouponsClient<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_Coupons.
     * @param {User_CouponsDeleteManyArgs} args - Arguments to filter User_Coupons to delete.
     * @example
     * // Delete a few User_Coupons
     * const { count } = await prisma.user_Coupons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User_CouponsDeleteManyArgs>(args?: SelectSubset<T, User_CouponsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Coupons
     * const user_Coupons = await prisma.user_Coupons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User_CouponsUpdateManyArgs>(args: SelectSubset<T, User_CouponsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Coupons and returns the data updated in the database.
     * @param {User_CouponsUpdateManyAndReturnArgs} args - Arguments to update many User_Coupons.
     * @example
     * // Update many User_Coupons
     * const user_Coupons = await prisma.user_Coupons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_Coupons and only return the `user_coupon_id`
     * const user_CouponsWithUser_coupon_idOnly = await prisma.user_Coupons.updateManyAndReturn({
     *   select: { user_coupon_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends User_CouponsUpdateManyAndReturnArgs>(args: SelectSubset<T, User_CouponsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_Coupons.
     * @param {User_CouponsUpsertArgs} args - Arguments to update or create a User_Coupons.
     * @example
     * // Update or create a User_Coupons
     * const user_Coupons = await prisma.user_Coupons.upsert({
     *   create: {
     *     // ... data to create a User_Coupons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Coupons we want to update
     *   }
     * })
     */
    upsert<T extends User_CouponsUpsertArgs>(args: SelectSubset<T, User_CouponsUpsertArgs<ExtArgs>>): Prisma__User_CouponsClient<$Result.GetResult<Prisma.$User_CouponsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponsCountArgs} args - Arguments to filter User_Coupons to count.
     * @example
     * // Count the number of User_Coupons
     * const count = await prisma.user_Coupons.count({
     *   where: {
     *     // ... the filter for the User_Coupons we want to count
     *   }
     * })
    **/
    count<T extends User_CouponsCountArgs>(
      args?: Subset<T, User_CouponsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_CouponsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_CouponsAggregateArgs>(args: Subset<T, User_CouponsAggregateArgs>): Prisma.PrismaPromise<GetUser_CouponsAggregateType<T>>

    /**
     * Group by User_Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_CouponsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_CouponsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_CouponsGroupByArgs['orderBy'] }
        : { orderBy?: User_CouponsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_CouponsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_CouponsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Coupons model
   */
  readonly fields: User_CouponsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Coupons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_CouponsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Coupon<T extends CouponsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CouponsDefaultArgs<ExtArgs>>): Prisma__CouponsClient<$Result.GetResult<Prisma.$CouponsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User_Coupons model
   */
  interface User_CouponsFieldRefs {
    readonly user_coupon_id: FieldRef<"User_Coupons", 'Int'>
    readonly user_id: FieldRef<"User_Coupons", 'Int'>
    readonly coupon_id: FieldRef<"User_Coupons", 'Int'>
    readonly used_at: FieldRef<"User_Coupons", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User_Coupons findUnique
   */
  export type User_CouponsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupons to fetch.
     */
    where: User_CouponsWhereUniqueInput
  }

  /**
   * User_Coupons findUniqueOrThrow
   */
  export type User_CouponsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupons to fetch.
     */
    where: User_CouponsWhereUniqueInput
  }

  /**
   * User_Coupons findFirst
   */
  export type User_CouponsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupons to fetch.
     */
    where?: User_CouponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Coupons to fetch.
     */
    orderBy?: User_CouponsOrderByWithRelationInput | User_CouponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Coupons.
     */
    cursor?: User_CouponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Coupons.
     */
    distinct?: User_CouponsScalarFieldEnum | User_CouponsScalarFieldEnum[]
  }

  /**
   * User_Coupons findFirstOrThrow
   */
  export type User_CouponsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupons to fetch.
     */
    where?: User_CouponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Coupons to fetch.
     */
    orderBy?: User_CouponsOrderByWithRelationInput | User_CouponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Coupons.
     */
    cursor?: User_CouponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Coupons.
     */
    distinct?: User_CouponsScalarFieldEnum | User_CouponsScalarFieldEnum[]
  }

  /**
   * User_Coupons findMany
   */
  export type User_CouponsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    /**
     * Filter, which User_Coupons to fetch.
     */
    where?: User_CouponsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Coupons to fetch.
     */
    orderBy?: User_CouponsOrderByWithRelationInput | User_CouponsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Coupons.
     */
    cursor?: User_CouponsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Coupons.
     */
    skip?: number
    distinct?: User_CouponsScalarFieldEnum | User_CouponsScalarFieldEnum[]
  }

  /**
   * User_Coupons create
   */
  export type User_CouponsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    /**
     * The data needed to create a User_Coupons.
     */
    data: XOR<User_CouponsCreateInput, User_CouponsUncheckedCreateInput>
  }

  /**
   * User_Coupons createMany
   */
  export type User_CouponsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Coupons.
     */
    data: User_CouponsCreateManyInput | User_CouponsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User_Coupons createManyAndReturn
   */
  export type User_CouponsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * The data used to create many User_Coupons.
     */
    data: User_CouponsCreateManyInput | User_CouponsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_Coupons update
   */
  export type User_CouponsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    /**
     * The data needed to update a User_Coupons.
     */
    data: XOR<User_CouponsUpdateInput, User_CouponsUncheckedUpdateInput>
    /**
     * Choose, which User_Coupons to update.
     */
    where: User_CouponsWhereUniqueInput
  }

  /**
   * User_Coupons updateMany
   */
  export type User_CouponsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Coupons.
     */
    data: XOR<User_CouponsUpdateManyMutationInput, User_CouponsUncheckedUpdateManyInput>
    /**
     * Filter which User_Coupons to update
     */
    where?: User_CouponsWhereInput
    /**
     * Limit how many User_Coupons to update.
     */
    limit?: number
  }

  /**
   * User_Coupons updateManyAndReturn
   */
  export type User_CouponsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * The data used to update User_Coupons.
     */
    data: XOR<User_CouponsUpdateManyMutationInput, User_CouponsUncheckedUpdateManyInput>
    /**
     * Filter which User_Coupons to update
     */
    where?: User_CouponsWhereInput
    /**
     * Limit how many User_Coupons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User_Coupons upsert
   */
  export type User_CouponsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    /**
     * The filter to search for the User_Coupons to update in case it exists.
     */
    where: User_CouponsWhereUniqueInput
    /**
     * In case the User_Coupons found by the `where` argument doesn't exist, create a new User_Coupons with this data.
     */
    create: XOR<User_CouponsCreateInput, User_CouponsUncheckedCreateInput>
    /**
     * In case the User_Coupons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_CouponsUpdateInput, User_CouponsUncheckedUpdateInput>
  }

  /**
   * User_Coupons delete
   */
  export type User_CouponsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
    /**
     * Filter which User_Coupons to delete.
     */
    where: User_CouponsWhereUniqueInput
  }

  /**
   * User_Coupons deleteMany
   */
  export type User_CouponsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Coupons to delete
     */
    where?: User_CouponsWhereInput
    /**
     * Limit how many User_Coupons to delete.
     */
    limit?: number
  }

  /**
   * User_Coupons without action
   */
  export type User_CouponsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Coupons
     */
    select?: User_CouponsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User_Coupons
     */
    omit?: User_CouponsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: User_CouponsInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    image_id: number | null
    product_id: number | null
  }

  export type ImageSumAggregateOutputType = {
    image_id: number | null
    product_id: number | null
  }

  export type ImageMinAggregateOutputType = {
    image_id: number | null
    url: string | null
    alt: string | null
    product_id: number | null
  }

  export type ImageMaxAggregateOutputType = {
    image_id: number | null
    url: string | null
    alt: string | null
    product_id: number | null
  }

  export type ImageCountAggregateOutputType = {
    image_id: number
    url: number
    alt: number
    product_id: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    image_id?: true
    product_id?: true
  }

  export type ImageSumAggregateInputType = {
    image_id?: true
    product_id?: true
  }

  export type ImageMinAggregateInputType = {
    image_id?: true
    url?: true
    alt?: true
    product_id?: true
  }

  export type ImageMaxAggregateInputType = {
    image_id?: true
    url?: true
    alt?: true
    product_id?: true
  }

  export type ImageCountAggregateInputType = {
    image_id?: true
    url?: true
    alt?: true
    product_id?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    image_id: number
    url: string
    alt: string | null
    product_id: number
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    url?: boolean
    alt?: boolean
    product_id?: boolean
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    url?: boolean
    alt?: boolean
    product_id?: boolean
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    url?: boolean
    alt?: boolean
    product_id?: boolean
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    image_id?: boolean
    url?: boolean
    alt?: boolean
    product_id?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"image_id" | "url" | "alt" | "product_id", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      Product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      image_id: number
      url: string
      alt: string | null
      product_id: number
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `image_id`
     * const imageWithImage_idOnly = await prisma.image.findMany({ select: { image_id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `image_id`
     * const imageWithImage_idOnly = await prisma.image.createManyAndReturn({
     *   select: { image_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `image_id`
     * const imageWithImage_idOnly = await prisma.image.updateManyAndReturn({
     *   select: { image_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly image_id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
    readonly alt: FieldRef<"Image", 'String'>
    readonly product_id: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    address: 'address',
    created_at: 'created_at',
    updated_at: 'updated_at',
    role: 'role',
    provider: 'provider',
    provider_id: 'provider_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    name: 'name',
    description: 'description',
    price: 'price',
    stock: 'stock',
    category_id: 'category_id',
    created_at: 'created_at',
    products_option: 'products_option'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Cart_ItemsScalarFieldEnum: {
    cart_item_id: 'cart_item_id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    quantity: 'quantity'
  };

  export type Cart_ItemsScalarFieldEnum = (typeof Cart_ItemsScalarFieldEnum)[keyof typeof Cart_ItemsScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    cart_id: 'cart_id',
    user_id: 'user_id'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    category_id: 'category_id',
    name: 'name',
    parent_id: 'parent_id'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    payment_id: 'payment_id',
    order_id: 'order_id',
    method: 'method',
    amount: 'amount',
    paid_at: 'paid_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    order_id: 'order_id',
    user_id: 'user_id',
    status: 'status',
    total_price: 'total_price',
    created_at: 'created_at',
    payment_state: 'payment_state'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    review_id: 'review_id',
    user_id: 'user_id',
    product_id: 'product_id',
    order_id: 'order_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const WishlistsScalarFieldEnum: {
    wishlist_id: 'wishlist_id',
    user_id: 'user_id',
    product_id: 'product_id',
    created_at: 'created_at'
  };

  export type WishlistsScalarFieldEnum = (typeof WishlistsScalarFieldEnum)[keyof typeof WishlistsScalarFieldEnum]


  export const CouponsScalarFieldEnum: {
    coupon_id: 'coupon_id',
    code: 'code',
    discount: 'discount',
    type: 'type',
    valid_from: 'valid_from',
    valid_to: 'valid_to',
    usage_limit: 'usage_limit'
  };

  export type CouponsScalarFieldEnum = (typeof CouponsScalarFieldEnum)[keyof typeof CouponsScalarFieldEnum]


  export const User_CouponsScalarFieldEnum: {
    user_coupon_id: 'user_coupon_id',
    user_id: 'user_id',
    coupon_id: 'coupon_id',
    used_at: 'used_at'
  };

  export type User_CouponsScalarFieldEnum = (typeof User_CouponsScalarFieldEnum)[keyof typeof User_CouponsScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    image_id: 'image_id',
    url: 'url',
    alt: 'alt',
    product_id: 'product_id'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone?: StringNullableFilter<"Users"> | string | null
    address?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    provider?: StringNullableFilter<"Users"> | string | null
    provider_id?: StringNullableFilter<"Users"> | string | null
    Carts?: CartsListRelationFilter
    Reviews?: ReviewsListRelationFilter
    Orders?: OrdersListRelationFilter
    Wishlists?: WishlistsListRelationFilter
    User_Coupons?: User_CouponsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    provider?: SortOrderInput | SortOrder
    provider_id?: SortOrderInput | SortOrder
    Carts?: CartsOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    Wishlists?: WishlistsOrderByRelationAggregateInput
    User_Coupons?: User_CouponsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone?: StringNullableFilter<"Users"> | string | null
    address?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    provider?: StringNullableFilter<"Users"> | string | null
    provider_id?: StringNullableFilter<"Users"> | string | null
    Carts?: CartsListRelationFilter
    Reviews?: ReviewsListRelationFilter
    Orders?: OrdersListRelationFilter
    Wishlists?: WishlistsListRelationFilter
    User_Coupons?: User_CouponsListRelationFilter
  }, "user_id" | "email">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    provider?: SortOrderInput | SortOrder
    provider_id?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    address?: StringNullableWithAggregatesFilter<"Users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"Users"> | $Enums.UserRole
    provider?: StringNullableWithAggregatesFilter<"Users"> | string | null
    provider_id?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    product_id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Products"> | number
    category_id?: IntFilter<"Products"> | number
    created_at?: DateTimeFilter<"Products"> | Date | string
    products_option?: StringNullableFilter<"Products"> | string | null
    Category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    Cart_Items?: Cart_ItemsListRelationFilter
    Reviews?: ReviewsListRelationFilter
    Wishlists?: WishlistsListRelationFilter
    images?: ImageListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    products_option?: SortOrderInput | SortOrder
    Category?: CategoriesOrderByWithRelationInput
    Cart_Items?: Cart_ItemsOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
    Wishlists?: WishlistsOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Products"> | number
    category_id?: IntFilter<"Products"> | number
    created_at?: DateTimeFilter<"Products"> | Date | string
    products_option?: StringNullableFilter<"Products"> | string | null
    Category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    Cart_Items?: Cart_ItemsListRelationFilter
    Reviews?: ReviewsListRelationFilter
    Wishlists?: WishlistsListRelationFilter
    images?: ImageListRelationFilter
  }, "product_id">

  export type ProductsOrderByWithAggregationInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    stock?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    products_option?: SortOrderInput | SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    price?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Products"> | number
    category_id?: IntWithAggregatesFilter<"Products"> | number
    created_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    products_option?: StringNullableWithAggregatesFilter<"Products"> | string | null
  }

  export type Cart_ItemsWhereInput = {
    AND?: Cart_ItemsWhereInput | Cart_ItemsWhereInput[]
    OR?: Cart_ItemsWhereInput[]
    NOT?: Cart_ItemsWhereInput | Cart_ItemsWhereInput[]
    cart_item_id?: IntFilter<"Cart_Items"> | number
    cart_id?: IntFilter<"Cart_Items"> | number
    product_id?: IntFilter<"Cart_Items"> | number
    quantity?: IntFilter<"Cart_Items"> | number
    Cart?: XOR<CartsScalarRelationFilter, CartsWhereInput>
    Product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type Cart_ItemsOrderByWithRelationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    Cart?: CartsOrderByWithRelationInput
    Product?: ProductsOrderByWithRelationInput
  }

  export type Cart_ItemsWhereUniqueInput = Prisma.AtLeast<{
    cart_item_id?: number
    cart_id_product_id?: Cart_ItemsCart_idProduct_idCompoundUniqueInput
    AND?: Cart_ItemsWhereInput | Cart_ItemsWhereInput[]
    OR?: Cart_ItemsWhereInput[]
    NOT?: Cart_ItemsWhereInput | Cart_ItemsWhereInput[]
    cart_id?: IntFilter<"Cart_Items"> | number
    product_id?: IntFilter<"Cart_Items"> | number
    quantity?: IntFilter<"Cart_Items"> | number
    Cart?: XOR<CartsScalarRelationFilter, CartsWhereInput>
    Product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "cart_item_id" | "cart_id_product_id">

  export type Cart_ItemsOrderByWithAggregationInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    _count?: Cart_ItemsCountOrderByAggregateInput
    _avg?: Cart_ItemsAvgOrderByAggregateInput
    _max?: Cart_ItemsMaxOrderByAggregateInput
    _min?: Cart_ItemsMinOrderByAggregateInput
    _sum?: Cart_ItemsSumOrderByAggregateInput
  }

  export type Cart_ItemsScalarWhereWithAggregatesInput = {
    AND?: Cart_ItemsScalarWhereWithAggregatesInput | Cart_ItemsScalarWhereWithAggregatesInput[]
    OR?: Cart_ItemsScalarWhereWithAggregatesInput[]
    NOT?: Cart_ItemsScalarWhereWithAggregatesInput | Cart_ItemsScalarWhereWithAggregatesInput[]
    cart_item_id?: IntWithAggregatesFilter<"Cart_Items"> | number
    cart_id?: IntWithAggregatesFilter<"Cart_Items"> | number
    product_id?: IntWithAggregatesFilter<"Cart_Items"> | number
    quantity?: IntWithAggregatesFilter<"Cart_Items"> | number
  }

  export type CartsWhereInput = {
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    cart_id?: IntFilter<"Carts"> | number
    user_id?: IntFilter<"Carts"> | number
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Cart_Items?: Cart_ItemsListRelationFilter
  }

  export type CartsOrderByWithRelationInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    User?: UsersOrderByWithRelationInput
    Cart_Items?: Cart_ItemsOrderByRelationAggregateInput
  }

  export type CartsWhereUniqueInput = Prisma.AtLeast<{
    cart_id?: number
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    user_id?: IntFilter<"Carts"> | number
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Cart_Items?: Cart_ItemsListRelationFilter
  }, "cart_id">

  export type CartsOrderByWithAggregationInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
    _count?: CartsCountOrderByAggregateInput
    _avg?: CartsAvgOrderByAggregateInput
    _max?: CartsMaxOrderByAggregateInput
    _min?: CartsMinOrderByAggregateInput
    _sum?: CartsSumOrderByAggregateInput
  }

  export type CartsScalarWhereWithAggregatesInput = {
    AND?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    OR?: CartsScalarWhereWithAggregatesInput[]
    NOT?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    cart_id?: IntWithAggregatesFilter<"Carts"> | number
    user_id?: IntWithAggregatesFilter<"Carts"> | number
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    category_id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    parent_id?: IntNullableFilter<"Categories"> | number | null
    Parent?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    Children?: CategoriesListRelationFilter
    Products?: ProductsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    Parent?: CategoriesOrderByWithRelationInput
    Children?: CategoriesOrderByRelationAggregateInput
    Products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    parent_id?: IntNullableFilter<"Categories"> | number | null
    Parent?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    Children?: CategoriesListRelationFilter
    Products?: ProductsListRelationFilter
  }, "category_id">

  export type CategoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    parent_id?: IntNullableWithAggregatesFilter<"Categories"> | number | null
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    payment_id?: IntFilter<"Payments"> | number
    order_id?: IntFilter<"Payments"> | number
    method?: StringFilter<"Payments"> | string
    amount?: DecimalFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeNullableFilter<"Payments"> | Date | string | null
    Order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    Order?: OrdersOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    order_id?: number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    method?: StringFilter<"Payments"> | string
    amount?: DecimalFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeNullableFilter<"Payments"> | Date | string | null
    Order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "payment_id" | "order_id">

  export type PaymentsOrderByWithAggregationInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrderInput | SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"Payments"> | number
    order_id?: IntWithAggregatesFilter<"Payments"> | number
    method?: StringWithAggregatesFilter<"Payments"> | string
    amount?: DecimalWithAggregatesFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    paid_at?: DateTimeNullableWithAggregatesFilter<"Payments"> | Date | string | null
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    order_id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    status?: StringFilter<"Orders"> | string
    total_price?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    payment_state?: StringNullableFilter<"Orders"> | string | null
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
    Reviews?: ReviewsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    payment_state?: SortOrderInput | SortOrder
    User?: UsersOrderByWithRelationInput
    Payment?: PaymentsOrderByWithRelationInput
    Reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    user_id?: IntFilter<"Orders"> | number
    status?: StringFilter<"Orders"> | string
    total_price?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    payment_state?: StringNullableFilter<"Orders"> | string | null
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Payment?: XOR<PaymentsNullableScalarRelationFilter, PaymentsWhereInput> | null
    Reviews?: ReviewsListRelationFilter
  }, "order_id">

  export type OrdersOrderByWithAggregationInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    payment_state?: SortOrderInput | SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"Orders"> | number
    user_id?: IntWithAggregatesFilter<"Orders"> | number
    status?: StringWithAggregatesFilter<"Orders"> | string
    total_price?: DecimalWithAggregatesFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    payment_state?: StringNullableWithAggregatesFilter<"Orders"> | string | null
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    review_id?: IntFilter<"Reviews"> | number
    user_id?: IntFilter<"Reviews"> | number
    product_id?: IntFilter<"Reviews"> | number
    order_id?: IntNullableFilter<"Reviews"> | number | null
    rating?: IntFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    created_at?: DateTimeFilter<"Reviews"> | Date | string
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    Order?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
  }

  export type ReviewsOrderByWithRelationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    User?: UsersOrderByWithRelationInput
    Product?: ProductsOrderByWithRelationInput
    Order?: OrdersOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    user_id?: IntFilter<"Reviews"> | number
    product_id?: IntFilter<"Reviews"> | number
    order_id?: IntNullableFilter<"Reviews"> | number | null
    rating?: IntFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    created_at?: DateTimeFilter<"Reviews"> | Date | string
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    Order?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
  }, "review_id">

  export type ReviewsOrderByWithAggregationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"Reviews"> | number
    user_id?: IntWithAggregatesFilter<"Reviews"> | number
    product_id?: IntWithAggregatesFilter<"Reviews"> | number
    order_id?: IntNullableWithAggregatesFilter<"Reviews"> | number | null
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    comment?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type WishlistsWhereInput = {
    AND?: WishlistsWhereInput | WishlistsWhereInput[]
    OR?: WishlistsWhereInput[]
    NOT?: WishlistsWhereInput | WishlistsWhereInput[]
    wishlist_id?: IntFilter<"Wishlists"> | number
    user_id?: IntFilter<"Wishlists"> | number
    product_id?: IntFilter<"Wishlists"> | number
    created_at?: DateTimeFilter<"Wishlists"> | Date | string
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type WishlistsOrderByWithRelationInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    User?: UsersOrderByWithRelationInput
    Product?: ProductsOrderByWithRelationInput
  }

  export type WishlistsWhereUniqueInput = Prisma.AtLeast<{
    wishlist_id?: number
    AND?: WishlistsWhereInput | WishlistsWhereInput[]
    OR?: WishlistsWhereInput[]
    NOT?: WishlistsWhereInput | WishlistsWhereInput[]
    user_id?: IntFilter<"Wishlists"> | number
    product_id?: IntFilter<"Wishlists"> | number
    created_at?: DateTimeFilter<"Wishlists"> | Date | string
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "wishlist_id">

  export type WishlistsOrderByWithAggregationInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    _count?: WishlistsCountOrderByAggregateInput
    _avg?: WishlistsAvgOrderByAggregateInput
    _max?: WishlistsMaxOrderByAggregateInput
    _min?: WishlistsMinOrderByAggregateInput
    _sum?: WishlistsSumOrderByAggregateInput
  }

  export type WishlistsScalarWhereWithAggregatesInput = {
    AND?: WishlistsScalarWhereWithAggregatesInput | WishlistsScalarWhereWithAggregatesInput[]
    OR?: WishlistsScalarWhereWithAggregatesInput[]
    NOT?: WishlistsScalarWhereWithAggregatesInput | WishlistsScalarWhereWithAggregatesInput[]
    wishlist_id?: IntWithAggregatesFilter<"Wishlists"> | number
    user_id?: IntWithAggregatesFilter<"Wishlists"> | number
    product_id?: IntWithAggregatesFilter<"Wishlists"> | number
    created_at?: DateTimeWithAggregatesFilter<"Wishlists"> | Date | string
  }

  export type CouponsWhereInput = {
    AND?: CouponsWhereInput | CouponsWhereInput[]
    OR?: CouponsWhereInput[]
    NOT?: CouponsWhereInput | CouponsWhereInput[]
    coupon_id?: IntFilter<"Coupons"> | number
    code?: StringFilter<"Coupons"> | string
    discount?: DecimalFilter<"Coupons"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"Coupons"> | string
    valid_from?: DateTimeFilter<"Coupons"> | Date | string
    valid_to?: DateTimeFilter<"Coupons"> | Date | string
    usage_limit?: IntFilter<"Coupons"> | number
    User_Coupons?: User_CouponsListRelationFilter
  }

  export type CouponsOrderByWithRelationInput = {
    coupon_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    usage_limit?: SortOrder
    User_Coupons?: User_CouponsOrderByRelationAggregateInput
  }

  export type CouponsWhereUniqueInput = Prisma.AtLeast<{
    coupon_id?: number
    code?: string
    AND?: CouponsWhereInput | CouponsWhereInput[]
    OR?: CouponsWhereInput[]
    NOT?: CouponsWhereInput | CouponsWhereInput[]
    discount?: DecimalFilter<"Coupons"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"Coupons"> | string
    valid_from?: DateTimeFilter<"Coupons"> | Date | string
    valid_to?: DateTimeFilter<"Coupons"> | Date | string
    usage_limit?: IntFilter<"Coupons"> | number
    User_Coupons?: User_CouponsListRelationFilter
  }, "coupon_id" | "code">

  export type CouponsOrderByWithAggregationInput = {
    coupon_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    usage_limit?: SortOrder
    _count?: CouponsCountOrderByAggregateInput
    _avg?: CouponsAvgOrderByAggregateInput
    _max?: CouponsMaxOrderByAggregateInput
    _min?: CouponsMinOrderByAggregateInput
    _sum?: CouponsSumOrderByAggregateInput
  }

  export type CouponsScalarWhereWithAggregatesInput = {
    AND?: CouponsScalarWhereWithAggregatesInput | CouponsScalarWhereWithAggregatesInput[]
    OR?: CouponsScalarWhereWithAggregatesInput[]
    NOT?: CouponsScalarWhereWithAggregatesInput | CouponsScalarWhereWithAggregatesInput[]
    coupon_id?: IntWithAggregatesFilter<"Coupons"> | number
    code?: StringWithAggregatesFilter<"Coupons"> | string
    discount?: DecimalWithAggregatesFilter<"Coupons"> | Decimal | DecimalJsLike | number | string
    type?: StringWithAggregatesFilter<"Coupons"> | string
    valid_from?: DateTimeWithAggregatesFilter<"Coupons"> | Date | string
    valid_to?: DateTimeWithAggregatesFilter<"Coupons"> | Date | string
    usage_limit?: IntWithAggregatesFilter<"Coupons"> | number
  }

  export type User_CouponsWhereInput = {
    AND?: User_CouponsWhereInput | User_CouponsWhereInput[]
    OR?: User_CouponsWhereInput[]
    NOT?: User_CouponsWhereInput | User_CouponsWhereInput[]
    user_coupon_id?: IntFilter<"User_Coupons"> | number
    user_id?: IntFilter<"User_Coupons"> | number
    coupon_id?: IntFilter<"User_Coupons"> | number
    used_at?: DateTimeNullableFilter<"User_Coupons"> | Date | string | null
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Coupon?: XOR<CouponsScalarRelationFilter, CouponsWhereInput>
  }

  export type User_CouponsOrderByWithRelationInput = {
    user_coupon_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    used_at?: SortOrderInput | SortOrder
    User?: UsersOrderByWithRelationInput
    Coupon?: CouponsOrderByWithRelationInput
  }

  export type User_CouponsWhereUniqueInput = Prisma.AtLeast<{
    user_coupon_id?: number
    AND?: User_CouponsWhereInput | User_CouponsWhereInput[]
    OR?: User_CouponsWhereInput[]
    NOT?: User_CouponsWhereInput | User_CouponsWhereInput[]
    user_id?: IntFilter<"User_Coupons"> | number
    coupon_id?: IntFilter<"User_Coupons"> | number
    used_at?: DateTimeNullableFilter<"User_Coupons"> | Date | string | null
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Coupon?: XOR<CouponsScalarRelationFilter, CouponsWhereInput>
  }, "user_coupon_id">

  export type User_CouponsOrderByWithAggregationInput = {
    user_coupon_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    used_at?: SortOrderInput | SortOrder
    _count?: User_CouponsCountOrderByAggregateInput
    _avg?: User_CouponsAvgOrderByAggregateInput
    _max?: User_CouponsMaxOrderByAggregateInput
    _min?: User_CouponsMinOrderByAggregateInput
    _sum?: User_CouponsSumOrderByAggregateInput
  }

  export type User_CouponsScalarWhereWithAggregatesInput = {
    AND?: User_CouponsScalarWhereWithAggregatesInput | User_CouponsScalarWhereWithAggregatesInput[]
    OR?: User_CouponsScalarWhereWithAggregatesInput[]
    NOT?: User_CouponsScalarWhereWithAggregatesInput | User_CouponsScalarWhereWithAggregatesInput[]
    user_coupon_id?: IntWithAggregatesFilter<"User_Coupons"> | number
    user_id?: IntWithAggregatesFilter<"User_Coupons"> | number
    coupon_id?: IntWithAggregatesFilter<"User_Coupons"> | number
    used_at?: DateTimeNullableWithAggregatesFilter<"User_Coupons"> | Date | string | null
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    image_id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    product_id?: IntFilter<"Image"> | number
    Product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    image_id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    product_id?: SortOrder
    Product?: ProductsOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    image_id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    product_id?: IntFilter<"Image"> | number
    Product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "image_id">

  export type ImageOrderByWithAggregationInput = {
    image_id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    product_id?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    image_id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
    alt?: StringNullableWithAggregatesFilter<"Image"> | string | null
    product_id?: IntWithAggregatesFilter<"Image"> | number
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsCreateNestedManyWithoutUserInput
    Reviews?: ReviewsCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Reviews?: ReviewsUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    created_at?: Date | string
    products_option?: string | null
    Category: CategoriesCreateNestedOneWithoutProductsInput
    Cart_Items?: Cart_ItemsCreateNestedManyWithoutProductInput
    Reviews?: ReviewsCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsCreateNestedManyWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category_id: number
    created_at?: Date | string
    products_option?: string | null
    Cart_Items?: Cart_ItemsUncheckedCreateNestedManyWithoutProductInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutProductInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    Cart_Items?: Cart_ItemsUpdateManyWithoutProductNestedInput
    Reviews?: ReviewsUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUpdateManyWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Cart_Items?: Cart_ItemsUncheckedUpdateManyWithoutProductNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category_id: number
    created_at?: Date | string
    products_option?: string | null
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductsUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Cart_ItemsCreateInput = {
    quantity: number
    Cart: CartsCreateNestedOneWithoutCart_ItemsInput
    Product: ProductsCreateNestedOneWithoutCart_ItemsInput
  }

  export type Cart_ItemsUncheckedCreateInput = {
    cart_item_id?: number
    cart_id: number
    product_id: number
    quantity: number
  }

  export type Cart_ItemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    Cart?: CartsUpdateOneRequiredWithoutCart_ItemsNestedInput
    Product?: ProductsUpdateOneRequiredWithoutCart_ItemsNestedInput
  }

  export type Cart_ItemsUncheckedUpdateInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Cart_ItemsCreateManyInput = {
    cart_item_id?: number
    cart_id: number
    product_id: number
    quantity: number
  }

  export type Cart_ItemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Cart_ItemsUncheckedUpdateManyInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartsCreateInput = {
    User: UsersCreateNestedOneWithoutCartsInput
    Cart_Items?: Cart_ItemsCreateNestedManyWithoutCartInput
  }

  export type CartsUncheckedCreateInput = {
    cart_id?: number
    user_id: number
    Cart_Items?: Cart_ItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartsUpdateInput = {
    User?: UsersUpdateOneRequiredWithoutCartsNestedInput
    Cart_Items?: Cart_ItemsUpdateManyWithoutCartNestedInput
  }

  export type CartsUncheckedUpdateInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    Cart_Items?: Cart_ItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartsCreateManyInput = {
    cart_id?: number
    user_id: number
  }

  export type CartsUpdateManyMutationInput = {

  }

  export type CartsUncheckedUpdateManyInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesCreateInput = {
    name: string
    Parent?: CategoriesCreateNestedOneWithoutChildrenInput
    Children?: CategoriesCreateNestedManyWithoutParentInput
    Products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    category_id?: number
    name: string
    parent_id?: number | null
    Children?: CategoriesUncheckedCreateNestedManyWithoutParentInput
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Parent?: CategoriesUpdateOneWithoutChildrenNestedInput
    Children?: CategoriesUpdateManyWithoutParentNestedInput
    Products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    Children?: CategoriesUncheckedUpdateManyWithoutParentNestedInput
    Products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    category_id?: number
    name: string
    parent_id?: number | null
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentsCreateInput = {
    method: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
    Order: OrdersCreateNestedOneWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateInput = {
    payment_id?: number
    order_id: number
    method: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
  }

  export type PaymentsUpdateInput = {
    method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Order?: OrdersUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentsCreateManyInput = {
    payment_id?: number
    order_id: number
    method: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
  }

  export type PaymentsUpdateManyMutationInput = {
    method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentsUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersCreateInput = {
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
    User: UsersCreateNestedOneWithoutOrdersInput
    Payment?: PaymentsCreateNestedOneWithoutOrderInput
    Reviews?: ReviewsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    order_id?: number
    user_id: number
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
    Payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    Payment?: PaymentsUpdateOneWithoutOrderNestedInput
    Reviews?: ReviewsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    order_id?: number
    user_id: number
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
  }

  export type OrdersUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsCreateInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    User: UsersCreateNestedOneWithoutReviewsInput
    Product: ProductsCreateNestedOneWithoutReviewsInput
    Order?: OrdersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    review_id?: number
    user_id: number
    product_id: number
    order_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    Product?: ProductsUpdateOneRequiredWithoutReviewsNestedInput
    Order?: OrdersUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    review_id?: number
    user_id: number
    product_id: number
    order_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistsCreateInput = {
    created_at?: Date | string
    User: UsersCreateNestedOneWithoutWishlistsInput
    Product: ProductsCreateNestedOneWithoutWishlistsInput
  }

  export type WishlistsUncheckedCreateInput = {
    wishlist_id?: number
    user_id: number
    product_id: number
    created_at?: Date | string
  }

  export type WishlistsUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutWishlistsNestedInput
    Product?: ProductsUpdateOneRequiredWithoutWishlistsNestedInput
  }

  export type WishlistsUncheckedUpdateInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistsCreateManyInput = {
    wishlist_id?: number
    user_id: number
    product_id: number
    created_at?: Date | string
  }

  export type WishlistsUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistsUncheckedUpdateManyInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponsCreateInput = {
    code: string
    discount: Decimal | DecimalJsLike | number | string
    type: string
    valid_from: Date | string
    valid_to: Date | string
    usage_limit: number
    User_Coupons?: User_CouponsCreateNestedManyWithoutCouponInput
  }

  export type CouponsUncheckedCreateInput = {
    coupon_id?: number
    code: string
    discount: Decimal | DecimalJsLike | number | string
    type: string
    valid_from: Date | string
    valid_to: Date | string
    usage_limit: number
    User_Coupons?: User_CouponsUncheckedCreateNestedManyWithoutCouponInput
  }

  export type CouponsUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    User_Coupons?: User_CouponsUpdateManyWithoutCouponNestedInput
  }

  export type CouponsUncheckedUpdateInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
    User_Coupons?: User_CouponsUncheckedUpdateManyWithoutCouponNestedInput
  }

  export type CouponsCreateManyInput = {
    coupon_id?: number
    code: string
    discount: Decimal | DecimalJsLike | number | string
    type: string
    valid_from: Date | string
    valid_to: Date | string
    usage_limit: number
  }

  export type CouponsUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
  }

  export type CouponsUncheckedUpdateManyInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
  }

  export type User_CouponsCreateInput = {
    used_at?: Date | string | null
    User: UsersCreateNestedOneWithoutUser_CouponsInput
    Coupon: CouponsCreateNestedOneWithoutUser_CouponsInput
  }

  export type User_CouponsUncheckedCreateInput = {
    user_coupon_id?: number
    user_id: number
    coupon_id: number
    used_at?: Date | string | null
  }

  export type User_CouponsUpdateInput = {
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UsersUpdateOneRequiredWithoutUser_CouponsNestedInput
    Coupon?: CouponsUpdateOneRequiredWithoutUser_CouponsNestedInput
  }

  export type User_CouponsUncheckedUpdateInput = {
    user_coupon_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    coupon_id?: IntFieldUpdateOperationsInput | number
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_CouponsCreateManyInput = {
    user_coupon_id?: number
    user_id: number
    coupon_id: number
    used_at?: Date | string | null
  }

  export type User_CouponsUpdateManyMutationInput = {
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_CouponsUncheckedUpdateManyInput = {
    user_coupon_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    coupon_id?: IntFieldUpdateOperationsInput | number
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ImageCreateInput = {
    url: string
    alt?: string | null
    Product: ProductsCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    image_id?: number
    url: string
    alt?: string | null
    product_id: number
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    Product?: ProductsUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type ImageCreateManyInput = {
    image_id?: number
    url: string
    alt?: string | null
    product_id: number
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type CartsListRelationFilter = {
    every?: CartsWhereInput
    some?: CartsWhereInput
    none?: CartsWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type WishlistsListRelationFilter = {
    every?: WishlistsWhereInput
    some?: WishlistsWhereInput
    none?: WishlistsWhereInput
  }

  export type User_CouponsListRelationFilter = {
    every?: User_CouponsWhereInput
    some?: User_CouponsWhereInput
    none?: User_CouponsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishlistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type User_CouponsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    provider_id?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    provider_id?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    provider_id?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type Cart_ItemsListRelationFilter = {
    every?: Cart_ItemsWhereInput
    some?: Cart_ItemsWhereInput
    none?: Cart_ItemsWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type Cart_ItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    products_option?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    product_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category_id?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    products_option?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category_id?: SortOrder
    created_at?: SortOrder
    products_option?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    product_id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    category_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CartsScalarRelationFilter = {
    is?: CartsWhereInput
    isNot?: CartsWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type Cart_ItemsCart_idProduct_idCompoundUniqueInput = {
    cart_id: number
    product_id: number
  }

  export type Cart_ItemsCountOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type Cart_ItemsAvgOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type Cart_ItemsMaxOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type Cart_ItemsMinOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type Cart_ItemsSumOrderByAggregateInput = {
    cart_item_id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CartsCountOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartsAvgOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartsMaxOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartsMinOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
  }

  export type CartsSumOrderByAggregateInput = {
    cart_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: CategoriesWhereInput | null
    isNot?: CategoriesWhereInput | null
  }

  export type CategoriesListRelationFilter = {
    every?: CategoriesWhereInput
    some?: CategoriesWhereInput
    none?: CategoriesWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type CategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    category_id?: SortOrder
    parent_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type PaymentsCountOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    paid_at?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    payment_id?: SortOrder
    order_id?: SortOrder
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PaymentsNullableScalarRelationFilter = {
    is?: PaymentsWhereInput | null
    isNot?: PaymentsWhereInput | null
  }

  export type OrdersCountOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    payment_state?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    payment_state?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    payment_state?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: OrdersWhereInput | null
    isNot?: OrdersWhereInput | null
  }

  export type ReviewsCountOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    order_id?: SortOrder
    rating?: SortOrder
  }

  export type WishlistsCountOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
  }

  export type WishlistsAvgOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type WishlistsMaxOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
  }

  export type WishlistsMinOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
  }

  export type WishlistsSumOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
  }

  export type CouponsCountOrderByAggregateInput = {
    coupon_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    usage_limit?: SortOrder
  }

  export type CouponsAvgOrderByAggregateInput = {
    coupon_id?: SortOrder
    discount?: SortOrder
    usage_limit?: SortOrder
  }

  export type CouponsMaxOrderByAggregateInput = {
    coupon_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    usage_limit?: SortOrder
  }

  export type CouponsMinOrderByAggregateInput = {
    coupon_id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    type?: SortOrder
    valid_from?: SortOrder
    valid_to?: SortOrder
    usage_limit?: SortOrder
  }

  export type CouponsSumOrderByAggregateInput = {
    coupon_id?: SortOrder
    discount?: SortOrder
    usage_limit?: SortOrder
  }

  export type CouponsScalarRelationFilter = {
    is?: CouponsWhereInput
    isNot?: CouponsWhereInput
  }

  export type User_CouponsCountOrderByAggregateInput = {
    user_coupon_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    used_at?: SortOrder
  }

  export type User_CouponsAvgOrderByAggregateInput = {
    user_coupon_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
  }

  export type User_CouponsMaxOrderByAggregateInput = {
    user_coupon_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    used_at?: SortOrder
  }

  export type User_CouponsMinOrderByAggregateInput = {
    user_coupon_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
    used_at?: SortOrder
  }

  export type User_CouponsSumOrderByAggregateInput = {
    user_coupon_id?: SortOrder
    user_id?: SortOrder
    coupon_id?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    image_id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    product_id?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    image_id?: SortOrder
    product_id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    image_id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    product_id?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    image_id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    product_id?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    image_id?: SortOrder
    product_id?: SortOrder
  }

  export type CartsCreateNestedManyWithoutUserInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type WishlistsCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistsCreateWithoutUserInput, WishlistsUncheckedCreateWithoutUserInput> | WishlistsCreateWithoutUserInput[] | WishlistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistsCreateOrConnectWithoutUserInput | WishlistsCreateOrConnectWithoutUserInput[]
    createMany?: WishlistsCreateManyUserInputEnvelope
    connect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
  }

  export type User_CouponsCreateNestedManyWithoutUserInput = {
    create?: XOR<User_CouponsCreateWithoutUserInput, User_CouponsUncheckedCreateWithoutUserInput> | User_CouponsCreateWithoutUserInput[] | User_CouponsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_CouponsCreateOrConnectWithoutUserInput | User_CouponsCreateOrConnectWithoutUserInput[]
    createMany?: User_CouponsCreateManyUserInputEnvelope
    connect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
  }

  export type CartsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type WishlistsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WishlistsCreateWithoutUserInput, WishlistsUncheckedCreateWithoutUserInput> | WishlistsCreateWithoutUserInput[] | WishlistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistsCreateOrConnectWithoutUserInput | WishlistsCreateOrConnectWithoutUserInput[]
    createMany?: WishlistsCreateManyUserInputEnvelope
    connect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
  }

  export type User_CouponsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<User_CouponsCreateWithoutUserInput, User_CouponsUncheckedCreateWithoutUserInput> | User_CouponsCreateWithoutUserInput[] | User_CouponsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_CouponsCreateOrConnectWithoutUserInput | User_CouponsCreateOrConnectWithoutUserInput[]
    createMany?: User_CouponsCreateManyUserInputEnvelope
    connect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type CartsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutUserInput | CartsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutUserInput | CartsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutUserInput | CartsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type WishlistsUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistsCreateWithoutUserInput, WishlistsUncheckedCreateWithoutUserInput> | WishlistsCreateWithoutUserInput[] | WishlistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistsCreateOrConnectWithoutUserInput | WishlistsCreateOrConnectWithoutUserInput[]
    upsert?: WishlistsUpsertWithWhereUniqueWithoutUserInput | WishlistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistsCreateManyUserInputEnvelope
    set?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    disconnect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    delete?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    connect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    update?: WishlistsUpdateWithWhereUniqueWithoutUserInput | WishlistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistsUpdateManyWithWhereWithoutUserInput | WishlistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistsScalarWhereInput | WishlistsScalarWhereInput[]
  }

  export type User_CouponsUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_CouponsCreateWithoutUserInput, User_CouponsUncheckedCreateWithoutUserInput> | User_CouponsCreateWithoutUserInput[] | User_CouponsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_CouponsCreateOrConnectWithoutUserInput | User_CouponsCreateOrConnectWithoutUserInput[]
    upsert?: User_CouponsUpsertWithWhereUniqueWithoutUserInput | User_CouponsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_CouponsCreateManyUserInputEnvelope
    set?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    disconnect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    delete?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    connect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    update?: User_CouponsUpdateWithWhereUniqueWithoutUserInput | User_CouponsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_CouponsUpdateManyWithWhereWithoutUserInput | User_CouponsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_CouponsScalarWhereInput | User_CouponsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CartsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutUserInput | CartsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutUserInput | CartsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutUserInput | CartsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type WishlistsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishlistsCreateWithoutUserInput, WishlistsUncheckedCreateWithoutUserInput> | WishlistsCreateWithoutUserInput[] | WishlistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishlistsCreateOrConnectWithoutUserInput | WishlistsCreateOrConnectWithoutUserInput[]
    upsert?: WishlistsUpsertWithWhereUniqueWithoutUserInput | WishlistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishlistsCreateManyUserInputEnvelope
    set?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    disconnect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    delete?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    connect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    update?: WishlistsUpdateWithWhereUniqueWithoutUserInput | WishlistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishlistsUpdateManyWithWhereWithoutUserInput | WishlistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishlistsScalarWhereInput | WishlistsScalarWhereInput[]
  }

  export type User_CouponsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_CouponsCreateWithoutUserInput, User_CouponsUncheckedCreateWithoutUserInput> | User_CouponsCreateWithoutUserInput[] | User_CouponsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_CouponsCreateOrConnectWithoutUserInput | User_CouponsCreateOrConnectWithoutUserInput[]
    upsert?: User_CouponsUpsertWithWhereUniqueWithoutUserInput | User_CouponsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_CouponsCreateManyUserInputEnvelope
    set?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    disconnect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    delete?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    connect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    update?: User_CouponsUpdateWithWhereUniqueWithoutUserInput | User_CouponsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_CouponsUpdateManyWithWhereWithoutUserInput | User_CouponsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_CouponsScalarWhereInput | User_CouponsScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type Cart_ItemsCreateNestedManyWithoutProductInput = {
    create?: XOR<Cart_ItemsCreateWithoutProductInput, Cart_ItemsUncheckedCreateWithoutProductInput> | Cart_ItemsCreateWithoutProductInput[] | Cart_ItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Cart_ItemsCreateOrConnectWithoutProductInput | Cart_ItemsCreateOrConnectWithoutProductInput[]
    createMany?: Cart_ItemsCreateManyProductInputEnvelope
    connect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type WishlistsCreateNestedManyWithoutProductInput = {
    create?: XOR<WishlistsCreateWithoutProductInput, WishlistsUncheckedCreateWithoutProductInput> | WishlistsCreateWithoutProductInput[] | WishlistsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistsCreateOrConnectWithoutProductInput | WishlistsCreateOrConnectWithoutProductInput[]
    createMany?: WishlistsCreateManyProductInputEnvelope
    connect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type Cart_ItemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Cart_ItemsCreateWithoutProductInput, Cart_ItemsUncheckedCreateWithoutProductInput> | Cart_ItemsCreateWithoutProductInput[] | Cart_ItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Cart_ItemsCreateOrConnectWithoutProductInput | Cart_ItemsCreateOrConnectWithoutProductInput[]
    createMany?: Cart_ItemsCreateManyProductInputEnvelope
    connect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type WishlistsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<WishlistsCreateWithoutProductInput, WishlistsUncheckedCreateWithoutProductInput> | WishlistsCreateWithoutProductInput[] | WishlistsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistsCreateOrConnectWithoutProductInput | WishlistsCreateOrConnectWithoutProductInput[]
    createMany?: WishlistsCreateManyProductInputEnvelope
    connect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    upsert?: CategoriesUpsertWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductsInput, CategoriesUpdateWithoutProductsInput>, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type Cart_ItemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<Cart_ItemsCreateWithoutProductInput, Cart_ItemsUncheckedCreateWithoutProductInput> | Cart_ItemsCreateWithoutProductInput[] | Cart_ItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Cart_ItemsCreateOrConnectWithoutProductInput | Cart_ItemsCreateOrConnectWithoutProductInput[]
    upsert?: Cart_ItemsUpsertWithWhereUniqueWithoutProductInput | Cart_ItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Cart_ItemsCreateManyProductInputEnvelope
    set?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    disconnect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    delete?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    connect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    update?: Cart_ItemsUpdateWithWhereUniqueWithoutProductInput | Cart_ItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Cart_ItemsUpdateManyWithWhereWithoutProductInput | Cart_ItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Cart_ItemsScalarWhereInput | Cart_ItemsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutProductInput | ReviewsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutProductInput | ReviewsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutProductInput | ReviewsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type WishlistsUpdateManyWithoutProductNestedInput = {
    create?: XOR<WishlistsCreateWithoutProductInput, WishlistsUncheckedCreateWithoutProductInput> | WishlistsCreateWithoutProductInput[] | WishlistsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistsCreateOrConnectWithoutProductInput | WishlistsCreateOrConnectWithoutProductInput[]
    upsert?: WishlistsUpsertWithWhereUniqueWithoutProductInput | WishlistsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WishlistsCreateManyProductInputEnvelope
    set?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    disconnect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    delete?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    connect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    update?: WishlistsUpdateWithWhereUniqueWithoutProductInput | WishlistsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WishlistsUpdateManyWithWhereWithoutProductInput | WishlistsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WishlistsScalarWhereInput | WishlistsScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type Cart_ItemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Cart_ItemsCreateWithoutProductInput, Cart_ItemsUncheckedCreateWithoutProductInput> | Cart_ItemsCreateWithoutProductInput[] | Cart_ItemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Cart_ItemsCreateOrConnectWithoutProductInput | Cart_ItemsCreateOrConnectWithoutProductInput[]
    upsert?: Cart_ItemsUpsertWithWhereUniqueWithoutProductInput | Cart_ItemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Cart_ItemsCreateManyProductInputEnvelope
    set?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    disconnect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    delete?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    connect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    update?: Cart_ItemsUpdateWithWhereUniqueWithoutProductInput | Cart_ItemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Cart_ItemsUpdateManyWithWhereWithoutProductInput | Cart_ItemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Cart_ItemsScalarWhereInput | Cart_ItemsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutProductInput | ReviewsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutProductInput | ReviewsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutProductInput | ReviewsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type WishlistsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<WishlistsCreateWithoutProductInput, WishlistsUncheckedCreateWithoutProductInput> | WishlistsCreateWithoutProductInput[] | WishlistsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WishlistsCreateOrConnectWithoutProductInput | WishlistsCreateOrConnectWithoutProductInput[]
    upsert?: WishlistsUpsertWithWhereUniqueWithoutProductInput | WishlistsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WishlistsCreateManyProductInputEnvelope
    set?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    disconnect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    delete?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    connect?: WishlistsWhereUniqueInput | WishlistsWhereUniqueInput[]
    update?: WishlistsUpdateWithWhereUniqueWithoutProductInput | WishlistsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WishlistsUpdateManyWithWhereWithoutProductInput | WishlistsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WishlistsScalarWhereInput | WishlistsScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type CartsCreateNestedOneWithoutCart_ItemsInput = {
    create?: XOR<CartsCreateWithoutCart_ItemsInput, CartsUncheckedCreateWithoutCart_ItemsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutCart_ItemsInput
    connect?: CartsWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutCart_ItemsInput = {
    create?: XOR<ProductsCreateWithoutCart_ItemsInput, ProductsUncheckedCreateWithoutCart_ItemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCart_ItemsInput
    connect?: ProductsWhereUniqueInput
  }

  export type CartsUpdateOneRequiredWithoutCart_ItemsNestedInput = {
    create?: XOR<CartsCreateWithoutCart_ItemsInput, CartsUncheckedCreateWithoutCart_ItemsInput>
    connectOrCreate?: CartsCreateOrConnectWithoutCart_ItemsInput
    upsert?: CartsUpsertWithoutCart_ItemsInput
    connect?: CartsWhereUniqueInput
    update?: XOR<XOR<CartsUpdateToOneWithWhereWithoutCart_ItemsInput, CartsUpdateWithoutCart_ItemsInput>, CartsUncheckedUpdateWithoutCart_ItemsInput>
  }

  export type ProductsUpdateOneRequiredWithoutCart_ItemsNestedInput = {
    create?: XOR<ProductsCreateWithoutCart_ItemsInput, ProductsUncheckedCreateWithoutCart_ItemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutCart_ItemsInput
    upsert?: ProductsUpsertWithoutCart_ItemsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutCart_ItemsInput, ProductsUpdateWithoutCart_ItemsInput>, ProductsUncheckedUpdateWithoutCart_ItemsInput>
  }

  export type UsersCreateNestedOneWithoutCartsInput = {
    create?: XOR<UsersCreateWithoutCartsInput, UsersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCartsInput
    connect?: UsersWhereUniqueInput
  }

  export type Cart_ItemsCreateNestedManyWithoutCartInput = {
    create?: XOR<Cart_ItemsCreateWithoutCartInput, Cart_ItemsUncheckedCreateWithoutCartInput> | Cart_ItemsCreateWithoutCartInput[] | Cart_ItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: Cart_ItemsCreateOrConnectWithoutCartInput | Cart_ItemsCreateOrConnectWithoutCartInput[]
    createMany?: Cart_ItemsCreateManyCartInputEnvelope
    connect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
  }

  export type Cart_ItemsUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<Cart_ItemsCreateWithoutCartInput, Cart_ItemsUncheckedCreateWithoutCartInput> | Cart_ItemsCreateWithoutCartInput[] | Cart_ItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: Cart_ItemsCreateOrConnectWithoutCartInput | Cart_ItemsCreateOrConnectWithoutCartInput[]
    createMany?: Cart_ItemsCreateManyCartInputEnvelope
    connect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<UsersCreateWithoutCartsInput, UsersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCartsInput
    upsert?: UsersUpsertWithoutCartsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCartsInput, UsersUpdateWithoutCartsInput>, UsersUncheckedUpdateWithoutCartsInput>
  }

  export type Cart_ItemsUpdateManyWithoutCartNestedInput = {
    create?: XOR<Cart_ItemsCreateWithoutCartInput, Cart_ItemsUncheckedCreateWithoutCartInput> | Cart_ItemsCreateWithoutCartInput[] | Cart_ItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: Cart_ItemsCreateOrConnectWithoutCartInput | Cart_ItemsCreateOrConnectWithoutCartInput[]
    upsert?: Cart_ItemsUpsertWithWhereUniqueWithoutCartInput | Cart_ItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: Cart_ItemsCreateManyCartInputEnvelope
    set?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    disconnect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    delete?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    connect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    update?: Cart_ItemsUpdateWithWhereUniqueWithoutCartInput | Cart_ItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: Cart_ItemsUpdateManyWithWhereWithoutCartInput | Cart_ItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: Cart_ItemsScalarWhereInput | Cart_ItemsScalarWhereInput[]
  }

  export type Cart_ItemsUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<Cart_ItemsCreateWithoutCartInput, Cart_ItemsUncheckedCreateWithoutCartInput> | Cart_ItemsCreateWithoutCartInput[] | Cart_ItemsUncheckedCreateWithoutCartInput[]
    connectOrCreate?: Cart_ItemsCreateOrConnectWithoutCartInput | Cart_ItemsCreateOrConnectWithoutCartInput[]
    upsert?: Cart_ItemsUpsertWithWhereUniqueWithoutCartInput | Cart_ItemsUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: Cart_ItemsCreateManyCartInputEnvelope
    set?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    disconnect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    delete?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    connect?: Cart_ItemsWhereUniqueInput | Cart_ItemsWhereUniqueInput[]
    update?: Cart_ItemsUpdateWithWhereUniqueWithoutCartInput | Cart_ItemsUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: Cart_ItemsUpdateManyWithWhereWithoutCartInput | Cart_ItemsUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: Cart_ItemsScalarWhereInput | Cart_ItemsScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoriesCreateWithoutChildrenInput, CategoriesUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutChildrenInput
    connect?: CategoriesWhereUniqueInput
  }

  export type CategoriesCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput> | CategoriesCreateWithoutParentInput[] | CategoriesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutParentInput | CategoriesCreateOrConnectWithoutParentInput[]
    createMany?: CategoriesCreateManyParentInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type CategoriesUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput> | CategoriesCreateWithoutParentInput[] | CategoriesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutParentInput | CategoriesCreateOrConnectWithoutParentInput[]
    createMany?: CategoriesCreateManyParentInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type CategoriesUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoriesCreateWithoutChildrenInput, CategoriesUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutChildrenInput
    upsert?: CategoriesUpsertWithoutChildrenInput
    disconnect?: CategoriesWhereInput | boolean
    delete?: CategoriesWhereInput | boolean
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutChildrenInput, CategoriesUpdateWithoutChildrenInput>, CategoriesUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoriesUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput> | CategoriesCreateWithoutParentInput[] | CategoriesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutParentInput | CategoriesCreateOrConnectWithoutParentInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutParentInput | CategoriesUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoriesCreateManyParentInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutParentInput | CategoriesUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutParentInput | CategoriesUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriesUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput> | CategoriesCreateWithoutParentInput[] | CategoriesUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutParentInput | CategoriesCreateOrConnectWithoutParentInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutParentInput | CategoriesUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoriesCreateManyParentInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutParentInput | CategoriesUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutParentInput | CategoriesUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrdersUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentInput
    upsert?: OrdersUpsertWithoutPaymentInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutPaymentInput, OrdersUpdateWithoutPaymentInput>, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type PaymentsCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    connect?: PaymentsWhereUniqueInput
  }

  export type ReviewsCreateNestedManyWithoutOrderInput = {
    create?: XOR<ReviewsCreateWithoutOrderInput, ReviewsUncheckedCreateWithoutOrderInput> | ReviewsCreateWithoutOrderInput[] | ReviewsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutOrderInput | ReviewsCreateOrConnectWithoutOrderInput[]
    createMany?: ReviewsCreateManyOrderInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    connect?: PaymentsWhereUniqueInput
  }

  export type ReviewsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ReviewsCreateWithoutOrderInput, ReviewsUncheckedCreateWithoutOrderInput> | ReviewsCreateWithoutOrderInput[] | ReviewsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutOrderInput | ReviewsCreateOrConnectWithoutOrderInput[]
    createMany?: ReviewsCreateManyOrderInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentsUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    upsert?: PaymentsUpsertWithoutOrderInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ReviewsCreateWithoutOrderInput, ReviewsUncheckedCreateWithoutOrderInput> | ReviewsCreateWithoutOrderInput[] | ReviewsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutOrderInput | ReviewsCreateOrConnectWithoutOrderInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutOrderInput | ReviewsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ReviewsCreateManyOrderInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutOrderInput | ReviewsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutOrderInput | ReviewsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput
    upsert?: PaymentsUpsertWithoutOrderInput
    disconnect?: PaymentsWhereInput | boolean
    delete?: PaymentsWhereInput | boolean
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutOrderInput, PaymentsUpdateWithoutOrderInput>, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ReviewsCreateWithoutOrderInput, ReviewsUncheckedCreateWithoutOrderInput> | ReviewsCreateWithoutOrderInput[] | ReviewsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutOrderInput | ReviewsCreateOrConnectWithoutOrderInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutOrderInput | ReviewsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ReviewsCreateManyOrderInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutOrderInput | ReviewsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutOrderInput | ReviewsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutReviewsInput
    connect?: ProductsWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<OrdersCreateWithoutReviewsInput, OrdersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutReviewsInput
    connect?: OrdersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    upsert?: UsersUpsertWithoutReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewsInput, UsersUpdateWithoutReviewsInput>, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutReviewsInput
    upsert?: ProductsUpsertWithoutReviewsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutReviewsInput, ProductsUpdateWithoutReviewsInput>, ProductsUncheckedUpdateWithoutReviewsInput>
  }

  export type OrdersUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<OrdersCreateWithoutReviewsInput, OrdersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutReviewsInput
    upsert?: OrdersUpsertWithoutReviewsInput
    disconnect?: OrdersWhereInput | boolean
    delete?: OrdersWhereInput | boolean
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutReviewsInput, OrdersUpdateWithoutReviewsInput>, OrdersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersCreateNestedOneWithoutWishlistsInput = {
    create?: XOR<UsersCreateWithoutWishlistsInput, UsersUncheckedCreateWithoutWishlistsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWishlistsInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutWishlistsInput = {
    create?: XOR<ProductsCreateWithoutWishlistsInput, ProductsUncheckedCreateWithoutWishlistsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutWishlistsInput
    connect?: ProductsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutWishlistsNestedInput = {
    create?: XOR<UsersCreateWithoutWishlistsInput, UsersUncheckedCreateWithoutWishlistsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWishlistsInput
    upsert?: UsersUpsertWithoutWishlistsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutWishlistsInput, UsersUpdateWithoutWishlistsInput>, UsersUncheckedUpdateWithoutWishlistsInput>
  }

  export type ProductsUpdateOneRequiredWithoutWishlistsNestedInput = {
    create?: XOR<ProductsCreateWithoutWishlistsInput, ProductsUncheckedCreateWithoutWishlistsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutWishlistsInput
    upsert?: ProductsUpsertWithoutWishlistsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutWishlistsInput, ProductsUpdateWithoutWishlistsInput>, ProductsUncheckedUpdateWithoutWishlistsInput>
  }

  export type User_CouponsCreateNestedManyWithoutCouponInput = {
    create?: XOR<User_CouponsCreateWithoutCouponInput, User_CouponsUncheckedCreateWithoutCouponInput> | User_CouponsCreateWithoutCouponInput[] | User_CouponsUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: User_CouponsCreateOrConnectWithoutCouponInput | User_CouponsCreateOrConnectWithoutCouponInput[]
    createMany?: User_CouponsCreateManyCouponInputEnvelope
    connect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
  }

  export type User_CouponsUncheckedCreateNestedManyWithoutCouponInput = {
    create?: XOR<User_CouponsCreateWithoutCouponInput, User_CouponsUncheckedCreateWithoutCouponInput> | User_CouponsCreateWithoutCouponInput[] | User_CouponsUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: User_CouponsCreateOrConnectWithoutCouponInput | User_CouponsCreateOrConnectWithoutCouponInput[]
    createMany?: User_CouponsCreateManyCouponInputEnvelope
    connect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
  }

  export type User_CouponsUpdateManyWithoutCouponNestedInput = {
    create?: XOR<User_CouponsCreateWithoutCouponInput, User_CouponsUncheckedCreateWithoutCouponInput> | User_CouponsCreateWithoutCouponInput[] | User_CouponsUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: User_CouponsCreateOrConnectWithoutCouponInput | User_CouponsCreateOrConnectWithoutCouponInput[]
    upsert?: User_CouponsUpsertWithWhereUniqueWithoutCouponInput | User_CouponsUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: User_CouponsCreateManyCouponInputEnvelope
    set?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    disconnect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    delete?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    connect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    update?: User_CouponsUpdateWithWhereUniqueWithoutCouponInput | User_CouponsUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: User_CouponsUpdateManyWithWhereWithoutCouponInput | User_CouponsUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: User_CouponsScalarWhereInput | User_CouponsScalarWhereInput[]
  }

  export type User_CouponsUncheckedUpdateManyWithoutCouponNestedInput = {
    create?: XOR<User_CouponsCreateWithoutCouponInput, User_CouponsUncheckedCreateWithoutCouponInput> | User_CouponsCreateWithoutCouponInput[] | User_CouponsUncheckedCreateWithoutCouponInput[]
    connectOrCreate?: User_CouponsCreateOrConnectWithoutCouponInput | User_CouponsCreateOrConnectWithoutCouponInput[]
    upsert?: User_CouponsUpsertWithWhereUniqueWithoutCouponInput | User_CouponsUpsertWithWhereUniqueWithoutCouponInput[]
    createMany?: User_CouponsCreateManyCouponInputEnvelope
    set?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    disconnect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    delete?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    connect?: User_CouponsWhereUniqueInput | User_CouponsWhereUniqueInput[]
    update?: User_CouponsUpdateWithWhereUniqueWithoutCouponInput | User_CouponsUpdateWithWhereUniqueWithoutCouponInput[]
    updateMany?: User_CouponsUpdateManyWithWhereWithoutCouponInput | User_CouponsUpdateManyWithWhereWithoutCouponInput[]
    deleteMany?: User_CouponsScalarWhereInput | User_CouponsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUser_CouponsInput = {
    create?: XOR<UsersCreateWithoutUser_CouponsInput, UsersUncheckedCreateWithoutUser_CouponsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_CouponsInput
    connect?: UsersWhereUniqueInput
  }

  export type CouponsCreateNestedOneWithoutUser_CouponsInput = {
    create?: XOR<CouponsCreateWithoutUser_CouponsInput, CouponsUncheckedCreateWithoutUser_CouponsInput>
    connectOrCreate?: CouponsCreateOrConnectWithoutUser_CouponsInput
    connect?: CouponsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUser_CouponsNestedInput = {
    create?: XOR<UsersCreateWithoutUser_CouponsInput, UsersUncheckedCreateWithoutUser_CouponsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUser_CouponsInput
    upsert?: UsersUpsertWithoutUser_CouponsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUser_CouponsInput, UsersUpdateWithoutUser_CouponsInput>, UsersUncheckedUpdateWithoutUser_CouponsInput>
  }

  export type CouponsUpdateOneRequiredWithoutUser_CouponsNestedInput = {
    create?: XOR<CouponsCreateWithoutUser_CouponsInput, CouponsUncheckedCreateWithoutUser_CouponsInput>
    connectOrCreate?: CouponsCreateOrConnectWithoutUser_CouponsInput
    upsert?: CouponsUpsertWithoutUser_CouponsInput
    connect?: CouponsWhereUniqueInput
    update?: XOR<XOR<CouponsUpdateToOneWithWhereWithoutUser_CouponsInput, CouponsUpdateWithoutUser_CouponsInput>, CouponsUncheckedUpdateWithoutUser_CouponsInput>
  }

  export type ProductsCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImagesInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImagesInput
    upsert?: ProductsUpsertWithoutImagesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutImagesInput, ProductsUpdateWithoutImagesInput>, ProductsUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CartsCreateWithoutUserInput = {
    Cart_Items?: Cart_ItemsCreateNestedManyWithoutCartInput
  }

  export type CartsUncheckedCreateWithoutUserInput = {
    cart_id?: number
    Cart_Items?: Cart_ItemsUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartsCreateOrConnectWithoutUserInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
  }

  export type CartsCreateManyUserInputEnvelope = {
    data: CartsCreateManyUserInput | CartsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    Product: ProductsCreateNestedOneWithoutReviewsInput
    Order?: OrdersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    review_id?: number
    product_id: number
    order_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
    Payment?: PaymentsCreateNestedOneWithoutOrderInput
    Reviews?: ReviewsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    order_id?: number
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
    Payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WishlistsCreateWithoutUserInput = {
    created_at?: Date | string
    Product: ProductsCreateNestedOneWithoutWishlistsInput
  }

  export type WishlistsUncheckedCreateWithoutUserInput = {
    wishlist_id?: number
    product_id: number
    created_at?: Date | string
  }

  export type WishlistsCreateOrConnectWithoutUserInput = {
    where: WishlistsWhereUniqueInput
    create: XOR<WishlistsCreateWithoutUserInput, WishlistsUncheckedCreateWithoutUserInput>
  }

  export type WishlistsCreateManyUserInputEnvelope = {
    data: WishlistsCreateManyUserInput | WishlistsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type User_CouponsCreateWithoutUserInput = {
    used_at?: Date | string | null
    Coupon: CouponsCreateNestedOneWithoutUser_CouponsInput
  }

  export type User_CouponsUncheckedCreateWithoutUserInput = {
    user_coupon_id?: number
    coupon_id: number
    used_at?: Date | string | null
  }

  export type User_CouponsCreateOrConnectWithoutUserInput = {
    where: User_CouponsWhereUniqueInput
    create: XOR<User_CouponsCreateWithoutUserInput, User_CouponsUncheckedCreateWithoutUserInput>
  }

  export type User_CouponsCreateManyUserInputEnvelope = {
    data: User_CouponsCreateManyUserInput | User_CouponsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartsUpsertWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput
    update: XOR<CartsUpdateWithoutUserInput, CartsUncheckedUpdateWithoutUserInput>
    create: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
  }

  export type CartsUpdateWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput
    data: XOR<CartsUpdateWithoutUserInput, CartsUncheckedUpdateWithoutUserInput>
  }

  export type CartsUpdateManyWithWhereWithoutUserInput = {
    where: CartsScalarWhereInput
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyWithoutUserInput>
  }

  export type CartsScalarWhereInput = {
    AND?: CartsScalarWhereInput | CartsScalarWhereInput[]
    OR?: CartsScalarWhereInput[]
    NOT?: CartsScalarWhereInput | CartsScalarWhereInput[]
    cart_id?: IntFilter<"Carts"> | number
    user_id?: IntFilter<"Carts"> | number
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    review_id?: IntFilter<"Reviews"> | number
    user_id?: IntFilter<"Reviews"> | number
    product_id?: IntFilter<"Reviews"> | number
    order_id?: IntNullableFilter<"Reviews"> | number | null
    rating?: IntFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    created_at?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    order_id?: IntFilter<"Orders"> | number
    user_id?: IntFilter<"Orders"> | number
    status?: StringFilter<"Orders"> | string
    total_price?: DecimalFilter<"Orders"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    payment_state?: StringNullableFilter<"Orders"> | string | null
  }

  export type WishlistsUpsertWithWhereUniqueWithoutUserInput = {
    where: WishlistsWhereUniqueInput
    update: XOR<WishlistsUpdateWithoutUserInput, WishlistsUncheckedUpdateWithoutUserInput>
    create: XOR<WishlistsCreateWithoutUserInput, WishlistsUncheckedCreateWithoutUserInput>
  }

  export type WishlistsUpdateWithWhereUniqueWithoutUserInput = {
    where: WishlistsWhereUniqueInput
    data: XOR<WishlistsUpdateWithoutUserInput, WishlistsUncheckedUpdateWithoutUserInput>
  }

  export type WishlistsUpdateManyWithWhereWithoutUserInput = {
    where: WishlistsScalarWhereInput
    data: XOR<WishlistsUpdateManyMutationInput, WishlistsUncheckedUpdateManyWithoutUserInput>
  }

  export type WishlistsScalarWhereInput = {
    AND?: WishlistsScalarWhereInput | WishlistsScalarWhereInput[]
    OR?: WishlistsScalarWhereInput[]
    NOT?: WishlistsScalarWhereInput | WishlistsScalarWhereInput[]
    wishlist_id?: IntFilter<"Wishlists"> | number
    user_id?: IntFilter<"Wishlists"> | number
    product_id?: IntFilter<"Wishlists"> | number
    created_at?: DateTimeFilter<"Wishlists"> | Date | string
  }

  export type User_CouponsUpsertWithWhereUniqueWithoutUserInput = {
    where: User_CouponsWhereUniqueInput
    update: XOR<User_CouponsUpdateWithoutUserInput, User_CouponsUncheckedUpdateWithoutUserInput>
    create: XOR<User_CouponsCreateWithoutUserInput, User_CouponsUncheckedCreateWithoutUserInput>
  }

  export type User_CouponsUpdateWithWhereUniqueWithoutUserInput = {
    where: User_CouponsWhereUniqueInput
    data: XOR<User_CouponsUpdateWithoutUserInput, User_CouponsUncheckedUpdateWithoutUserInput>
  }

  export type User_CouponsUpdateManyWithWhereWithoutUserInput = {
    where: User_CouponsScalarWhereInput
    data: XOR<User_CouponsUpdateManyMutationInput, User_CouponsUncheckedUpdateManyWithoutUserInput>
  }

  export type User_CouponsScalarWhereInput = {
    AND?: User_CouponsScalarWhereInput | User_CouponsScalarWhereInput[]
    OR?: User_CouponsScalarWhereInput[]
    NOT?: User_CouponsScalarWhereInput | User_CouponsScalarWhereInput[]
    user_coupon_id?: IntFilter<"User_Coupons"> | number
    user_id?: IntFilter<"User_Coupons"> | number
    coupon_id?: IntFilter<"User_Coupons"> | number
    used_at?: DateTimeNullableFilter<"User_Coupons"> | Date | string | null
  }

  export type CategoriesCreateWithoutProductsInput = {
    name: string
    Parent?: CategoriesCreateNestedOneWithoutChildrenInput
    Children?: CategoriesCreateNestedManyWithoutParentInput
  }

  export type CategoriesUncheckedCreateWithoutProductsInput = {
    category_id?: number
    name: string
    parent_id?: number | null
    Children?: CategoriesUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoriesCreateOrConnectWithoutProductsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
  }

  export type Cart_ItemsCreateWithoutProductInput = {
    quantity: number
    Cart: CartsCreateNestedOneWithoutCart_ItemsInput
  }

  export type Cart_ItemsUncheckedCreateWithoutProductInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
  }

  export type Cart_ItemsCreateOrConnectWithoutProductInput = {
    where: Cart_ItemsWhereUniqueInput
    create: XOR<Cart_ItemsCreateWithoutProductInput, Cart_ItemsUncheckedCreateWithoutProductInput>
  }

  export type Cart_ItemsCreateManyProductInputEnvelope = {
    data: Cart_ItemsCreateManyProductInput | Cart_ItemsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutProductInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    User: UsersCreateNestedOneWithoutReviewsInput
    Order?: OrdersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutProductInput = {
    review_id?: number
    user_id: number
    order_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutProductInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput>
  }

  export type ReviewsCreateManyProductInputEnvelope = {
    data: ReviewsCreateManyProductInput | ReviewsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type WishlistsCreateWithoutProductInput = {
    created_at?: Date | string
    User: UsersCreateNestedOneWithoutWishlistsInput
  }

  export type WishlistsUncheckedCreateWithoutProductInput = {
    wishlist_id?: number
    user_id: number
    created_at?: Date | string
  }

  export type WishlistsCreateOrConnectWithoutProductInput = {
    where: WishlistsWhereUniqueInput
    create: XOR<WishlistsCreateWithoutProductInput, WishlistsUncheckedCreateWithoutProductInput>
  }

  export type WishlistsCreateManyProductInputEnvelope = {
    data: WishlistsCreateManyProductInput | WishlistsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutProductInput = {
    url: string
    alt?: string | null
  }

  export type ImageUncheckedCreateWithoutProductInput = {
    image_id?: number
    url: string
    alt?: string | null
  }

  export type ImageCreateOrConnectWithoutProductInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageCreateManyProductInputEnvelope = {
    data: ImageCreateManyProductInput | ImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutProductsInput = {
    update: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Parent?: CategoriesUpdateOneWithoutChildrenNestedInput
    Children?: CategoriesUpdateManyWithoutParentNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutProductsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    Children?: CategoriesUncheckedUpdateManyWithoutParentNestedInput
  }

  export type Cart_ItemsUpsertWithWhereUniqueWithoutProductInput = {
    where: Cart_ItemsWhereUniqueInput
    update: XOR<Cart_ItemsUpdateWithoutProductInput, Cart_ItemsUncheckedUpdateWithoutProductInput>
    create: XOR<Cart_ItemsCreateWithoutProductInput, Cart_ItemsUncheckedCreateWithoutProductInput>
  }

  export type Cart_ItemsUpdateWithWhereUniqueWithoutProductInput = {
    where: Cart_ItemsWhereUniqueInput
    data: XOR<Cart_ItemsUpdateWithoutProductInput, Cart_ItemsUncheckedUpdateWithoutProductInput>
  }

  export type Cart_ItemsUpdateManyWithWhereWithoutProductInput = {
    where: Cart_ItemsScalarWhereInput
    data: XOR<Cart_ItemsUpdateManyMutationInput, Cart_ItemsUncheckedUpdateManyWithoutProductInput>
  }

  export type Cart_ItemsScalarWhereInput = {
    AND?: Cart_ItemsScalarWhereInput | Cart_ItemsScalarWhereInput[]
    OR?: Cart_ItemsScalarWhereInput[]
    NOT?: Cart_ItemsScalarWhereInput | Cart_ItemsScalarWhereInput[]
    cart_item_id?: IntFilter<"Cart_Items"> | number
    cart_id?: IntFilter<"Cart_Items"> | number
    product_id?: IntFilter<"Cart_Items"> | number
    quantity?: IntFilter<"Cart_Items"> | number
  }

  export type ReviewsUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutProductInput, ReviewsUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutProductInput, ReviewsUncheckedUpdateWithoutProductInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutProductInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutProductInput>
  }

  export type WishlistsUpsertWithWhereUniqueWithoutProductInput = {
    where: WishlistsWhereUniqueInput
    update: XOR<WishlistsUpdateWithoutProductInput, WishlistsUncheckedUpdateWithoutProductInput>
    create: XOR<WishlistsCreateWithoutProductInput, WishlistsUncheckedCreateWithoutProductInput>
  }

  export type WishlistsUpdateWithWhereUniqueWithoutProductInput = {
    where: WishlistsWhereUniqueInput
    data: XOR<WishlistsUpdateWithoutProductInput, WishlistsUncheckedUpdateWithoutProductInput>
  }

  export type WishlistsUpdateManyWithWhereWithoutProductInput = {
    where: WishlistsScalarWhereInput
    data: XOR<WishlistsUpdateManyMutationInput, WishlistsUncheckedUpdateManyWithoutProductInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
  }

  export type ImageUpdateManyWithWhereWithoutProductInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    image_id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    product_id?: IntFilter<"Image"> | number
  }

  export type CartsCreateWithoutCart_ItemsInput = {
    User: UsersCreateNestedOneWithoutCartsInput
  }

  export type CartsUncheckedCreateWithoutCart_ItemsInput = {
    cart_id?: number
    user_id: number
  }

  export type CartsCreateOrConnectWithoutCart_ItemsInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutCart_ItemsInput, CartsUncheckedCreateWithoutCart_ItemsInput>
  }

  export type ProductsCreateWithoutCart_ItemsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    created_at?: Date | string
    products_option?: string | null
    Category: CategoriesCreateNestedOneWithoutProductsInput
    Reviews?: ReviewsCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsCreateNestedManyWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCart_ItemsInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category_id: number
    created_at?: Date | string
    products_option?: string | null
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutProductInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCart_ItemsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCart_ItemsInput, ProductsUncheckedCreateWithoutCart_ItemsInput>
  }

  export type CartsUpsertWithoutCart_ItemsInput = {
    update: XOR<CartsUpdateWithoutCart_ItemsInput, CartsUncheckedUpdateWithoutCart_ItemsInput>
    create: XOR<CartsCreateWithoutCart_ItemsInput, CartsUncheckedCreateWithoutCart_ItemsInput>
    where?: CartsWhereInput
  }

  export type CartsUpdateToOneWithWhereWithoutCart_ItemsInput = {
    where?: CartsWhereInput
    data: XOR<CartsUpdateWithoutCart_ItemsInput, CartsUncheckedUpdateWithoutCart_ItemsInput>
  }

  export type CartsUpdateWithoutCart_ItemsInput = {
    User?: UsersUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateWithoutCart_ItemsInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsUpsertWithoutCart_ItemsInput = {
    update: XOR<ProductsUpdateWithoutCart_ItemsInput, ProductsUncheckedUpdateWithoutCart_ItemsInput>
    create: XOR<ProductsCreateWithoutCart_ItemsInput, ProductsUncheckedCreateWithoutCart_ItemsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutCart_ItemsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutCart_ItemsInput, ProductsUncheckedUpdateWithoutCart_ItemsInput>
  }

  export type ProductsUpdateWithoutCart_ItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    Reviews?: ReviewsUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUpdateManyWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCart_ItemsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UsersCreateWithoutCartsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Reviews?: ReviewsCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCartsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCartsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCartsInput, UsersUncheckedCreateWithoutCartsInput>
  }

  export type Cart_ItemsCreateWithoutCartInput = {
    quantity: number
    Product: ProductsCreateNestedOneWithoutCart_ItemsInput
  }

  export type Cart_ItemsUncheckedCreateWithoutCartInput = {
    cart_item_id?: number
    product_id: number
    quantity: number
  }

  export type Cart_ItemsCreateOrConnectWithoutCartInput = {
    where: Cart_ItemsWhereUniqueInput
    create: XOR<Cart_ItemsCreateWithoutCartInput, Cart_ItemsUncheckedCreateWithoutCartInput>
  }

  export type Cart_ItemsCreateManyCartInputEnvelope = {
    data: Cart_ItemsCreateManyCartInput | Cart_ItemsCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCartsInput = {
    update: XOR<UsersUpdateWithoutCartsInput, UsersUncheckedUpdateWithoutCartsInput>
    create: XOR<UsersCreateWithoutCartsInput, UsersUncheckedCreateWithoutCartsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCartsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCartsInput, UsersUncheckedUpdateWithoutCartsInput>
  }

  export type UsersUpdateWithoutCartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCartsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Cart_ItemsUpsertWithWhereUniqueWithoutCartInput = {
    where: Cart_ItemsWhereUniqueInput
    update: XOR<Cart_ItemsUpdateWithoutCartInput, Cart_ItemsUncheckedUpdateWithoutCartInput>
    create: XOR<Cart_ItemsCreateWithoutCartInput, Cart_ItemsUncheckedCreateWithoutCartInput>
  }

  export type Cart_ItemsUpdateWithWhereUniqueWithoutCartInput = {
    where: Cart_ItemsWhereUniqueInput
    data: XOR<Cart_ItemsUpdateWithoutCartInput, Cart_ItemsUncheckedUpdateWithoutCartInput>
  }

  export type Cart_ItemsUpdateManyWithWhereWithoutCartInput = {
    where: Cart_ItemsScalarWhereInput
    data: XOR<Cart_ItemsUpdateManyMutationInput, Cart_ItemsUncheckedUpdateManyWithoutCartInput>
  }

  export type CategoriesCreateWithoutChildrenInput = {
    name: string
    Parent?: CategoriesCreateNestedOneWithoutChildrenInput
    Products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutChildrenInput = {
    category_id?: number
    name: string
    parent_id?: number | null
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutChildrenInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutChildrenInput, CategoriesUncheckedCreateWithoutChildrenInput>
  }

  export type CategoriesCreateWithoutParentInput = {
    name: string
    Children?: CategoriesCreateNestedManyWithoutParentInput
    Products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutParentInput = {
    category_id?: number
    name: string
    Children?: CategoriesUncheckedCreateNestedManyWithoutParentInput
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutParentInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput>
  }

  export type CategoriesCreateManyParentInputEnvelope = {
    data: CategoriesCreateManyParentInput | CategoriesCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    created_at?: Date | string
    products_option?: string | null
    Cart_Items?: Cart_ItemsCreateNestedManyWithoutProductInput
    Reviews?: ReviewsCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsCreateNestedManyWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    created_at?: Date | string
    products_option?: string | null
    Cart_Items?: Cart_ItemsUncheckedCreateNestedManyWithoutProductInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutProductInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutChildrenInput = {
    update: XOR<CategoriesUpdateWithoutChildrenInput, CategoriesUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoriesCreateWithoutChildrenInput, CategoriesUncheckedCreateWithoutChildrenInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutChildrenInput, CategoriesUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoriesUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    Parent?: CategoriesUpdateOneWithoutChildrenNestedInput
    Products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutChildrenInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    Products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoriesWhereUniqueInput
    update: XOR<CategoriesUpdateWithoutParentInput, CategoriesUncheckedUpdateWithoutParentInput>
    create: XOR<CategoriesCreateWithoutParentInput, CategoriesUncheckedCreateWithoutParentInput>
  }

  export type CategoriesUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoriesWhereUniqueInput
    data: XOR<CategoriesUpdateWithoutParentInput, CategoriesUncheckedUpdateWithoutParentInput>
  }

  export type CategoriesUpdateManyWithWhereWithoutParentInput = {
    where: CategoriesScalarWhereInput
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoriesScalarWhereInput = {
    AND?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    OR?: CategoriesScalarWhereInput[]
    NOT?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    category_id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    parent_id?: IntNullableFilter<"Categories"> | number | null
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    product_id?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Products"> | number
    category_id?: IntFilter<"Products"> | number
    created_at?: DateTimeFilter<"Products"> | Date | string
    products_option?: StringNullableFilter<"Products"> | string | null
  }

  export type OrdersCreateWithoutPaymentInput = {
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
    User: UsersCreateNestedOneWithoutOrdersInput
    Reviews?: ReviewsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutPaymentInput = {
    order_id?: number
    user_id: number
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutPaymentInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
  }

  export type OrdersUpsertWithoutPaymentInput = {
    update: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrdersCreateWithoutPaymentInput, OrdersUncheckedCreateWithoutPaymentInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutPaymentInput, OrdersUncheckedUpdateWithoutPaymentInput>
  }

  export type OrdersUpdateWithoutPaymentInput = {
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    Reviews?: ReviewsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutPaymentInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UsersCreateWithoutOrdersInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsCreateNestedManyWithoutUserInput
    Reviews?: ReviewsCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentsCreateWithoutOrderInput = {
    method: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
  }

  export type PaymentsUncheckedCreateWithoutOrderInput = {
    payment_id?: number
    method: string
    amount: Decimal | DecimalJsLike | number | string
    paid_at?: Date | string | null
  }

  export type PaymentsCreateOrConnectWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type ReviewsCreateWithoutOrderInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    User: UsersCreateNestedOneWithoutReviewsInput
    Product: ProductsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutOrderInput = {
    review_id?: number
    user_id: number
    product_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutOrderInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutOrderInput, ReviewsUncheckedCreateWithoutOrderInput>
  }

  export type ReviewsCreateManyOrderInputEnvelope = {
    data: ReviewsCreateManyOrderInput | ReviewsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Reviews?: ReviewsUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentsUpsertWithoutOrderInput = {
    update: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateWithoutOrderInput = {
    method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentsUncheckedUpdateWithoutOrderInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewsUpsertWithWhereUniqueWithoutOrderInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutOrderInput, ReviewsUncheckedUpdateWithoutOrderInput>
    create: XOR<ReviewsCreateWithoutOrderInput, ReviewsUncheckedCreateWithoutOrderInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutOrderInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutOrderInput, ReviewsUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutOrderInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutOrderInput>
  }

  export type UsersCreateWithoutReviewsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutReviewsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
  }

  export type ProductsCreateWithoutReviewsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    created_at?: Date | string
    products_option?: string | null
    Category: CategoriesCreateNestedOneWithoutProductsInput
    Cart_Items?: Cart_ItemsCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsCreateNestedManyWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutReviewsInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category_id: number
    created_at?: Date | string
    products_option?: string | null
    Cart_Items?: Cart_ItemsUncheckedCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutProductInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutReviewsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
  }

  export type OrdersCreateWithoutReviewsInput = {
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
    User: UsersCreateNestedOneWithoutOrdersInput
    Payment?: PaymentsCreateNestedOneWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutReviewsInput = {
    order_id?: number
    user_id: number
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
    Payment?: PaymentsUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutReviewsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutReviewsInput, OrdersUncheckedCreateWithoutReviewsInput>
  }

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsUpsertWithoutReviewsInput = {
    update: XOR<ProductsUpdateWithoutReviewsInput, ProductsUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductsCreateWithoutReviewsInput, ProductsUncheckedCreateWithoutReviewsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutReviewsInput, ProductsUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductsUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    Cart_Items?: Cart_ItemsUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUpdateManyWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutReviewsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Cart_Items?: Cart_ItemsUncheckedUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrdersUpsertWithoutReviewsInput = {
    update: XOR<OrdersUpdateWithoutReviewsInput, OrdersUncheckedUpdateWithoutReviewsInput>
    create: XOR<OrdersCreateWithoutReviewsInput, OrdersUncheckedCreateWithoutReviewsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutReviewsInput, OrdersUncheckedUpdateWithoutReviewsInput>
  }

  export type OrdersUpdateWithoutReviewsInput = {
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    Payment?: PaymentsUpdateOneWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutReviewsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type UsersCreateWithoutWishlistsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsCreateNestedManyWithoutUserInput
    Reviews?: ReviewsCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutWishlistsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    User_Coupons?: User_CouponsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutWishlistsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutWishlistsInput, UsersUncheckedCreateWithoutWishlistsInput>
  }

  export type ProductsCreateWithoutWishlistsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    created_at?: Date | string
    products_option?: string | null
    Category: CategoriesCreateNestedOneWithoutProductsInput
    Cart_Items?: Cart_ItemsCreateNestedManyWithoutProductInput
    Reviews?: ReviewsCreateNestedManyWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutWishlistsInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category_id: number
    created_at?: Date | string
    products_option?: string | null
    Cart_Items?: Cart_ItemsUncheckedCreateNestedManyWithoutProductInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutWishlistsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutWishlistsInput, ProductsUncheckedCreateWithoutWishlistsInput>
  }

  export type UsersUpsertWithoutWishlistsInput = {
    update: XOR<UsersUpdateWithoutWishlistsInput, UsersUncheckedUpdateWithoutWishlistsInput>
    create: XOR<UsersCreateWithoutWishlistsInput, UsersUncheckedCreateWithoutWishlistsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutWishlistsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutWishlistsInput, UsersUncheckedUpdateWithoutWishlistsInput>
  }

  export type UsersUpdateWithoutWishlistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Reviews?: ReviewsUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutWishlistsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    User_Coupons?: User_CouponsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsUpsertWithoutWishlistsInput = {
    update: XOR<ProductsUpdateWithoutWishlistsInput, ProductsUncheckedUpdateWithoutWishlistsInput>
    create: XOR<ProductsCreateWithoutWishlistsInput, ProductsUncheckedCreateWithoutWishlistsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutWishlistsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutWishlistsInput, ProductsUncheckedUpdateWithoutWishlistsInput>
  }

  export type ProductsUpdateWithoutWishlistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    Cart_Items?: Cart_ItemsUpdateManyWithoutProductNestedInput
    Reviews?: ReviewsUpdateManyWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutWishlistsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Cart_Items?: Cart_ItemsUncheckedUpdateManyWithoutProductNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type User_CouponsCreateWithoutCouponInput = {
    used_at?: Date | string | null
    User: UsersCreateNestedOneWithoutUser_CouponsInput
  }

  export type User_CouponsUncheckedCreateWithoutCouponInput = {
    user_coupon_id?: number
    user_id: number
    used_at?: Date | string | null
  }

  export type User_CouponsCreateOrConnectWithoutCouponInput = {
    where: User_CouponsWhereUniqueInput
    create: XOR<User_CouponsCreateWithoutCouponInput, User_CouponsUncheckedCreateWithoutCouponInput>
  }

  export type User_CouponsCreateManyCouponInputEnvelope = {
    data: User_CouponsCreateManyCouponInput | User_CouponsCreateManyCouponInput[]
    skipDuplicates?: boolean
  }

  export type User_CouponsUpsertWithWhereUniqueWithoutCouponInput = {
    where: User_CouponsWhereUniqueInput
    update: XOR<User_CouponsUpdateWithoutCouponInput, User_CouponsUncheckedUpdateWithoutCouponInput>
    create: XOR<User_CouponsCreateWithoutCouponInput, User_CouponsUncheckedCreateWithoutCouponInput>
  }

  export type User_CouponsUpdateWithWhereUniqueWithoutCouponInput = {
    where: User_CouponsWhereUniqueInput
    data: XOR<User_CouponsUpdateWithoutCouponInput, User_CouponsUncheckedUpdateWithoutCouponInput>
  }

  export type User_CouponsUpdateManyWithWhereWithoutCouponInput = {
    where: User_CouponsScalarWhereInput
    data: XOR<User_CouponsUpdateManyMutationInput, User_CouponsUncheckedUpdateManyWithoutCouponInput>
  }

  export type UsersCreateWithoutUser_CouponsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsCreateNestedManyWithoutUserInput
    Reviews?: ReviewsCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUser_CouponsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    role?: $Enums.UserRole
    provider?: string | null
    provider_id?: string | null
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUser_CouponsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUser_CouponsInput, UsersUncheckedCreateWithoutUser_CouponsInput>
  }

  export type CouponsCreateWithoutUser_CouponsInput = {
    code: string
    discount: Decimal | DecimalJsLike | number | string
    type: string
    valid_from: Date | string
    valid_to: Date | string
    usage_limit: number
  }

  export type CouponsUncheckedCreateWithoutUser_CouponsInput = {
    coupon_id?: number
    code: string
    discount: Decimal | DecimalJsLike | number | string
    type: string
    valid_from: Date | string
    valid_to: Date | string
    usage_limit: number
  }

  export type CouponsCreateOrConnectWithoutUser_CouponsInput = {
    where: CouponsWhereUniqueInput
    create: XOR<CouponsCreateWithoutUser_CouponsInput, CouponsUncheckedCreateWithoutUser_CouponsInput>
  }

  export type UsersUpsertWithoutUser_CouponsInput = {
    update: XOR<UsersUpdateWithoutUser_CouponsInput, UsersUncheckedUpdateWithoutUser_CouponsInput>
    create: XOR<UsersCreateWithoutUser_CouponsInput, UsersUncheckedCreateWithoutUser_CouponsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUser_CouponsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUser_CouponsInput, UsersUncheckedUpdateWithoutUser_CouponsInput>
  }

  export type UsersUpdateWithoutUser_CouponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Reviews?: ReviewsUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUser_CouponsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    provider_id?: NullableStringFieldUpdateOperationsInput | string | null
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CouponsUpsertWithoutUser_CouponsInput = {
    update: XOR<CouponsUpdateWithoutUser_CouponsInput, CouponsUncheckedUpdateWithoutUser_CouponsInput>
    create: XOR<CouponsCreateWithoutUser_CouponsInput, CouponsUncheckedCreateWithoutUser_CouponsInput>
    where?: CouponsWhereInput
  }

  export type CouponsUpdateToOneWithWhereWithoutUser_CouponsInput = {
    where?: CouponsWhereInput
    data: XOR<CouponsUpdateWithoutUser_CouponsInput, CouponsUncheckedUpdateWithoutUser_CouponsInput>
  }

  export type CouponsUpdateWithoutUser_CouponsInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
  }

  export type CouponsUncheckedUpdateWithoutUser_CouponsInput = {
    coupon_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    valid_from?: DateTimeFieldUpdateOperationsInput | Date | string
    valid_to?: DateTimeFieldUpdateOperationsInput | Date | string
    usage_limit?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsCreateWithoutImagesInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    created_at?: Date | string
    products_option?: string | null
    Category: CategoriesCreateNestedOneWithoutProductsInput
    Cart_Items?: Cart_ItemsCreateNestedManyWithoutProductInput
    Reviews?: ReviewsCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutImagesInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    category_id: number
    created_at?: Date | string
    products_option?: string | null
    Cart_Items?: Cart_ItemsUncheckedCreateNestedManyWithoutProductInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
    Wishlists?: WishlistsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutImagesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
  }

  export type ProductsUpsertWithoutImagesInput = {
    update: XOR<ProductsUpdateWithoutImagesInput, ProductsUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductsCreateWithoutImagesInput, ProductsUncheckedCreateWithoutImagesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutImagesInput, ProductsUncheckedUpdateWithoutImagesInput>
  }

  export type ProductsUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    Cart_Items?: Cart_ItemsUpdateManyWithoutProductNestedInput
    Reviews?: ReviewsUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutImagesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Cart_Items?: Cart_ItemsUncheckedUpdateManyWithoutProductNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartsCreateManyUserInput = {
    cart_id?: number
  }

  export type ReviewsCreateManyUserInput = {
    review_id?: number
    product_id: number
    order_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type OrdersCreateManyUserInput = {
    order_id?: number
    status: string
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    payment_state?: string | null
  }

  export type WishlistsCreateManyUserInput = {
    wishlist_id?: number
    product_id: number
    created_at?: Date | string
  }

  export type User_CouponsCreateManyUserInput = {
    user_coupon_id?: number
    coupon_id: number
    used_at?: Date | string | null
  }

  export type CartsUpdateWithoutUserInput = {
    Cart_Items?: Cart_ItemsUpdateManyWithoutCartNestedInput
  }

  export type CartsUncheckedUpdateWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
    Cart_Items?: Cart_ItemsUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartsUncheckedUpdateManyWithoutUserInput = {
    cart_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductsUpdateOneRequiredWithoutReviewsNestedInput
    Order?: OrdersUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentsUpdateOneWithoutOrderNestedInput
    Reviews?: ReviewsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
    Payment?: PaymentsUncheckedUpdateOneWithoutOrderNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WishlistsUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Product?: ProductsUpdateOneRequiredWithoutWishlistsNestedInput
  }

  export type WishlistsUncheckedUpdateWithoutUserInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistsUncheckedUpdateManyWithoutUserInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_CouponsUpdateWithoutUserInput = {
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Coupon?: CouponsUpdateOneRequiredWithoutUser_CouponsNestedInput
  }

  export type User_CouponsUncheckedUpdateWithoutUserInput = {
    user_coupon_id?: IntFieldUpdateOperationsInput | number
    coupon_id?: IntFieldUpdateOperationsInput | number
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_CouponsUncheckedUpdateManyWithoutUserInput = {
    user_coupon_id?: IntFieldUpdateOperationsInput | number
    coupon_id?: IntFieldUpdateOperationsInput | number
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Cart_ItemsCreateManyProductInput = {
    cart_item_id?: number
    cart_id: number
    quantity: number
  }

  export type ReviewsCreateManyProductInput = {
    review_id?: number
    user_id: number
    order_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type WishlistsCreateManyProductInput = {
    wishlist_id?: number
    user_id: number
    created_at?: Date | string
  }

  export type ImageCreateManyProductInput = {
    image_id?: number
    url: string
    alt?: string | null
  }

  export type Cart_ItemsUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    Cart?: CartsUpdateOneRequiredWithoutCart_ItemsNestedInput
  }

  export type Cart_ItemsUncheckedUpdateWithoutProductInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Cart_ItemsUncheckedUpdateManyWithoutProductInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsUpdateWithoutProductInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    Order?: OrdersUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutProductInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutProductInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistsUpdateWithoutProductInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutWishlistsNestedInput
  }

  export type WishlistsUncheckedUpdateWithoutProductInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishlistsUncheckedUpdateManyWithoutProductInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutProductInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateWithoutProductInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutProductInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Cart_ItemsCreateManyCartInput = {
    cart_item_id?: number
    product_id: number
    quantity: number
  }

  export type Cart_ItemsUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    Product?: ProductsUpdateOneRequiredWithoutCart_ItemsNestedInput
  }

  export type Cart_ItemsUncheckedUpdateWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Cart_ItemsUncheckedUpdateManyWithoutCartInput = {
    cart_item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesCreateManyParentInput = {
    category_id?: number
    name: string
  }

  export type ProductsCreateManyCategoryInput = {
    product_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    stock: number
    created_at?: Date | string
    products_option?: string | null
  }

  export type CategoriesUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    Children?: CategoriesUpdateManyWithoutParentNestedInput
    Products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutParentInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Children?: CategoriesUncheckedUpdateManyWithoutParentNestedInput
    Products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateManyWithoutParentInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Cart_Items?: Cart_ItemsUpdateManyWithoutProductNestedInput
    Reviews?: ReviewsUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUpdateManyWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
    Cart_Items?: Cart_ItemsUncheckedUpdateManyWithoutProductNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
    Wishlists?: WishlistsUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    products_option?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsCreateManyOrderInput = {
    review_id?: number
    user_id: number
    product_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewsUpdateWithoutOrderInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    Product?: ProductsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutOrderInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutOrderInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User_CouponsCreateManyCouponInput = {
    user_coupon_id?: number
    user_id: number
    used_at?: Date | string | null
  }

  export type User_CouponsUpdateWithoutCouponInput = {
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UsersUpdateOneRequiredWithoutUser_CouponsNestedInput
  }

  export type User_CouponsUncheckedUpdateWithoutCouponInput = {
    user_coupon_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User_CouponsUncheckedUpdateManyWithoutCouponInput = {
    user_coupon_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}