import * as Effect from '@effect/io/Effect';
import * as Exit from '@effect/io/Exit';
import * as Cause from '@effect/io/Cause';
import assert from 'node:assert';
import { pipe } from '@effect/data/Function';

const result = pipe(Effect.fail('Error'), Effect.runSyncExit);

assert.strictEqual(Exit.isFailure(result), true);
assert.strictEqual(Cause.isAnnotatedType(result.cause), true);
assert.strictEqual(Cause.isFailType(result.cause), false);
