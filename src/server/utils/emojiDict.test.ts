import { generateRecommendationsURL, createRandomEmojiQuery } from './emojiDict';
import * as helperModule from './helpers';

jest.mock('./helpers',() => ({
  randomInteger: jest.fn(),
  randomElement: jest.fn()
}))

describe("generateRecommendationsURL", () => {
  beforeEach(()=>{
    jest.resetAllMocks();
  })

  it('should generate a correct URL with a mix of genres and metrics', () => {
    // Mock `randomInteger` and `randomElement` to return specific values
    (helperModule.randomInteger as jest.Mock).mockReturnValueOnce(2).mockReturnValueOnce(3);
    (helperModule.randomElement as jest.Mock)
    
      .mockReturnValueOnce("🪵") // acoustic
      .mockReturnValueOnce("🇳🇬") // afrobeat
      .mockReturnValueOnce("😐") // danceability: 0
      .mockReturnValueOnce("🥳") // danceability: 1
      .mockReturnValueOnce("🎤"); // instrumentalness: 0

    const emojis = createRandomEmojiQuery(); // Assuming this generates a fixed sequence now due to mocks
    
    const url = generateRecommendationsURL(emojis);

    expect(url).toContain('seed_genres=acoustic%2Cafrobeat');
    expect(url).toContain('target_danceability=0.5'); // Example check, adjust based on actual logic
    expect(url).toContain('target_instrumentalness=0');
  });

  it('should generate a correct URL with no more than 5 genres', () => {

    const emojis = "🇧🇷🇯🇵" // Assuming this generates a fixed sequence now due to mocks
    
    const url = generateRecommendationsURL(emojis);
    const genresString =["bossanova", "brazil", "forro", "mpb", "pagode"].join("%2C")
    
    expect(url).toContain(`seed_genres=${genresString}`);    
  });
})