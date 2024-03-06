import { randomInteger, randomElement } from './helpers'
import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter()

interface GenreMap {
  [key: string]: { type: string; value: string | string[]};
}
interface MetricsMap {
  [key: string]: { type: string; qualifier: string, value: number };
}

interface Metric {
  value: number;
  count: number;
  qualifier: string;
}

interface MetricsObject {
  [key: string]: Metric;
}

export const genresMap: GenreMap = {
  "🪵": { type: "genre", value: "acoustic" },
  "🇳🇬": { type: "genre", value: "afrobeat" },
  "🗿": { type: "genre", value: "alt-rock" },
  "🧑‍🎤": { type: "genre", value: "alternative" },
  "🌫️": { type: "genre", value: "ambient" },
  "🍥": { type: "genre", value: "anime" },
  "🦇": { type: "genre", value: "black-metal" },
  "🪕": { type: "genre", value: "bluegrass" },
  "😩": { type: "genre", value: "blues" },
  "🇧🇷": { type: "genre", value: ["bossanova", "brazil", "forro", "mpb", "pagode"] }, // Note: This emoji is repeated for multiple genres
  "🥁": { type: "genre", value: "breakbeat" },
  "🇬🇧": { type: "genre", value: "british" },
  "🇭🇰": { type: "genre", value: "cantopop" },
  "🐻": { type: "genre", value: "chicago-house" },
  "👶": { type: "genre", value: "children" },
  "🧊": { type: "genre", value: "chill" },
  "🎻": { type: "genre", value: "classical" },
  "♣️": { type: "genre", value: "club" },
  "🤡": { type: "genre", value: "comedy" },
  "🛻": { type: "genre", value: "country" },
  "🕺": { type: "genre", value: "dance" },
  "🇯🇲": { type: "genre", value: "dancehall" },
  "💀": { type: "genre", value: "death-metal" },
  "🏚️": { type: "genre", value: "deep-house" },
  "🦁": { type: "genre", value: "detroit-techno" },
  "🪩": { type: "genre", value: "disco" },
  "🐭": { type: "genre", value: "disney" },
  // "🥁": { type: "genre", value: "drum-and-bass" }, // Omitted due to duplicate emoji
  "🦆": { type: "genre", value: "dub" },
  "🪜": { type: "genre", value: "dubstep" },
  "🔊": { type: "genre", value: "edm" },
  "⚡️": { type: "genre", value: "electro" },
  "🔌": { type: "genre", value: "electronic" },
  "😒": { type: "genre", value: "emo" },
  // "🪕": { type: "genre", value: "folk" }, // Note: This emoji is repeated for multiple genres
  // Additional genres would follow the same pattern...
  //
  "🇫🇷": { type: "genre", value: "french" },
  // "🦆": { type: "genre", value: "funk" },

  "🚘": {type: "genre", value: "garage"},
  "🇩🇪": {type: "genre", value: "german"},
  "⛪️": {type: "genre", value: "gospel"},
  "🧛🏻‍♀️": {type: "genre", value: "goth"},
  "⚙️" : {type: "genre", value: "grindcore"},
  "😌": {type: "genre", value: "groove"},
  "🙄": {type: "genre", value: "grunge"},
  "🎸": {type: "genre", value: "guitar"},
  "😁": {type: "genre", value: "happy"},
  "💎": {type: "genre", value: "hard-rock"},
  "👊" : {type: "genre", value: "hardcore"},
  "🏎️": {type: "genre", value: "hardstyle"},
  "⚓️": {type: "genre", value: "heavy-metal"},
  "💸": {type: "genre", value: "hip-hop"},
  "🎄": {type: "genre", value: "holidays"},
  "🤠": {type: "genre", value: "honky-tonk"},
  "🏠": {type: "genre", value: "house"},
  "🧠": {type: "genre", value: "idm"},
  "🇮🇳": {type: "genre", value: "indian"},
  "🚶‍♂️": {type: "genre", value: "indie"},
  "🕴️": {type: "genre", value: "indie-pop"},
  "🏭": {type: "genre", value: "industrial"},
  "🇮🇷": {type: "genre", value: "iranian"},
  "🇯🇵": {type: "genre", value: ["j-dance", "j-idol", "j-pop","j-rock"]},
  "🎷": { type: "genre", value: "jazz"},
  "🇰🇷": { type: "genre", value: "k-pop"},
  // "👶": { type: "genre", value: "kids"},
  "💃": { type: "genre", value: ["latin]", "latino"]},
  "🇲🇾": { type: "genre", value: "malay"},
  "🇨🇳": { type: "genre", value: "mandopop"},
  "🤘": { type: "genre", value: "metal"},
  // "🤘": { type: "genre", value: "metal-misc"},
  "🌋": { type: "genre", value: "metalcore"},
  "👾": { type: "genre", value: "minimal-techno"},
  "🎞️": { type: "genre", value: "movies"},
  "🐣": { type: "genre", value: "new-age"},
  "⭐️": { type: "genre", value: "new-release"},
  "🎭": { type: "genre", value: "opera"},
  "🎉": { type: "genre", value: "party"},
  "🇵🇭": { type: "genre", value: "philippines-opm"},
  "🎹": { type: "genre", value: "piano"},
  "🍾": { type: "genre", value: "pop"},
  // "🎞️": { type: "genre", value: "pop-film"},
  // "🪜": { type: "genre", value: "post-dubstep"},
  "🪲": { type: "genre", value: "power-pop"},
  "🏘️": { type: "genre", value: "progressive-house"},
  "😵‍💫": { type: "genre", value: "psych-rock"},
  "🧨": { type: "genre", value: "punk"},
  "💣": { type: "genre", value: "punk-rock"},
  "😮‍💨": { type: "genre", value: "r-n-b"},
  "🌧️": { type: "genre", value: "rainy-day"},
  // "🇯🇲": { type: "genre", value: "reggae" },
  "🚗": { type: "genre", value: "road-trip" },
  "🪨": { type: "genre", value: "rock" },
  "🧻": { type: "genre", value: "rock-n-roll" },
  "🐐": { type: "genre", value: "rockabilly" },
  "🌹": { type: "genre", value: "romance" },
  "😔": { type: "genre", value: "sad" },
  "🇨🇺": { type: "genre", value: "salsa" },
  // "🇧🇷": { type: "genre", value: "sertanejo" },
  // "🎭": { type: "genre", value: "show-tunes" },
  "🎤": { type: "genre", value: "singer-songwriter" },
  // "🇯🇲": { type: "genre", value: "ska" },
  "💤": { type: "genre", value: "sleep" },
  "👻": { type: "genre", value: "soul" },
  "💿": { type: "genre", value: "soundtracks" },
  "🇪🇸": { type: "genre", value: "spanish" },
  "📚": { type: "genre", value: "study" },
  "🌞": { type: "genre", value: "summer" },
  "🇸🇪": { type: "genre", value: "swedish" },
  "🌊": { type: "genre", value: "synth-pop" },
  "🇦🇷": { type: "genre", value: "tango" },
  "🤖": { type: "genre", value: "techno" },
  "🫨": { type: "genre", value: "trance" },
  "😎": { type: "genre", value: "trip-hop" },
  "🇹🇷": { type: "genre", value: "turkish" },
  "🏋️": { type: "genre", value: "work-out" },
  "🌎": { type: "genre", value: "world-music" },
};

const metricsMap: MetricsMap = {
  "😐": {
    type: "danceability",
    qualifier: "target_danceability",
    value: 0,
  },
  "🥳": {
    type: "danceability",
    qualifier: "target_danceability",
    value: 1,
  },
  "🎤": {
    type: "instrumentalness",
    qualifier: "target_instrumentalness",
    value: 0,
  },
  "🎺": {
    type: "instrumentalness",
    qualifier: "target_instrumentalness",
    value: 1,
  },
  "🪫": {
    type: "energy",
    qualifier: "target_energy",
    value: 0,
  },
  "🔋": {
    type: "energy",
    qualifier: "target_energy",
    value: 1,
  },
  "🦹": {
    type: "mode",
    qualifier: "target_mode",
    value: 0
  },
  "🦸": {
    type: "mode",
    qualifier: "target_mode",
    value: 1
  },
  "🧟‍♂️": {
    type: "liveness",
    qualifier: "target_liveness",
    value: 0
  },
  "🤸": {
    type: "liveness",
    qualifier: "target_liveness",
    value: 1
  },
  "🥺": {
    type: "valence",
    qualifier: "target_valence",
    value: 0
  },
  "🥹": {
    type: "valence",
    qualifier: "target_valence",
    value: 1
  },
  "🦗": {
    type: "loudness",
    qualifier: "target_loudness",
    value: -60
  },
  "💥": {
    type: "loudness",
    qualifier: "target_loudness",
    value: 0
  },
  "🐌": {
    type: "tempo",
    qualifier: "target_tempo",
    value: 0
  },
  "🚀": {
    type: "tempo",
    qualifier: "target_tempo",
    value: 240
  },
}

const recommendationsURL = "https://api.spotify.com/v1/recommendations"

export const createRandomEmojiQuery = (): string => {
  const genresOptions = Object.keys(genresMap);
  const metricsOptions = Object.keys(metricsMap);

  const numGenres = randomInteger(1, 5);
  const numMetrics = randomInteger(1, 10);

  const genres = Array.from({ length: numGenres }, () => randomElement(genresOptions));
  const metrics = Array.from({ length: numMetrics }, () => randomElement(metricsOptions));
  const query = genres.concat(metrics).join("");
  return query;
}

export const generateRecommendationsURL = (emojis: string): string => {
  let seedGenres: string[] = [];
  let seedMetrics: [string, string, number][] = [];

  // TODO Find Solution without external dependency
  for (const emoji of splitter.splitGraphemes(emojis)) {
    if (genresMap[emoji] !== undefined) {
      if (Array.isArray(genresMap[emoji].value)) {
        seedGenres.push(...genresMap[emoji].value)
      } else {
        seedGenres.push(...genresMap[emoji].value) 
      }
      
    }
    // If Not found add it with target of value
    if (metricsMap[emoji] !== undefined) {
      const { type, qualifier, value } = metricsMap[emoji]
      seedMetrics.push([type, qualifier, value])
    }

  }

  const buildGenreQuery = (genres: string[]): string => {
    // Handle duplicate genre entries
    const genreSet = new Set(genres);
    const genreList = Array.from(genreSet).join(",")
    return "seed_genres=" + encodeURIComponent(genreList)
  }

  const buildMetricsQuery = (metrics: [string, string, number][]): string => {
    // Build Metrics handling for duplicates and averages
    const metricsObject: MetricsObject = {}
    for (const [type, qualifier, value] of metrics) {
      if (metricsObject[type] === undefined) {
        metricsObject[type] = {
          value: 0,
          count: 0,
          qualifier: qualifier
        }
      }
      metricsObject[type].value *= metricsObject[type].count;
      metricsObject[type].value += value;
      metricsObject[type].count += 1;
      metricsObject[type].value /= metricsObject[type].count;

    }

    const metricList = Object.keys(metricsObject).map((metric) => {
      return metricsObject[metric].qualifier + "=" + metricsObject[metric].value
    }).join("&")
    return "&" + metricList
  }

  return recommendationsURL + "?limit=50&" + buildGenreQuery(seedGenres) + buildMetricsQuery(seedMetrics)
}


