export function isUrlMatchingPattern(url: string, patterns: string): boolean {
  const patternList = patterns.split(",").map((p) => p.trim());

  return patternList.some((pattern) => {
    // Convert the glob pattern to a regex pattern
    const regexPattern = pattern
      .replace(/\*\*/g, ".*") // Replace ** with .*
      .replace(/\*/g, "[^/]*") // Replace single * with [^/]*
      .replace(/\//g, "\\/"); // Escape forward slashes

    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(url);
  });
}

/**
 * Prüft, ob ein Pfad einem Pattern entspricht
 * Unterstützt Wildcards: * (einzelnes Segment) und ** (mehrere Segmente)
 */
export function matchPath(pathname: string, pattern: string): boolean {
  // Convert the glob pattern to a regex pattern
  const regexPattern = pattern
    .replace(/\*\*/g, ".*") // Replace ** with .*
    .replace(/\*/g, "[^/]*") // Replace single * with [^/]*
    .replace(/\//g, "\\/"); // Escape forward slashes

  const regex = new RegExp(`^${regexPattern}$`);
  return regex.test(pathname);
}