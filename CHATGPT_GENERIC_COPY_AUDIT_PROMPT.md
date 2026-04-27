# Eric Bellinger Website Copy Audit Prompt

You are helping me replace generic or placeholder copy on an Eric Bellinger music website.

## Task
Audit the following UI text and produce replacement-ready content/data for each item. Do not write vague marketing filler. Be specific, factual, and artist-appropriate. Use verifiable public sources whenever possible. If a fact cannot be verified, mark it clearly as `NEEDS_RESEARCH` instead of inventing it.

Return **JSON ONLY** with this shape:

```json
{
  "items": [
    {
      "section": "Hero | Tour | Discography | Features | Credits | Interviews | Footer | Data",
      "currentText": "exact existing text",
      "issueType": "placeholder | generic | boilerplate | empty-state | fallback-data",
      "whatIsMissing": ["list of concrete facts or content fields needed"],
      "replacementCopy": "proposed replacement text or null if data is missing",
      "dataToFetch": ["specific URLs, names, dates, venues, links, embeds, etc."],
      "sourceSuggestions": [
        {
          "label": "official site / Spotify / Apple Music / YouTube / press / archive",
          "url": "if known"
        }
      ],
      "confidence": "high | medium | low",
      "notes": "short rationale"
    }
  ]
}
```

## Audit these texts and data gaps

### Hero
- `Latest Single + City Winery Tour`
- `Listen / Pre-save`
- `View Tour`
- `Open Archive`
- current hero description: `City Winery dates plus the latest single — keep the spotlight on the tour while giving listeners a direct path into the new release.`

### Tour
- `Live Experiences`
- `Past Moments • Hide`
- `All Dates`
- `Primary tour view`
- `Past moments archive`
- `No upcoming dates`
- `Check back later for new announcements.`
- `Archived YYYY-MM-DD`

### Discography
- `Browse the archive of Eric Bellinger releases, videos, and project details.`
- `Discography Detail`
- `Why this matters`
- `No verified streaming links published yet.`
- `Streaming / certification`
- `Album credits`
- `Featured voices`
- `Tracks`
- `Writers: pending`
- `Producers: pending`
- `Personnel: pending`
- `Tracklist verification pending.`
- `Music video`
- `Open on YouTube`
- `Plays in-page so fans never leave the archive.`
- `Modal video embed ready: ...`

### Features
- `Collaborations & appearances from the verified JSON`
- `Artwork pending` (fallback copy only)

### Credits
- `Pen Game`
- `Songwriting & Production Credits`

### Interviews
- `Conversations`
- `Select Interviews`
- `Open playable interview ...`
- `Open external interview ...`
- `Playing Video`
- `Video {activeVideo} would play here`
- `Expand interview player`
- `Minimize interview player`
- `Close interview player`

### Footer
- `Stay Connected`
- `Join the inner circle for exclusive updates, early access to tickets, and behind-the-scenes content.`
- `YOUR EMAIL`
- `Join`
- `Management & Booking`
- `All Rights Reserved.`

### Data placeholders
- `#` links for streaming / tour / social
- `Past City, XX`
- `Past Venue`
- generic Unsplash hero cover fallback

## Output rules
- For each item, tell me exactly what factual data I need to replace it.
- If a value is already sufficiently specific and should stay, say `keep`.
- Do not invent facts.
- If a replacement depends on missing data, set `replacementCopy` to `null`.
- Return only JSON. No commentary.
