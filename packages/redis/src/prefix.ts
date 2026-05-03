export const RATE_LIMIT_PREFIX = "ratelimit";

export function prefixRedisKey(prefix: string, key: string) {
  return `${prefix}:${key}`;
}
