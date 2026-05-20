const wait = (delay) => new Promise((res) => setTimeout(() => res, delay));
async function retry(fn, retries = 3) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (attempt === retries) {
        return err;
      }
      wait(1000);
    }
  }
  return lastErr;
}
