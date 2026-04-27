import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import {
  HERO_STATE,
  LATEST_PROJECT,
  TOUR_DATES,
  ACTIVE_TOUR_DATES,
  ARCHIVED_TOUR_DATES,
  INTERVIEWS,
} from '../src/data/index.ts';
import { DISCOGRAPHY } from '../src/data/discography.ts';
import { FEATURED_SONGS } from '../src/data/featuredSongs.ts';
import { CREDITS } from '../src/data/credits.ts';

const outputPath = resolve(process.cwd(), 'ERIC_BELLINGER_COPY_STRUCTURE.json');

const now = new Date().toISOString();

const json = {
  meta: {
    project: 'Eric Bellinger',
    purpose: 'Structured copy manifest for ChatGPT to fill in replacement-ready site copy',
    generatedAt: now,
    sourceFiles: [
      'src/App.tsx',
      'src/components/Navbar.tsx',
      'src/components/Hero.tsx',
      'src/components/TourDates.tsx',
      'src/components/discography/DiscographySection.tsx',
      'src/components/discography/DiscographyDetailsSheet.tsx',
      'src/components/featured-songs/FeaturedSongsSection.tsx',
      'src/components/credits/CreditsSection.tsx',
      'src/components/Interviews.tsx',
      'src/components/Footer.tsx',
      'src/data/index.ts',
      'src/data/discography.ts',
      'src/data/featuredSongs.ts',
      'src/data/credits.ts',
    ],
    instructions: [
      'Preserve the section order and heading hierarchy.',
      'Use the provided datasets to fill in the copy exactly; do not invent facts.',
      'Return null or NEEDS_RESEARCH for any missing or unverifiable detail.',
      'Keep the copy artist-specific and concise, not generic marketing filler.',
      'For repeated content, use the item templates and the accompanying data arrays.',
    ],
  },
  site: {
    title: 'Eric Bellinger',
    layoutOrder: ['navbar', 'hero', 'tour', 'discography', 'features', 'credits', 'interviews', 'footer'],
    navigation: {
      display: 'sticky top navigation with brand, section anchors, and a CTA button',
      brand: {
        text: 'ERIC BELLINGER',
        display: 'logo/wordmark at the left of the nav',
        link: '#project',
      },
      links: [
        { label: 'PROJECT', href: '#project', icon: 'brand' },
        { label: 'TOUR', href: '#tour', icon: 'calendar' },
        { label: 'DISCOGRAPHY', href: '#discography', icon: 'discography' },
        { label: 'FEATURES', href: '#features', icon: 'features' },
        { label: 'CREDITS', href: '#credits', icon: 'pen' },
        { label: 'INTERVIEWS', href: '#interviews', icon: 'video' },
      ],
      cta: {
        text: 'GET UPDATES',
        href: '#support',
        display: 'pill button on desktop nav; hidden on mobile',
      },
    },
    sections: {
      hero: {
        id: 'project',
        component: 'Hero',
        heading: {
          level: 1,
          text: LATEST_PROJECT.title,
          display: 'large hero headline on the left side of the split layout',
        },
        subheading: {
          text: LATEST_PROJECT.description,
          display: 'supporting paragraph directly under the H1',
        },
        display: {
          layout: 'two-column hero: text block left, album art / spotlight block right',
          emphasis: 'title + latest release + live-date spotlight',
          media: 'feature image card on the right',
        },
        elements: [
          {
            key: 'eyebrow',
            label: 'hero badge',
            currentText: 'Cry In Front Of You · 2026 Live Dates',
            display: 'small uppercase pill above the title',
            needsCopy: true,
            dataNeeded: ['active release title', 'tour focus phrase', 'release/tour ordering decision'],
          },
          {
            key: 'headline',
            label: 'hero title',
            currentText: 'Cry In Front Of You',
            display: 'H1 in oversized display type',
            needsCopy: false,
            dataNeeded: ['final hero title wording if different from release title'],
          },
          {
            key: 'summary',
            label: 'hero copy',
            currentText: LATEST_PROJECT.description,
            display: 'short paragraph below the title',
            needsCopy: true,
            dataNeeded: ['short artist-approved hero summary'],
          },
          {
            key: 'primaryAction',
            label: 'primary CTA',
            currentText: HERO_STATE.latestSingle.primaryAction,
            display: 'primary button under the summary',
            needsCopy: true,
            dataNeeded: ['final CTA label for the latest release'],
          },
          {
            key: 'secondaryAction',
            label: 'secondary CTA',
            currentText: 'View 2026 Dates',
            display: 'secondary button next to the primary CTA',
            needsCopy: true,
            dataNeeded: ['tour CTA label'],
          },
          {
            key: 'archiveAction',
            label: 'archive CTA',
            currentText: 'Open Archive',
            display: 'tertiary text link',
            needsCopy: false,
            dataNeeded: ['archive route and label if changing'],
          },
        ],
        collections: [
          {
            name: 'tourSpotlight',
            display: 'two compact spotlight cards beneath the CTA buttons',
            itemTemplate: {
              fields: ['date', 'city', 'venue', 'status', 'ticketsUrl', 'isActive', 'archive'],
              displayText: 'venue name, city, date, and ticket/status badge',
            },
            items: HERO_STATE.tourSpotlight,
          },
          {
            name: 'latestProject',
            display: 'right-hand hero visual card',
            itemTemplate: {
              fields: ['title', 'type', 'releaseDate', 'coverUrl', 'listenUrl', 'links'],
              displayText: 'cover art, release title, release type, and action links',
            },
            items: [LATEST_PROJECT],
          },
        ],
      },
      tour: {
        id: 'tour',
        component: 'TourDates',
        heading: { level: 2, text: 'Tour', display: 'section heading' },
        subheading: {
          text: '2026 Live Dates',
          display: 'all-caps subtitle under the heading',
        },
        display: {
          layout: 'stacked section with a header row, date cards, and an optional archive reveal',
          emphasis: 'upcoming live dates first, archive second',
        },
        elements: [
          {
            key: 'archiveToggle',
            label: 'archive toggle',
            currentText: 'Past Shows • Hide',
            display: 'pill toggle button in the section header',
            needsCopy: true,
            dataNeeded: ['archive section label'],
          },
          {
            key: 'allDatesLink',
            label: 'all dates link',
            currentText: 'All Dates',
            display: 'text link in the section header',
            needsCopy: true,
            dataNeeded: ['filter label for all tour dates'],
          },
          {
            key: 'emptyStateTitle',
            label: 'empty state title',
            currentText: 'No upcoming dates currently listed.',
            display: 'centered empty-state headline when no active shows exist',
            needsCopy: true,
            dataNeeded: ['final empty-state wording'],
          },
          {
            key: 'emptyStateCopy',
            label: 'empty state copy',
            currentText: 'Check EricBellinger.com, Ticketmaster, and official venue pages for new show announcements.',
            display: 'supporting line beneath the empty-state headline',
            needsCopy: true,
            dataNeeded: ['approved fallback sentence for fans'],
          },
          {
            key: 'archiveHeading',
            label: 'archive heading',
            currentText: 'Past Shows',
            display: 'italic archive title above archived date cards',
            needsCopy: true,
            dataNeeded: ['archive heading'],
          },
        ],
        collections: [
          {
            name: 'activeTourDates',
            display: 'current tour cards in a responsive grid',
            itemTemplate: {
              fields: ['date', 'city', 'venue', 'status', 'ticketsUrl', 'isActive', 'archive'],
              displayText: 'month/day badge, venue title, city line, time, and ticket/status action',
            },
            items: ACTIVE_TOUR_DATES,
          },
          {
            name: 'archivedTourDates',
            display: 'collapsed archive list shown when the user reveals past shows',
            itemTemplate: {
              fields: ['date', 'city', 'venue', 'status', 'ticketsUrl', 'isActive', 'archive'],
              displayText: 'archived date, venue, city, and status',
            },
            items: ARCHIVED_TOUR_DATES,
          },
          {
            name: 'allTourDates',
            display: 'the complete tour dataset used by the page',
            itemTemplate: {
              fields: ['date', 'city', 'venue', 'status', 'ticketsUrl', 'isActive', 'archive'],
              displayText: 'all live and archived date cards',
            },
            items: TOUR_DATES,
          },
        ],
      },
      discography: {
        id: 'discography',
        component: 'DiscographySection',
        heading: { level: 2, text: 'Discography', display: 'section heading' },
        subheading: {
          text: 'Explore Eric Bellinger’s albums, EPs, collaborations, videos, and release details.',
          display: 'small uppercase support line under the heading',
        },
        display: {
          layout: 'paged carousel/grid of release cards with an anchored details sheet',
          emphasis: 'album/project archive with tracklist and video context',
        },
        elements: [
          {
            key: 'countPill',
            label: 'release count',
            currentText: `${DISCOGRAPHY.length} release entries`,
            display: 'rounded count pill beside the heading',
            needsCopy: false,
            dataNeeded: ['none'],
          },
          {
            key: 'pageControls',
            label: 'carousel controls',
            currentText: 'Previous carousel page / Next carousel page',
            display: 'left and right circular buttons with a page indicator',
            needsCopy: false,
            dataNeeded: ['none'],
          },
          {
            key: 'detailsSheetTitle',
            label: 'sheet title',
            currentText: 'Project Details',
            display: 'small uppercase label at the top of the details sheet',
            needsCopy: true,
            dataNeeded: ['preferred details-sheet label'],
          },
          {
            key: 'contextLabel',
            label: 'context label',
            currentText: 'Project context',
            display: 'small uppercase label above the project summary paragraph',
            needsCopy: true,
            dataNeeded: ['preferred context label'],
          },
          {
            key: 'streamingLabel',
            label: 'streaming label',
            currentText: 'Streaming Links & Certifications',
            display: 'rounded metadata card in the details sheet',
            needsCopy: true,
            dataNeeded: ['streaming/certification label'],
          },
          {
            key: 'featuredArtistsLabel',
            label: 'featured artists label',
            currentText: 'Featured Artists',
            display: 'small uppercase label before featured artist names',
            needsCopy: true,
            dataNeeded: ['preferred feature-artist label'],
          },
          {
            key: 'tracklistLabel',
            label: 'tracklist label',
            currentText: 'Tracklist',
            display: 'small uppercase label before the ordered song list',
            needsCopy: true,
            dataNeeded: ['preferred tracklist label'],
          },
          {
            key: 'videoLabel',
            label: 'music video label',
            currentText: 'Music Video',
            display: 'small uppercase label above a track video embed',
            needsCopy: true,
            dataNeeded: ['music video label'],
          },
        ],
        collections: [
          {
            name: 'releases',
            display: 'release cards plus detail-sheet data',
            itemTemplate: {
              card: {
                fields: ['id', 'title', 'year', 'type', 'releaseDate', 'coverUrl', 'coverAsset', 'platformLinks', 'streamingStats'],
                displayText: 'cover image/video fallback, release title, year/type, and optional badges',
              },
              sheet: {
                fields: ['sourcePage', 'sourceRefs', 'sourceConfidence', 'credits', 'tracklist', 'videoEmbed'],
                displayText: 'project summary, credits, tracklist, streaming stats, and optional video embed',
              },
              trackRow: {
                fields: ['num', 'title', 'duration', 'credits', 'musicVideoUrl', 'videoEmbed', 'hasVideo'],
                displayText: 'track number, track title, duration, credit summaries, and an optional video action',
              },
            },
            items: DISCOGRAPHY,
          },
        ],
      },
      features: {
        id: 'features',
        component: 'FeaturedSongsSection',
        heading: { level: 2, text: 'Features', display: 'section heading' },
        subheading: {
          text: 'Verified collaborations and guest appearances from Eric Bellinger’s archive',
          display: 'small uppercase support line under the heading',
        },
        display: {
          layout: 'paged 5-column card carousel with a details sheet on click',
          emphasis: 'cover image, title, collaborator credit, note/source line',
        },
        elements: [
          {
            key: 'countPill',
            label: 'feature count',
            currentText: `${FEATURED_SONGS.length} feature songs`,
            display: 'rounded count pill beside the heading',
            needsCopy: false,
            dataNeeded: ['none'],
          },
          {
            key: 'cardFallback',
            label: 'missing-cover fallback',
            currentText: 'Cover art pending verification',
            display: 'centered placeholder inside the card art area when no image exists',
            needsCopy: true,
            dataNeeded: ['approved fallback copy for missing artwork'],
          },
          {
            key: 'sheetFallback',
            label: 'missing-cover sheet fallback',
            currentText: 'Cover art pending verification',
            display: 'same placeholder as the full details sheet',
            needsCopy: true,
            dataNeeded: ['approved fallback copy for missing artwork'],
          },
          {
            key: 'contextLabel',
            label: 'feature context label',
            currentText: 'Feature context',
            display: 'small uppercase label in the details sheet',
            needsCopy: true,
            dataNeeded: ['preferred feature context label'],
          },
        ],
        collections: [
          {
            name: 'featuredSongs',
            display: 'single-item feature cards in a paged grid',
            itemTemplate: {
              fields: ['id', 'title', 'artist', 'coverUrl', 'note', 'source'],
              displayText: 'cover art, song title, collaborator line, note, and source label',
            },
            items: FEATURED_SONGS,
          },
        ],
      },
      credits: {
        id: 'credits',
        component: 'CreditsSection',
        heading: { level: 2, text: 'The Pen: Songwriting Credits', display: 'section heading' },
        subheading: {
          text: `Verified songwriting & production credits${CREDITS.length ? ' · Latest credit year ' + Math.max(...CREDITS.map((credit) => credit.year)) : ''}`,
          display: 'small uppercase subtitle beneath the heading',
        },
        display: {
          layout: 'scrollable credits table with Year / Song / Artist / Role columns',
          emphasis: 'a dense archive list rather than marketing copy',
        },
        elements: [
          {
            key: 'tableHeaders',
            label: 'column headers',
            currentText: ['Year', 'Song', 'Artist', 'Role'],
            display: 'desktop table header row',
            needsCopy: false,
            dataNeeded: ['none'],
          },
        ],
        collections: [
          {
            name: 'credits',
            display: 'vertically scrollable credit rows',
            itemTemplate: {
              fields: ['id', 'title', 'artist', 'year', 'role', 'notableAchievement', 'parentProject', 'streamingStats'],
              displayText: 'year, song title, artist, and role with optional achievement/context fields',
            },
            items: CREDITS,
          },
        ],
      },
      interviews: {
        id: 'interviews',
        component: 'Interviews',
        heading: { level: 2, text: 'Interviews & Conversations', display: 'section heading' },
        subheading: {
          text: 'Selected interviews and clips',
          display: 'small uppercase support line under the heading',
        },
        display: {
          layout: 'responsive 3-column card grid with a floating video player',
          emphasis: 'thumbnail, title, platform/year, and open/play action',
        },
        elements: [
          {
            key: 'playerTitle',
            label: 'player title',
            currentText: 'Now Playing',
            display: 'small uppercase label inside the floating player',
            needsCopy: true,
            dataNeeded: ['preferred player title'],
          },
          {
            key: 'playabilityLabel',
            label: 'card action label',
            currentText: 'Watch interview',
            display: 'small uppercase action note under playable cards',
            needsCopy: true,
            dataNeeded: ['preferred playable-card action'],
          },
        ],
        collections: [
          {
            name: 'interviews',
            display: 'cards for playable YouTube items and external interview links',
            itemTemplate: {
              fields: ['id', 'title', 'platform', 'year', 'thumbnail', 'videoId', 'embedId', 'url', 'isPlayable', 'target'],
              displayText: 'thumbnail image, interview title, platform/year, and open/watch action',
            },
            items: INTERVIEWS,
          },
        ],
      },
      footer: {
        id: 'support',
        component: 'Footer',
        heading: { level: 2, text: 'Stay Connected', display: 'large footer headline' },
        subheading: {
          text: 'Get official updates on new music, tour dates, videos, merch, and more.',
          display: 'supporting paragraph above the email signup form',
        },
        display: {
          layout: 'two-column footer with newsletter form and booking block',
          emphasis: 'signup CTA + booking contact + social links',
        },
        elements: [
          {
            key: 'emailPlaceholder',
            label: 'email field placeholder',
            currentText: 'Email address',
            display: 'placeholder text inside the email input',
            needsCopy: true,
            dataNeeded: ['final newsletter placeholder text'],
          },
          {
            key: 'submitButton',
            label: 'signup button',
            currentText: 'Sign Up',
            display: 'submit button adjacent to the email input',
            needsCopy: true,
            dataNeeded: ['final newsletter CTA label'],
          },
          {
            key: 'bookingHeading',
            label: 'booking heading',
            currentText: 'Booking & Management',
            display: 'small uppercase label above the booking email',
            needsCopy: true,
            dataNeeded: ['preferred booking heading'],
          },
          {
            key: 'bookingEmail',
            label: 'booking email',
            currentText: 'info@ericbellinger.com',
            display: 'clickable mailto contact in the booking card',
            needsCopy: false,
            dataNeeded: ['official booking contact if different'],
          },
          {
            key: 'copyright',
            label: 'copyright line',
            currentText: '© current year Eric Bellinger. All Rights Reserved.',
            display: 'small legal footer line at the bottom right',
            needsCopy: true,
            dataNeeded: ['final legal copyright wording'],
          },
        ],
        collections: [
          {
            name: 'socialLinks',
            display: 'icon buttons in the lower footer bar',
            itemTemplate: {
              fields: ['label', 'href', 'icon'],
              displayText: 'social icon button with destination URL',
            },
            items: [
              { label: 'Instagram', href: 'https://www.instagram.com/reels/DVhpzOIDZr-/', icon: 'Instagram' },
              { label: 'Website', href: 'https://ericbellinger.com/', icon: 'Link' },
              { label: 'YouTube', href: 'https://www.youtube.com/results?search_query=Eric+Bellinger', icon: 'Youtube' },
              { label: 'Apple Music', href: 'https://music.apple.com/us/artist/eric-bellinger/395826107', icon: 'Music' },
            ],
          },
        ],
      },
    },
  },
};

writeFileSync(outputPath, `${JSON.stringify(json, null, 2)}\n`);
console.log(outputPath);
