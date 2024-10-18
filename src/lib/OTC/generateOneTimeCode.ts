/**
 * 認証コードを生成する
 * @returns {number} 認証コード
 */
export function generateOneTimeCode(): number {
  return Math.floor(Math.random() * 900000) + 100000;
}
