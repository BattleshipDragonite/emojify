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
  key?: number
  mode?: number
  time_signature?: number
}

export type MetricChannelProps = {
  metric: string
  min: number
  max: number
  defaultValue: number
  step: number
  maxEmoji: string
  minEmoji: string
}

export type AuxChannelProps = {
  metric: string
  min: number
  max: number
  defaultValue: number
}