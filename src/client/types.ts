export type Metrics = {
  acousticness: number
  danceability: number
  energy: number
  instrumentalness: number
  liveness: number
  loudness: number
  mode: number
  speechiness: number
  tempo: number
  valence: number
  key?: number
  time_signature?: number
}

export type ChannelProps = {
  metric: string
  min: number
  max: number
  defaultValue: number
  step: number
  maxEmoji: string
  minEmoji: string
}