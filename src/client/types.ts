export type Metrics = {
  acousticness: number
  danceability: number
  energy: number
  instrumentalness: number
  liveness: number
  speechiness: number
  valence: number
  loudness: number
  tempo: number
  key?: number | null
  mode?: number | null
  time_signature?: number | null
}

export type Track = {
  albumArt: string
  albumArtSmall: string
  albumName: string
  artistName: string
  trackName: string
  trackId: string
  trackURI: string
  previewURL: string
}

export type MetricChannelProps = {
  metric: string
  min: number
  max: number
  defaultValue: number
  step: number
  maxEmoji: string
  minEmoji: string
  currMetrics: Metrics
  setMetrics: (arg: Metrics) => void
}

export type AuxChannelProps = {
  metric: string
  min: number
  max: number
  defaultValue: number
  possValues: string[]
  currMetrics: Metrics
  setMetrics: (arg: Metrics) => void
}

export type EmojiKBDRowProps = {
  start: number,
  end?: number,
  genres: string[],
  setGenre: (arg: string) => void
}