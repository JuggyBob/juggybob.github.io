/**
 * Latest published GitHub release for each project.
 *
 * The site is fully static and makes no third-party requests in the browser,
 * so release versions are resolved while the site is built (or when the dev
 * server starts). Every lookup is best-effort: a timeout, a rate limit or a
 * network failure keeps the version declared in `projects.ts`, so a build can
 * never fail because GitHub is unavailable.
 *
 * Set `GITHUB_TOKEN` in the build environment to lift the anonymous REST API
 * rate limit; the token is only read here, on the build machine.
 */

export interface LatestRelease {
  version: string;
  publishedAt: string | null;
  url: string | null;
}

/** Project slug -> "owner/repository" on GitHub. */
const REPOSITORIES: Record<string, string> = {
  ironpulse: 'JuggyBob/IronPulse',
  calcsuite: 'JuggyBob/CalculatorSuiteAndroid',
  'discount-hunter': 'JuggyBob/DiscountHunterAndroid',
  codescope: 'JuggyBob/CodeScope',
};

const TIMEOUT_MS = 5000;

function versionFromTag(tag: string): string | null {
  const version = tag.trim().replace(/^v/i, '');
  return /^\d+(?:\.\d+)*$/.test(version) ? version : null;
}

async function fetchLatestRelease(slug: string, repository: string): Promise<LatestRelease | null> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}/releases/latest`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'juggybob-portfolio-build',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (!response.ok) {
      console.warn(
        `[releases] ${slug}: GitHub responded ${response.status}; keeping the fallback version.`
      );
      return null;
    }

    const data = (await response.json()) as {
      tag_name?: unknown;
      published_at?: unknown;
      html_url?: unknown;
    };
    const version = typeof data.tag_name === 'string' ? versionFromTag(data.tag_name) : null;
    if (!version) {
      console.warn(
        `[releases] ${slug}: unusable release tag ${JSON.stringify(data.tag_name)}; keeping the fallback version.`
      );
      return null;
    }

    console.log(`[releases] ${slug}: v${version} from GitHub`);
    return {
      version,
      publishedAt: typeof data.published_at === 'string' ? data.published_at : null,
      url: typeof data.html_url === 'string' ? data.html_url : null,
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(`[releases] ${slug}: ${reason}; keeping the fallback version.`);
    return null;
  }
}

export const latestReleases: Record<string, LatestRelease | null> = Object.fromEntries(
  await Promise.all(
    Object.entries(REPOSITORIES).map(async ([slug, repository]) => {
      const release = await fetchLatestRelease(slug, repository);
      return [slug, release] as const;
    })
  )
);
