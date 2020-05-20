const config = {
  siteTitle: "Fred Siika", // Site title.
  siteTitleShort: "Fred Siika", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Fred Siika", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://fredsiika.com", // Domain of your website without pathPrefix.
  repo: 'https://github.com/fredsiika/fredsiika.com',
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Fred Siika is a full stack software developer specializing in modern JavaScript.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Fred Siika RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  postDefaultCategoryID: 'Tech',
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Fred", // Username to display in the author segment.
  userEmail: "fred@fredsiika.com", // Email used for RSS feed's author segment
  userTwitter: "fredsiika", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Planet Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  newsletter: 'https://fredsiika.substack.com',
  newsletterEmbed: 'https://fredsiika.substack.com/embed',
  userDescription:
    "Hey, I’m Fred, a full stack software engineer. I write about what I know to help viewers like you. My site has no ads, sponsors, or bullshit. If you enjoy my content, please consider supporting what I do!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/fredsiika",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/fredsiika",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:fred@fredsiika.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  // Links to navigation menu
  menuLinks: [
    {
      name: 'About',
      link: '/about/',
    },
    {
      name: 'Projects',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  copyright: "Copyright © 2020. Fred Siika", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#3F80FF", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff" // Used for setting manifest background color.
};


// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
