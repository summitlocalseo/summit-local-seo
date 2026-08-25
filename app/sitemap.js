const SITE_URL = 'https://www.summitlocalseo.be';

export default function sitemap() {
  const routes = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.7 },
    { path: '/pricing', priority: 0.8 },
    { path: '/audit', priority: 0.9 },
    { path: '/liege', priority: 0.8 },
    { path: '/charleroi', priority: 0.8 },
    { path: '/namur', priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
