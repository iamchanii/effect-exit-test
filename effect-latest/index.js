import { Effect, pipe, Exit, Cause } from 'effect';
import assert from 'node:assert';

const result = pipe(Effect.fail('Error'), Effect.runSyncExit);

assert.strictEqual(Exit.isFailure(result), true);
assert.strictEqual(Cause.isAnnotatedType(result.cause), false);
assert.strictEqual(Cause.isFailType(result.cause), true);
