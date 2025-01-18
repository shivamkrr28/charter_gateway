import { countRewardPoints } from './App';

describe('Reward Points Count', () => {
  test('should calculate points for a $120 purchase', () => {
    const points = countRewardPoints(120);
    expect(points).toBe(90);  // 1x50 + 2x20 = 90 points
  });

  test('count points for a $80 purchase', () => {
    const points = countRewardPoints(80);
    expect(points).toBe(30);  // 1x30 = 30 points
  });

  test('count points for a $45 purchase', () => {
    const points = countRewardPoints(45);
    expect(points).toBe(0);  // No points for amounts under $50
  });

  // test('count points for a $150 purchase', () => {
  //   const points = countRewardPoints(150);
  //   expect(points).toBe(100);  // 2x50 + 1x50 = 100 points
  // });
});
