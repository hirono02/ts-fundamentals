/**
 * How Awaited Works
 * 1. If it is null or undefined, or no longer 'thenable', the promise has been completely unwrapped and will return the result
 * 2. Otherwisem we will continue the chain by recursively calling Awaited
 * 3. In case our intentions are violated and then did not take a function, it resolves to never
 */

async function awaitExample<T>(input: T) {
    const output: Awaited<T> = await input;
}
